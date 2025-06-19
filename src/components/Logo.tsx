import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="w-24">
      <img 
        src="/download.png" 
        alt="Dream On World" 
        className="w-full h-auto invert"
      />
    </Link>
  );
}