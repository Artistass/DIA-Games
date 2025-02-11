import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3 header-container">
      <img
        className='header-logo'
        src="/Logo/letter-d.png"
        alt="Logo"/>
      <h6
        className="mb-0 header-title">
        Real game
        <span className='fs-4 fw-light text-warning ps-3 header-title-2'>
          Experience
        </span>
      </h6>
    </div>
  );
}
