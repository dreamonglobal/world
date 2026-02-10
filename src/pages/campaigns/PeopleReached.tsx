import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users2 } from 'lucide-react';
import { getAllCampaigns } from '../../utils/getAllCampaigns';
import { Campaign } from '../../types/campaign';

export const PeopleReached = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCampaigns().then(campaigns => {
      const peopleCampaign = campaigns.find(c => c.slug === 'people');
      setCampaign(peopleCampaign || null);
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
          <Users2 className="w-16 h-16 mb-6 text-red-500" />
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
            <h2 className="text-2xl font-bold mb-4">Global Impact</h2>
            <p className="text-zinc-300 mb-6">
              Through our events, mission trips, and outreach programs, we've touched the lives of hundreds of thousands of people across multiple countries. Each person represents a story of hope, transformation, and renewed purpose.
            </p>

            <h2 className="text-2xl font-bold mb-4">Current Reach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">People Reached</h3>
                <p className="text-3xl font-bold text-red-500">{campaign.current.split(' ')[0]}+</p>
                <p className="text-zinc-400 text-sm">Lives impacted globally</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Countries Served</h3>
                <p className="text-3xl font-bold text-red-500">5</p>
                <p className="text-zinc-400 text-sm">Nations where we've made an impact</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Average Cost</h3>
                <p className="text-3xl font-bold text-red-500">$20,000</p>
                <p className="text-zinc-400 text-sm">Per crusade event</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Past Events</h2>
            <p className="text-zinc-300 mb-6">
              Take a look at some of our recent crusades and events that have touched thousands of lives around the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <img 
                src="/8B9BE75B-381B-4EFB-AC5F-956D6CB60E7D.jpg" 
                alt="Crusade event crowd" 
                loading="lazy" className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="/C40BE7A8-BC9E-421A-95FB-7AD2E9DBEE60.jpg" 
                alt="Worship session" 
                loading="lazy" className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="/brazil-crowd.jpg" 
                alt="Community outreach" 
                loading="lazy" className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="/09C37E7D-6C57-4AA6-A3B9-7E1DAFB22003.jpg" 
                alt="Mission trip highlights" 
                loading="lazy" className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="/IMG_4856.JPG" 
                alt="Youth conference" 
                loading="lazy" className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="/4CFC8C2C-2603-456A-AC43-52770CC20810.jpg" 
                alt="Prayer and worship" 
                loading="lazy" className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Join the Mission</h2>
            <p className="text-zinc-300 mb-4">
              Help us reach more people for Jesus. Your support enables us to expand our reach and touch more lives around the world. With an average cost of $20,000 per crusade, your contribution helps us organize impactful events that transform communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/donate?campaign=people"
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