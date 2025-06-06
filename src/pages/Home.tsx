import React, { useEffect, useRef } from 'react';
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
    role: 'Vide President of Dream On: Brazil',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-4xl font-bold mb-2">150K+</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <span className="text-white">150,000</span>
                <span className="text-zinc-500">/</span>
                <span className="text-zinc-500">1M</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full mt-4">
                <div className="bg-white h-full rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
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
          <div className="w-full flex justify-center items-center mb-24" style={{ minHeight: 500 }}>
            <div className="w-full max-w-3xl aspect-square">
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
            <img 
              src="/8B9BE75B-381B-4EFB-AC5F-956D6CB60E7D.jpg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/C40BE7A8-BC9E-421A-95FB-7AD2E9DBEE60.jpg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/257981597_4457173604336167_2647571049329824794_n.jpg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/IMG_2894.JPG" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/IMG_4856.JPG" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/4CFC8C2C-2603-456A-AC43-52770CC20810.jpg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/DSCF0725.JPG" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/09C37E7D-6C57-4AA6-A3B9-7E1DAFB22003.jpg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/IMG_4965.jpeg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/DSCF1695 copy.jpg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/DSCF1302.JPG" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
            <img 
              src="/IMG_0453.jpeg" 
              alt="Event highlight" 
              className="w-full h-80 object-cover rounded-lg"
            />
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