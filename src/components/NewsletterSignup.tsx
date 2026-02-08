import { useState } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Mailchimp embedded form submission
    // Using their hosted form URL with redirect to avoid CORS
    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('FNAME', firstName);

    try {
      // Submit to Mailchimp's subscribe endpoint
      // List ID: ffbff3fa9e, Datacenter: us13
      const mailchimpUrl = 'https://world.us13.list-manage.com/subscribe/post?u=4aef1c3aa32e524cd2e029692&id=ffbff3fa9e';
      
      // For Mailchimp, we need to use a form submission approach
      // Create a hidden iframe to handle the submission
      const iframe = document.createElement('iframe');
      iframe.name = 'mailchimp-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = mailchimpUrl;
      form.target = 'mailchimp-iframe';

      const emailInput = document.createElement('input');
      emailInput.name = 'EMAIL';
      emailInput.value = email;
      form.appendChild(emailInput);

      const fnameInput = document.createElement('input');
      fnameInput.name = 'FNAME';
      fnameInput.value = firstName;
      form.appendChild(fnameInput);

      document.body.appendChild(form);
      form.submit();

      // Clean up and show success after a brief delay
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setStatus('success');
        setEmail('');
        setFirstName('');
      }, 1000);

    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h2 className="text-3xl font-bold mb-4">You're In!</h2>
          <p className="text-xl text-zinc-200">
            Thanks for subscribing. Check your inbox for a welcome email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-red-900 to-red-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-zinc-200 mb-8">
            Get updates on our mission trips, impact stories, and ways to get involved. 
            Join our community of dreamers making a difference.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-40"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50 flex-1"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 rounded-full bg-white text-red-900 font-semibold hover:bg-zinc-100 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          {status === 'error' && (
            <p className="mt-4 text-red-300">{errorMessage}</p>
          )}

          <p className="mt-6 text-sm text-zinc-300">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
