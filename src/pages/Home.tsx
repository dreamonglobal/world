import { useEffect, useRef } from 'react';
import { MapPin, Users, Heart, Globe2, Church, Users2, Megaphone } from 'lucide-react';
import Globe from 'react-globe.gl';

const locations = [
  { 
    name: 'United States',
    lat: 37.0902,
    lng: -95.7129,
    initiatives: [
      {
        title: 'United States of America',
        description: "Dream On has been deeply involved in the United States, particularly in Ohio, where it originated. The organization has hosted numerous events aimed at fostering spiritual growth and community engagement. These include worship sessions in Urbana, Ohio, where each gathering offers a unique spiritual experience , and the annual 'Lifted Up' event in Wapakoneta, Ohio, which features national musicians and serves as a significant community gathering . In addition to these events, Dream On has organized parades to invite community members to their gatherings , and has collaborated with artists like Derek Johnson from Jesus Culture for Dream Sessions in Eaton, Ohio . They also host seasonal events, such as the Nights of Praise in Fostoria Ohio, Clyde Ohio and other cities throughout Ohio. These initiatives reflect Dream On's commitment to creating environments where individuals can rediscover their purpose and faith."
      },
    ]
  },
  { 
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    initiatives: [
      {
        title: 'Brazil',
        description: "Dream On has been actively engaged in Brazil, focusing on youth outreach and spiritual revival through impactful events and community engagement. One of their significant initiatives includes organizing youth conferences that span multiple days, featuring worship sessions, teachings, and community building activities. These conferences have been instrumental in fostering spiritual growth among attendees. For instance, during one such event, there were reports of 80 individuals finding faith, with plans for 50 baptisms following the conference. The Dream On team has also shared updates and recaps of their missions in Brazil, highlighting the preparation and execution of these conferences . Additionally, they have expressed gratitude to supporters who have made these missions possible, underscoring the collaborative effort behind their initiatives . Through these endeavors, Dream On continues to inspire and empower communities in Brazil, aligning with their mission to ignite faith and awaken purpose globally.",
        link: 'https://dreamonbrazil.com'
      },
    ]
  },
  { 
    name: 'Honduras',
    lat: 15.1991,
    lng: -86.2419,
    initiatives: [
      {
        title: 'Honduras',
        description: "Dream On has been actively engaged in Honduras through various initiatives aimed at uplifting communities and spreading hope. Their efforts include organizing annual events like the Dream On Party, which has attracted over 15,000 attendees, providing a platform for worship, community building, and support for local pastors . Additionally, they have hosted women's conferences and children's events, such as pizza parties serving hundreds of kids, offering both nourishment and joy. Beyond events, Dream On has contributed to disaster relief efforts in Honduras, partnering with local organizations to provide essential aid during times of crisis . Their mission trips often involve community outreach, spiritual support, and the distribution of necessities, reflecting their commitment to serving and empowering Honduran communities.",
        link: 'https://dreamonhonduras.com'
      },
    ]
  },
  { 
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    initiatives: [
      {
        title: 'Guatemala',
        description: "Dream On has been actively involved in Guatemala, focusing on community outreach and spiritual support. In response to the devastating volcanic eruption in June 2018, which resulted in significant loss of life and property, Dream On engaged in relief efforts to assist affected communities. Additionally, Dream On has organized mission trips to Guatemala City, partnering with local organizations to create environments where individuals can rediscover their purpose and faith. These trips have included events like 'Dream On: Sueños 2018' aimed at inspiring and empowering participants. Through these initiatives, Dream On continues to fulfill its mission of igniting faith and awakening purpose in communities across Guatemala."
      },
    ]
  },
  { 
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    initiatives: [
      {
        title: 'Dominican Republic',
        description: 'In 2023, Dream On expanded its global mission by hosting a transformative crusade in the Dominican Republic. This event was part of their ongoing commitment to ignite faith and awaken purpose in communities worldwide. The crusade featured dynamic worship sessions, inspirational teachings, and community outreach, aiming to empower individuals to pursue their God-given dreams. The Dominican Republic crusade was a significant milestone for Dream On, reflecting their dedication to creating environments where people can dream again. Through this event, they continued to foster unity, spiritual growth, and a renewed sense of purpose among attendees.'
      },
    ]
  },
  { 
    name: 'Pakistan',
    lat: 30.3753,
    lng: 69.3451,
    initiatives: [
      {
        title: 'Pakistan',
        description: "In 2026, Dream On is embarking on a historic mission to Pakistan. The trip includes a three-night evangelistic crusade in Karachi, a pastors and leaders conference, ministry in the brick kilns where families live in difficult conditions, and visiting water wells that Dream On helped build. The team will also have the incredible opportunity to visit Pakistan's Parliament to pray for the only Christian currently serving in their government. This mission represents a significant step in Dream On's global outreach, bringing hope and the Gospel to a region hungry for transformation.",
        link: '/missions'
      },
    ]
  },
];

