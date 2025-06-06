import matter from 'gray-matter';

export function loadPost(raw: string) {
  const { data, content } = matter(raw);
  return { ...data, content };
}
