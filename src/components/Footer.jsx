export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer-logo"
        src="/src/assets/Logo.svg"
        alt="restaurtan_logo"
      />
      <div className="footer-menu">
        <ul className="footer-link-column">
          <h5 className="footer-menu-header">Doormat Navigation</h5>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
        <ul className="footer-link-column">
          <h5 className="footer-menu-header">Contact</h5>
          <li>
            <a href="">Address</a>
          </li>
        </ul>
        <ul className="footer-link-column">
          <h5 className="footer-menu-header">Social Media Links</h5>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
