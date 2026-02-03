import { Globe2, Calendar, MapPin, ExternalLink, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingTrips = [
  {
    id: 'pakistan-2026',
    country: 'Pakistan',
    flag: '🇵🇰',
    title: 'Pakistan Miracle Crusade',
    date: 'February 2026',
    description: 'Join us for a historic mission to Pakistan featuring a three-night evangelistic crusade in Karachi, pastors conference, and community outreach including visiting the wells we helped build.',
    highlights: [
      'Three-night evangelistic crusade',
      'Pastors & leaders conference',
      'Visit water wells we built',
      'Parliament visit for prayer',
    ],
    cta: 'Support This Trip',
    ctaLink: '/donate',
    blogLink: '/blog/pakistan-2026-answering-the-call',
  },
  {
    id: 'honduras-2026',
    country: 'Honduras',
    flag: '🇭🇳',
    title: 'Honduras Coffee Missions Trip',
    date: 'Summer 2026',
    description: 'Experience life-changing mission work in Honduras. Serve communities, share the gospel, and be transformed alongside our team.',
    highlights: [
      'Community outreach',
      'Children\'s ministry',
      'Local church partnership',
      'Cultural immersion',
    ],
    cta: 'Sign Up Now',
    ctaLink: 'https://dreamon.gomethod.app/!/56456/honduras-coffee-missions-trip',
    external: true,
  },
  {
    id: 'brazil-2026',
    country: 'Brazil',
    flag: '🇧🇷',
    title: 'Brazil Crusade',
    date: 'May 2026',
    description: 'Return to Brazil for another powerful crusade. We\'re believing for thousands to encounter Jesus and lives to be forever changed.',
    highlights: [
      'Large-scale evangelistic event',
      'Youth conference',
      'Worship & ministry nights',
      'Leadership training',
    ],
    cta: 'Partner With Us',
    ctaLink: '/donate',
    fundingGoal: 20000,
    fundingNote: 'Help us raise $20,000 by May 1st',
  },
];

export const Missions = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Mission Trips</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join us as we take the gospel to the nations. Whether you go, give, or pray — you're part of the mission.
          </p>
        </div>

        {/* Upcoming Trips */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-red-500" />
            Upcoming Trips
          </h2>
          
          <div className="grid gap-8">
            {upcomingTrips.map((trip) => (
              <div 
                key={trip.id}
                className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="text-6xl">{trip.flag}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{trip.title}</h3>
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        {trip.date}
                      </span>
                    </div>
                    <p className="text-zinc-400 mb-4">{trip.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {trip.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-zinc-800 px-3 py-1 rounded-full text-sm text-zinc-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {trip.fundingNote && (
                      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg p-4 mb-4">
                        <p className="text-red-400 font-semibold flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          {trip.fundingNote}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {trip.external ? (
                        <a
                          href={trip.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition inline-flex items-center gap-2"
                        >
                          {trip.cta}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          to={trip.ctaLink}
                          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition"
                        >
                          {trip.cta}
                        </Link>
                      )}
                      {trip.blogLink && (
                        <Link
                          to={trip.blogLink}
                          className="bg-zinc-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-zinc-700 transition"
                        >
                          Learn More
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-red-500" />
            Ways to Get Involved
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-2">Go</h3>
              <p className="text-zinc-400">
                Join a mission trip and experience life-changing ministry firsthand.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-2">Give</h3>
              <p className="text-zinc-400">
                Your generosity sends teams, builds wells, and transforms communities.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-bold mb-2">Pray</h3>
              <p className="text-zinc-400">
                Cover our teams in prayer for safety, favor, and eternal fruit.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Whether you join us on the ground or support from home, you're part of something eternal.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/donate"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition"
            >
              Give Now
            </Link>
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-zinc-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
