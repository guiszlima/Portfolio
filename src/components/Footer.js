import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Links do Navbar */}
        <Col
          md="4"
          className="footer-links"
          style={{ position: "relative", zIndex: 10 }}
        >
          <h3>{t("quick_links")}</h3>
          <ul className="footer-nav-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/project" className="footer-link">
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link to="/resume" className="footer-link">
                {t("resume")}
              </Link>
            </li>
          </ul>
        </Col>

        {/* Ícones Sociais */}
        <Col md="4" className="footer-body">
          <h3>{t("connect_me")}</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/guiszlima"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/guilherme-spicacci-lima-177a63245/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/guiszlima"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/5511991993229?text=Olá%20Guilherme!%20Encontrei%20seu%20portfólio%20e%20gostaria%20de%20conversar"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
