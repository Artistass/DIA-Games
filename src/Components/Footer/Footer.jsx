import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default function Footer() {
  return (
    <div className="bg-dark text-white py-3 px-4 d-flex justify-content-between align-items-center">
      <img
        className='footer-logo'
        src="/Logo/letter-d.png"
        alt="Logo"/>
      <h3 className="mb-0 fs-4">2024 © <span className='footer-text'>DIA GAMES</span></h3>
      <a
        href="/licenses"
        className="text-decoration-none display-6 footer-link">
        Licenses
      </a>
    </div>
  );
}
