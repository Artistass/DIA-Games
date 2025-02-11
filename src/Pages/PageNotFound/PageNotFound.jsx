import "bootstrap/dist/css/bootstrap.min.css";
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="display-5 fw-semibold mb-4">Page Not Found</h2>
      <p className="lead text-muted mb-4">
        The page you’re looking for doesn’t exist or has been removed.
      </p>
      <a href="/" className="btn btn-primary px-4 py-2">
        Go Home
      </a>
    </div>
  );
}
