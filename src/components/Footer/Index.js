import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-social">
        <a className="footer-social-link" href="#">
          <img
            className="footer-social-link__img"
            src="/imagens/fb.png"
            alt="logo do facebook"
          />
        </a>
        <a className="footer-social-link" href="#">
          <img
            className="footer-social-link__img"
            src="/imagens/ig.png"
            alt="logo do instagram"
          />
        </a>
        <a className="footer-social-link" href="#">
          <img
            className="footer-social-link__img"
            src="/imagens/tw.png"
            alt="logo do twitter"
          />
        </a>
      </nav>
      <img className="footer-logo" src="/imagens/logo.png" alt="" />
      <p className="footer-description">Desenvolvido por MarchingBeagle</p>
    </footer>
  );
}

export default Footer;
