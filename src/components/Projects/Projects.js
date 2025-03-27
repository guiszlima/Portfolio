import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import github from "../../Assets/Projects/GitHub_Logo.svg";
import gotasdemel from "../../Assets/Projects/gotasdemel.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">{t("projects")}</h1>
        <p style={{ color: "white" }}>{t("projects_text")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gotasdemel}
              isBlog={false}
              title="Projeto-Gota-de-Mel"
              description={t("desc_projeto_gota_de_mel")}
              ghLink="https://github.com/guiszlima/Projeto-Gota-de-Mel"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Json-generator-for-printers"
              description={t("desc_json_generator_for_printers")}
              ghLink="https://github.com/guiszlima/Json-generator-for-printers"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Auto-Print-Installer"
              description={t("desc_auto_print_installer")}
              ghLink="https://github.com/guiszlima/Auto-Print-Installer"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Authentication-API"
              description={t("desc_auth_api")}
              ghLink="https://github.com/guiszlima/Auto-Print-Installer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="RPC-Python"
              description={t("desc_rpc_python")}
              ghLink="https://github.com/guiszlima/RPC-Python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
