import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Church } from 'lucide-react';
import { getAllCampaigns } from '../../utils/getAllCampaigns';
import { Campaign } from '../../types/campaign';

export const ChurchesBuilt = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCampaigns().then(campaigns => {
      const churchesCampaign = campaigns.find(c => c.slug === 'churches');
      setCampaign(churchesCampaign || null);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-black text-white pt-32 text-center">Loading...</div>;
  }

  if (!campaign) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 text-center">
        <h1 className="text-4xl font-bold mb-8">Campaign not found</h1>
        <Link to="/campaigns" className="text-white hover:text-zinc-300 transition inline-flex items-center gap-2">
          ← Back to Campaigns
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <Church className="w-16 h-16 mb-6 text-red-500" />
          <h1 className="text-5xl font-bold mb-4 text-center">{campaign.title}</h1>
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3">
            <span className="bg-zinc-800 px-2 py-1 rounded-full text-xs">
              {campaign.goal}
            </span>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-8 mb-8">
          <div className="text-center mb-8">
            <p className="text-zinc-300 text-lg mb-4">
              {campaign.description}
            </p>
            <div className="w-full bg-zinc-800 h-2 rounded-full mt-2 mb-2">
              <div className="bg-white h-full rounded-full" style={{ width: `${campaign.progress * 100}%` }}></div>
            </div>
            <div className="text-xs text-zinc-400">{campaign.current} / {campaign.goal}</div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-zinc-300 mb-6">
              Dream On is committed to building churches around the world to provide communities with places of worship, fellowship, and spiritual growth. Each church we build becomes a beacon of hope and a center for community development.
            </p>

            <h2 className="text-2xl font-bold mb-4">Current Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Churches Completed</h3>
                <p className="text-3xl font-bold text-red-500">{campaign.current.split(' ')[0]}</p>
                <p className="text-zinc-400 text-sm">Successfully built and operational</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Communities Served</h3>
                <p className="text-3xl font-bold text-red-500">5,000+</p>
                <p className="text-zinc-400 text-sm">People impacted by our churches</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Average Cost</h3>
                <p className="text-3xl font-bold text-red-500">$7,000</p>
                <p className="text-zinc-400 text-sm">Per church construction</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Churches</h2>
            <p className="text-zinc-300 mb-6">
              Take a look at some of the churches we've built and the communities they serve around the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <img 
                src="/church-building.jpg" 
                alt="Church building exterior" 
                className="w-full h-48 object-cover rounded-lg"
              />
                <img 
                  src="/IMG_4965.jpeg" 
                  alt="Church serving community" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              <img 
                src="/257981597_4457173604336167_2647571049329824794_n.jpg" 
                alt="Church interior worship" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">How You Can Help</h2>
            <p className="text-zinc-300 mb-4">
              Your support helps us continue building churches in communities that need them most. Every donation brings us closer to our goal of {campaign.goal}. With an average cost of $7,000 per church, your contribution makes a significant impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/donate"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-center font-semibold transition no-underline"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-white hover:text-black transition no-underline"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pb-16">
          <Link to="/campaigns" className="text-white hover:text-zinc-300 transition inline-flex items-center gap-2">
            ← Back to Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
}; 