const team = [
  {
    name: 'Ben Swartz',
    role: 'Co-Founder & President',
    image: 'ben-swartz.jpg'
  },
  {
    name: 'Jordan Powell',
    role: 'Co-Founder & CEO',
    image: 'jordan-powell.jpg'
  },
  {
    name: 'Hanna Swartz',
    role: 'CFO',
    image: 'hanna-swartz.jpg'
  },
  {
    name: 'Ashley Powell',
    role: 'Director of Outreach',
    image: 'ashley-powell.jpg'
  },
  {
    name: 'Hildo Felix',
    role: 'President of Dream On: Brazil',
    image: 'hildo-felix.jpg'
  },
  {
    name: 'Thiago Egydio',
    role: 'Vice President of Dream On: Brazil',
    image: 'thiago-egydio.jpg'
  },
  {
    name: 'John Peak',
    role: 'Director of Media',
    image: 'john-peak.jpg'
  }
]

export const Home = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      // Type assertion to fix TypeScript error
      const globe = globeRef.current as { controls(): { autoRotate: boolean; autoRotateSpeed: number } };
      if (globe.controls) {
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;
      }
    }
  }, []);

  const scrollToOurStory = () => {
    const ourStorySection = document.getElementById('our-story');
    if (ourStorySection) {
      ourStorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPopoverContent = (point: object) => {
    const { name, initiatives } = point as { name: string; initiatives: { title: string; description: string; link: string }[] };
    return `
      <div class="bg-white text-black p-4 rounded-lg shadow-lg max-w-xs">
        <h3 class="text-xl font-bold mb-3">${name}</h3>
        <div class="space-y-3">
          ${initiatives.map(initiative => `
            <div class="border-b border-gray-200 pb-2 last:border-0">
              <h4 class="font-semibold text-red-600">${initiative.title}</h4>
              <p class="text-sm text-gray-600 mb-1">${initiative.description}</p>
              <a href="${initiative.link}" class="text-sm text-blue-600 hover:underline">Learn More →</a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/FC44165A-FE77-4699-9F48-704A5AB54A10.jpg" 
            alt="Concert crowd with phone lights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">Dream On World</h1>
            <p className="text-2xl mb-8 leading-relaxed">Igniting faith, sparking dreams, and transforming lives through the power of Jesus.</p>
            <button 
              onClick={scrollToOurStory}
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Fundraising Banner - Shows Pakistan until Feb 17, then Brazil */}
      {new Date() < new Date('2026-02-17') ? (
        /* Pakistan Banner - Trip is next week! */
        <section className="py-16 bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pakistan-mission.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white text-green-900 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                🇵🇰 LEAVING NEXT WEEK
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Help Us Get to Pakistan</h2>
              <p className="text-xl text-zinc-200 mb-8 max-w-2xl mx-auto">
                We're days away from a historic mission — a crusade in Karachi, visiting wells we built, and praying in Parliament. Help us finish strong!
              </p>
              
              {/* Funding Progress */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-xl mx-auto">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">Funding Progress</span>
                  <span className="text-2xl font-bold text-white">$38,000 <span className="text-zinc-400 text-lg font-normal">/ $39,500</span></span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-4 mb-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-white to-zinc-300 rounded-full transition-all duration-1000"
                    style={{ width: '96%' }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-400 font-semibold">96% funded — Almost there!</span>
                  <span className="text-white font-medium">$1,500 still needed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/donate"
                  className="bg-white hover:bg-zinc-100 text-green-900 px-8 py-4 rounded-lg text-lg font-bold transition shadow-lg"
                >
                  Help Us Finish Strong
                </a>
                <a 
                  href="/blog/pakistan-2026-answering-the-call"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition border border-white/30"
                >
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Brazil Banner - Shows after Pakistan trip */
        <section className="py-16 bg-gradient-to-r from-green-900 via-green-800 to-yellow-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/brazil-crowd.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
                🇧🇷 MAY 2026 CRUSADE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Help Us Get to Brazil</h2>
              <p className="text-xl text-zinc-200 mb-8 max-w-2xl mx-auto">
                We're believing for thousands to encounter Jesus. Join us in bringing the Gospel to Brazil through worship, youth conferences, and life-changing ministry.
              </p>
              
              {/* Funding Progress */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-xl mx-auto">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold">Funding Progress</span>
                  <span className="text-2xl font-bold text-yellow-400">$35,000 <span className="text-zinc-400 text-lg font-normal">/ $75,000</span></span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-4 mb-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transition-all duration-1000"
                    style={{ width: '47%' }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">47% funded</span>
                  <span className="text-yellow-400 font-medium">$40,000 still needed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/donate"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold transition shadow-lg"
                >
                  Give Toward Brazil
                </a>
                <a 
                  href="/missions"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition border border-white/30"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About & Team Section */}
      <section id="our-story" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
              <p>
                Dream On is a faith-driven organization founded by a group of young adults with a calling to spark dreams and purpose back into the hearts of people worldwide. Since its inception in 2016, Dream On has grown from a simple idea shared over breakfast into a global mission. The organization believes that dreaming requires faith, and they aim to reignite that faith in individuals by creating environments where people can dream again.
              </p>
              <p>
                Through various initiatives, including conferences, mission trips, and community events, Dream On seeks to inspire and empower individuals to pursue their dreams. Their activities have led to significant spiritual impact, such as events resulting in numerous salvations and baptisms. Dream On's commitment to fostering a supportive community underscores their belief that with faith and collective effort, anyone can achieve their dreams.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">Dream Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
            {team.map((member) => (
              <div className="text-center" key={member.name}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-zinc-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">200K+</h3>
              <p className="text-zinc-400">Ministered To</p>
            </div>
            <div className="text-center">
              <Megaphone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">12</h3>
              <p className="text-zinc-400">Crusades</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">5</h3>
              <p className="text-zinc-400">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-900 rounded-lg p-8 text-center">
              <Church className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Churches Built</h3>
              <div className="flex items-center justify-center gap-2 text-4xl font-bold">
                <span className="text-white">5</span>
                <span className="text-zinc-500">/</span>
                <span className="text-zinc-500">100</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full mt-4">
                <div className="bg-white h-full rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-8 text-center">
              <Users2 className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">People Reached</h3>
              <div className="flex items-center justify-center gap-2 text-4xl font-bold">
                <span className="text-white">200,000</span>
                <span className="text-zinc-500">/</span>
                <span className="text-zinc-500">1M</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full mt-4">
                <div className="bg-white h-full rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="/campaigns"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg"
            >
              View All Campaigns
            </a>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Globe2 className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Global Impact</h2>
          </div>
          <div className="w-full flex justify-center items-center" style={{ minHeight: 500 }}>
            <div className="aspect-square">
              <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                backgroundColor="rgba(0,0,0,0)"
                pointsData={locations}
                pointLat="lat"
                pointLng="lng"
                pointColor={() => '#ef4444'}
                pointAltitude={0.1}
                pointRadius={0.5}
                pointLabel={getPopoverContent}
                onPointClick={(point) => {
                  const p = point as { initiatives?: { link: string }[] };
                  if (p.initiatives && p.initiatives[0]?.link) {
                    window.open(p.initiatives[0].link, '_blank');
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/8B9BE75B-381B-4EFB-AC5F-956D6CB60E7D.jpg",
              "/C40BE7A8-BC9E-421A-95FB-7AD2E9DBEE60.jpg",
              "/257981597_4457173604336167_2647571049329824794_n.jpg",
              "/brazil-crowd.jpg",
              "/IMG_4856.JPG",
              "/4CFC8C2C-2603-456A-AC43-52770CC20810.jpg",
              "/DSCF0725.JPG",
              "/09C37E7D-6C57-4AA6-A3B9-7E1DAFB22003.jpg",
              "/IMG_4965.jpeg",
              "/DSCF1695 copy.jpg",
              "/DSCF1302.JPG",
              "/IMG_0453.jpeg"
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt="Event highlight"
                className="w-full h-80 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Heart className="w-12 h-12 mb-6 text-red-500 mx-auto md:mx-0" />
              <h2 className="text-4xl font-bold mb-6">Making a Difference</h2>
              <p className="text-xl text-zinc-400 mb-8">
                Every day, we nourish children in need—feeding their bodies and igniting their God-given purpose. Join us in turning hunger into hope.
              </p>
              <a
                href="/blog/feeding-the-future"
                className="inline-block border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Learn More
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/IMG_4353.jpg" 
                alt="Making a difference" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-zinc-400 mt-6">© 2025 Dream On World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};