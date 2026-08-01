import type { BlogPost } from '@/lib/blog-data';
import { serializeJsonLd } from '@/lib/json-ld';

interface ArticleJsonLdProps {
  post: BlogPost;
  siteUrl: string;
}

export default function ArticleJsonLd({ post, siteUrl }: ArticleJsonLdProps) {
  const articleUrl = `${siteUrl}${post.canonicalPath}`;
  const imageUrl = `${siteUrl}${post.image}`;
  const personId = `${siteUrl}/#person`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${articleUrl}#article`,
        headline: post.title,
        alternativeHeadline: post.titleEn,
        description: post.metaDescription,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Person',
          '@id': personId,
          name: 'พลโท ดร.กริช อินทราทิพย์',
          alternateName: 'Lt.Gen. Krich Intratip, Ph.D.',
        },
        publisher: {
          '@type': 'Person',
          '@id': personId,
          name: 'พลโท ดร.กริช อินทราทิพย์',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        keywords: post.keywords.join(', '),
        articleSection: post.category,
        inLanguage: 'th-TH',
        about: post.keywords.slice(0, 8),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'บทความ', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
      },
      ...(post.faq.length
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${articleUrl}#faq`,
              mainEntity: post.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
    />
  );
}
