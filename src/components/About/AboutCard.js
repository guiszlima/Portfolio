import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

function AboutCard() {
    const { t } = useTranslation();
  
  return (
    <Card className="quote-card-view">
     <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      {t('about_me')} <br /><br />
      {t('about_me2')}
    </p>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
