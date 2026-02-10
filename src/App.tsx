import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Donate } from './pages/Donate';
import { Contact } from './pages/Contact';
import { Campaigns } from './pages/Campaigns';
import { ChurchesBuilt } from './pages/campaigns/ChurchesBuilt';
import { PeopleReached } from './pages/campaigns/PeopleReached';
import { WellsBuilt } from './pages/campaigns/WellsBuilt';
import { Missions } from './pages/Missions';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

const paypalOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || '',
  currency: 'USD',
  intent: 'capture',
  vault: true
};

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-black text-white flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/churches" element={<ChurchesBuilt />} />
              <Route path="/campaigns/people" element={<PeopleReached />} />
              <Route path="/campaigns/wells" element={<WellsBuilt />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
