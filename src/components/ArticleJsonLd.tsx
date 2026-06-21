import type { BlogPost } from '@/lib/blog-data';

interface ArticleJsonLdProps {
  post: BlogPost;
  siteUrl: string;
}

export default function ArticleJsonLd({ post, siteUrl }: ArticleJsonLdProps) {
  const articleUrl = `${siteUrl}${post.canonicalPath}`;
  const imageUrl = `${siteUrl}${post.image}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        alternativeHeadline: post.titleEn,
        description: post.metaDescription,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Person',
          name: 'พลโท ดร.กริช อินทราทิพย์',
          alternateName: 'Lt.Gen. Krich Intratip, Ph.D.',
        },
        publisher: {
          '@type': 'Person',
          name: 'พลโท ดร.กริช อินทราทิพย์',
        },
        mainEntityOfPage: articleUrl,
        keywords: post.keywords.join(', '),
        articleSection: post.category,
        inLanguage: 'th-TH',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'บทความ', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
