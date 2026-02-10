import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/getAllPosts';
import { Post } from '../types/post';

// Helper to extract plain text from React elements and trim to a length
function getExcerpt(content: unknown, maxLength = 200) {
  let text = '';
  if (typeof content === 'string') {
    text = content;
  } else if (React.isValidElement(content)) {
    const extractText = (node: unknown): string => {
      if (typeof node === 'string') return node;
      if (Array.isArray(node)) return node.map(extractText).join('');
      if (React.isValidElement(node)) {
        const props = (node as React.ReactElement).props;
        if (props && 'children' in props) {
          return extractText(props.children);
        }
      }
      return '';
    };
    text = extractText(content);
  }
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length > maxLength) {
    return text.slice(0, maxLength).trim() + '...';
  }
  return text;
}

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Latest Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block">
              <article className="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="bg-zinc-800 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-zinc-400 mb-4">{getExcerpt(post.content)}</p>
                  <span className="text-white font-semibold hover:text-zinc-300 transition inline-flex items-center">
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};