import { Link } from 'react-router-dom';
import { Droplets, Heart, MapPin, Book } from 'lucide-react';

export const WellsBuilt = () => {
  const wellsBuilt = 2;
  const wellsGoal = 200;
  const costPerWell = 500;
  const progress = wellsBuilt / wellsGoal;

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Droplets className="w-16 h-16 mb-6 text-blue-400" />
          <h1 className="text-5xl font-bold mb-4 text-center">Water Wells</h1>
          <p className="text-xl text-zinc-400 text-center max-w-2xl">
            Bringing clean water and the Gospel to villages in Pakistan
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden mb-8">
          <img 
            src="/pakistan-well.jpg" 
            alt="Water well in Pakistan" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="bg-zinc-900 rounded-lg p-8 mb-8">
          {/* Progress Section */}
          <div className="text-center mb-10">
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-zinc-800 px-6 py-3 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">{wellsBuilt}</p>
                <p className="text-sm text-zinc-400">Wells Built</p>
              </div>
              <div className="bg-zinc-800 px-6 py-3 rounded-lg">
                <p className="text-3xl font-bold text-white">{wellsGoal}</p>
                <p className="text-sm text-zinc-400">Goal</p>
              </div>
              <div className="bg-zinc-800 px-6 py-3 rounded-lg">
                <p className="text-3xl font-bold text-green-400">${costPerWell}</p>
                <p className="text-sm text-zinc-400">Per Well</p>
              </div>
            </div>
            
            <div className="w-full bg-zinc-800 h-4 rounded-full mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${Math.max(progress * 100, 1)}%` }}
              />
            </div>
            <p className="text-sm text-zinc-400">{Math.round(progress * 100)}% of goal reached</p>
          </div>

          {/* The Need */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
              The Need
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              In rural Pakistan, women travel <strong>multiple hours each way</strong> to carry water from distant streams. 
              This backbreaking journey consumes their day and exposes them to danger. Without access to clean water, 
              families suffer from waterborne diseases and children miss school to help fetch water.
            </p>
          </div>

          {/* The Solution */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Droplets className="w-6 h-6 text-blue-400" />
              The Solution
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              For just <strong className="text-green-400">$500</strong>, we can build a well that transforms an entire village. 
              Each well provides clean, accessible water right in the community — saving hours of travel, 
              improving health, and giving families time back for education, work, and life.
            </p>
          </div>

          {/* The Gospel */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Book className="w-6 h-6 text-yellow-400" />
              More Than Water
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Every well we build includes a <strong>plaque that shares the Gospel</strong> and points people to Jesus. 
              As villagers come daily to draw water, they encounter the message of Living Water. 
              These wells become permanent witnesses in communities that may never see a missionary.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-zinc-800 p-6 rounded-lg text-center">
              <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <p className="text-2xl font-bold">Pakistan</p>
              <p className="text-zinc-400 text-sm">Current Focus Region</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-400">500+</p>
              <p className="text-zinc-400 text-sm">People per well served</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-400">24/7</p>
              <p className="text-zinc-400 text-sm">Gospel witness</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Fund a Well Today</h3>
            <p className="text-zinc-300 mb-6">
              $500 provides clean water and shares the Gospel with an entire village.
            </p>
            <Link
              to="/donate"
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-500 transition inline-block"
            >
              Give Toward a Well
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mb-12">
          <Link 
            to="/campaigns" 
            className="text-zinc-400 hover:text-white transition inline-flex items-center gap-2"
          >
            ← Back to Campaigns
          </Link>
        </div>
      </div>
    </div>
  );
};
