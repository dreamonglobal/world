import { Link } from 'react-router-dom';
import { Heart, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/download.png" alt="Dream On World" className="w-24 h-auto invert" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Igniting faith, sparking dreams, and transforming lives through the power of Jesus.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com/dreamonworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/dreamonworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@dreamonworld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/missions" className="text-zinc-400 hover:text-white transition text-sm">Mission Trips</Link></li>
              <li><Link to="/campaigns" className="text-zinc-400 hover:text-white transition text-sm">Campaigns</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-white transition text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white transition text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Campaigns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Campaigns</h3>
            <ul className="space-y-3">
              <li><Link to="/campaigns/churches" className="text-zinc-400 hover:text-white transition text-sm">Churches Built</Link></li>
              <li><Link to="/campaigns/people" className="text-zinc-400 hover:text-white transition text-sm">People Reached</Link></li>
              <li><Link to="/campaigns/wells" className="text-zinc-400 hover:text-white transition text-sm">Water Wells</Link></li>
            </ul>
          </div>

          {/* Contact & Donate */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-red-600 hover:to-pink-600 transition shadow-lg mb-6"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
            <div className="text-zinc-400 text-sm space-y-1 mt-4">
              <p>Dream On: Global</p>
              <p>830 Glynwood Road</p>
              <p>Wapakoneta, Ohio 45895</p>
              <a href="mailto:board@dreamon.world" className="text-red-400 hover:text-red-300 transition block mt-2">
                board@dreamon.world
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Dream On World. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Dream On World is a registered 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </footer>
  );
};
