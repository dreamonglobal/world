import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Donate } from './pages/Donate';
import { Contact } from './pages/Contact';
import { Campaigns } from './pages/Campaigns';
import { ChurchesBuilt } from './pages/campaigns/ChurchesBuilt';
import { PeopleReached } from './pages/campaigns/PeopleReached';
import { Missions } from './pages/Missions';

const paypalOptions = {
  clientId: 'Ac00x0zRyN1kl1H-8Im6Xue2kdGHsVXkDfORzEOGV0DxUzaMv8ui1TfBCmTjI2Z6ohWnO3JQnTZT__2P',
  currency: 'USD',
  intent: 'capture',
  vault: true
};

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/churches" element={<ChurchesBuilt />} />
            <Route path="/campaigns/people" element={<PeopleReached />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;