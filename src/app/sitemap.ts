import { getAllPosts } from '@/lib/blog-data';
import { SITE_CONFIG } from '@/lib/constants';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();
  const posts = getAllPosts();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${baseUrl}/assets/krich-2026.png`],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/assets/krich-2026.png`],
    },
    ...posts.map((post) => ({
      url: `${baseUrl}${post.canonicalPath}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      images: [`${baseUrl}${post.image}`],
    })),
  ];
}
