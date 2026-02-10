import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: 'Newsletter Signup',
          from_email: email,
          subject: 'New Newsletter Subscriber',
          message: `New newsletter signup: ${email}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <Mail className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">You're In!</h3>
            <p className="text-zinc-400">Thank you for subscribing. You'll be the first to hear about our missions and impact.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-10 h-10 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
          <p className="text-zinc-400 mb-6">
            Get mission updates, impact stories, and prayer requests delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition inline-flex items-center gap-2 disabled:opacity-50"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};
