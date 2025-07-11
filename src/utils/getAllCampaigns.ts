import { Campaign } from '../types/campaign';

export const getAllCampaigns = async (): Promise<Campaign[]> => {
  // Replace with real data or fetch from API if needed
  return [
    {
      id: '1',
      title: 'Churches Built',
      description: 'Help us build 100 churches. We have built 5 so far!',
      image: '/church-building.jpg',
      date: '2025-01-01',
      progress: 0.05,
      goal: '100 Churches',
      current: '5 Churches',
      slug: 'churches',
    },
    {
      id: '2',
      title: 'People Reached',
      description: 'Our goal is to reach 1 million people. 200,000 reached so far!',
      image: '/brazil-crowd.jpg',
      date: '2025-01-01',
      progress: 0.2,
      goal: '1M People',
      current: '200,000 People',
      slug: 'people',
    },
  ];
}; 