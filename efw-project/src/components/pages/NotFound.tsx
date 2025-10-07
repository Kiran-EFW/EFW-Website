import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="utility-page_component">
      <div className="utility-page_wrapper">
        <img src="/images/Logo-EFW.svg" alt="EFW Logo" className="utility-page_image" />
        <h1>Oops, something went wrong</h1>
        <div>The page you are looking for doesn't exist or has been moved.</div>
        <Link to="/" className="button is-black w-button">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
