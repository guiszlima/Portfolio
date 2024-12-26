import React from "react";
import { useTranslation } from "react-i18next";
import usa from  "../../src/Assets/Flags/eua-flag.jpg";
import brasil from  "../../src/Assets/Flags/brazil-flag.png";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Função para alternar idiomas
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
    
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang-switcher"
    >
        
        <img
            src={i18n.language === "en" ? brasil : usa}
            alt={i18n.language === "en" ? "Trocar para Português" : "Switch to English"}
            className="language-icon"
          />
    </button>
  );
};

export default LanguageSwitcher;
