import matter from 'gray-matter';
import { Post } from '../types/post';

export async function getAllPosts() {
  const files = import.meta.glob('../posts/*.md', { as: 'raw' });
  const posts: Post[] = await Promise.all(
    Object.entries(files).map(async ([path, resolver]) => {
      const raw = await resolver();
      const { data, content } = matter(raw as string);
      return {
        id: data.id,
        image: data.image,
        title: data.title,
        date: data.date,
        category: data.category,
        slug: path.split('/').pop()?.replace('.md', ''),
        content,
      };
    })
  );
  // Optionally sort by date
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}