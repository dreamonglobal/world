import { useState } from 'react';
import { Share2, Facebook, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export const ShareButtons = ({ url, title, description }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const fullUrl = `https://dreamon.world${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-500 text-sm flex items-center gap-1">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDesc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
        aria-label="Share on X"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <button
        onClick={copyLink}
        className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
      </button>
      {typeof navigator.share === 'function' && (
        <button
          onClick={() => {
            navigator.share({
              title: encodedTitle,
              text: description,
              url: fullUrl,
            }).catch(() => {});
          }}
          className="text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-zinc-800"
          aria-label="Share via device"
        >
          <Share2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
