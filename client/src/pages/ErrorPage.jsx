import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="p-3">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
}
