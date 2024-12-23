import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t("hello")} <strong className="red">{t("i_am")}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
  md={5}
  style={{
    paddingTop: "50px",
    paddingBottom: "50px",
    position: "relative", // Necessário para usar z-index
    zIndex: 10,          // Garante que o elemento esteja acima
  }}
  className="about-img"
>
  <img src={laptopImg} alt={t("intro_title")} className="img-fluid" />
</Col>

        </Row>
        <h1 className="project-heading">
         <strong className="red">  {t("professional_skill")}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="red">{t("tools_i_use")}</strong>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
