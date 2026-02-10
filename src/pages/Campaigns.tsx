import { useEffect, useState } from 'react';
import { getAllCampaigns } from '../utils/getAllCampaigns';
import { Campaign } from '../types/campaign';
import { useNavigate } from 'react-router-dom';

export const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCampaigns().then(setCampaigns);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center">Our Campaigns</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map(campaign => (
            <article
              key={campaign.id}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => navigate(`/campaigns/${campaign.slug}`)}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/campaigns/${campaign.slug}`); }}
              aria-label={`View details for ${campaign.title}`}
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">{campaign.title}</h2>
                <p className="text-zinc-400 mb-4">{campaign.description}</p>
                <div className="w-full bg-zinc-800 h-2 rounded-full mt-2 mb-2">
                  <div className="bg-white h-full rounded-full" style={{ width: `${campaign.progress * 100}%` }}></div>
                </div>
                <div className="text-xs text-zinc-400">{campaign.current} / {campaign.goal}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}; 