import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { getAllPosts } from '../utils/getAllPosts';
import ReactMarkdown from 'react-markdown';
import { Post } from '../types/post';
import rehypeRaw from 'rehype-raw';

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    getAllPosts().then(posts => {
      setPost(posts.find(p => p.slug === slug));
    });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Post not found</h1>
          <Link to="/blog" className="text-white hover:text-zinc-300 transition inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <Link to="/blog" className="text-white hover:text-zinc-300 transition inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>
        
        <article className="bg-white pb-24">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-96 object-cover mb-8"
          />
          <div className="flex items-center gap-2 text-sm text-zinc-800 mb-4 px-4">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
            <span className="bg-zinc-200 px-2 py-1 rounded-full text-xs">
              {post.category}
            </span>
          </div>
          <div className="prose prose-lg mx-auto">
            <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};