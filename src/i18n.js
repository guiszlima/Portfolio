import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hi There!",
        i_am: "I'M",
        intro_title: "LET ME INTRODUCE MYSELF",
        intro_text: "I am passionate about programming and have gained proficiency in several languages. I love solving problems and creating solutions.",
        fluent_languages: "I am fluent in languages such as",
        languages:" Python, JavaScript, and PHP. ",
        web_technologies: "My interests include building Web Products and learning new things every day.",
        develop_products: "I enjoy developing products with React and Laravel, leveraging modern tools and frameworks for efficient and scalable applications.",
        find_me_on: "FIND ME ON",
        connect_with_me: "Feel free to connect with me",
      },
    },
    
    pt: {
      translation: {
        hello: "Olá!",
        i_am: "EU SOU",
        intro_title: "DEIXE-ME ME APRESENTAR",
        intro_text: "Sou apaixonado por programação e adquiri proficiência em várias linguagens. Adoro resolver problemas e criar soluções.",
        fluent_languages: "Sou fluente em linguagens como",
        languages:" Python, JavaScript, e PHP. ",
        web_technologies: "Meus interesses incluem construir Produtos Webs e aprender coisas novas todos os dias.",
        develop_products: "Gosto de desenvolver produtos com React e Laravel, aproveitando ferramentas e frameworks modernos para aplicações eficientes e escaláveis.",
        find_me_on: "ME ENCONTRE NAS REDES",
        connect_with_me: "Sinta-se à vontade para se conectar comigo",
      },
    },
  },
  lng: "pt", // Idioma inicial
  fallbackLng: "pt", // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já escapa automaticamente
  },
});

export default i18n;
