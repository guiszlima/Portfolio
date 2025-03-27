import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hello: "Hi There!",
        i_am: "I'M",
        intro_title: "LET ME INTRODUCE MYSELF",
        intro_text:
          "I am passionate about programming and have gained proficiency in several languages. I love solving problems and creating solutions.",
        fluent_languages: "I am fluent in languages such as",
        languages: " Python, JavaScript, and PHP.",
        web_technologies:
          "My interests include building Web Systems and learning new things every day.",
        develop_products:
          "I enjoy developing products with React and Laravel, leveraging modern tools and frameworks for efficient and scalable applications.",
        find_me_on: "FIND ME ON",
        connect_with_me: "Feel free to connect with me",

        days: "Days I",
        code: "Code",
        connect_me: "Connect with me",
        about: "About",
        projects: "Projects",
        resume: "Resume",
        quick_links: "Quick Links",
        professional_skill: "Professional Skillset",
        tools_i_use: "Tools i use",
        desc_json_generator_for_printers:
          "This Python project is a CLI designed for registering and managing printers, enabling their automated installation on Windows.",
        desc_auto_print_installer:
          "This Python project is a tool for automatically installing printers on a system. It simplifies the process of configuring printers, saving time and effort.",
        desc_projeto_gota_de_mel:
          "POS integrated with WooCommerce and developed with Laravel ",
        desc_auth_api:
          "This authentication API is built using Node.js, Express, and JWT (JSON Web Token). It allows registering new users, logging in, and verifying the authenticity of provided tokens.",
        desc_rpc_python:
          "I implemented a client-server application for remote communication, enabling specific functionalities such as Body Mass Index (BMI) calculation, solving quadratic equations, and palindrome verification.",
        my_recents_projects: "My Recents Projects",
        about_me: `
I am Guilherme, a web developer focused on Back-end.`,
        about_me2: `
I primarily work with Laravel, PHP, JavaScript, and Python, always exploring new technologies to enhance my projects. 
If you're looking for someone to bring your project to life or improve what's already there, let's chat! 🙂`,

        projects_text: "Here are a few projects I've developed recently.",
        hello_how_are_you: "Hello, how are you?",
      },
    },
    pt: {
      translation: {
        hello: "Olá!",
        i_am: "EU SOU",
        intro_title: "DEIXE-ME ME APRESENTAR",
        intro_text:
          "Sou apaixonado por programação e adquiri proficiência em várias linguagens. Adoro resolver problemas e criar soluções.",
        fluent_languages: "Sou fluente em linguagens como",
        languages: " Python, JavaScript, e PHP.",
        web_technologies:
          "Meus interesses incluem construir Sistemas Webs e aprender coisas novas todos os dias.",
        develop_products:
          "Gosto de desenvolver produtos com React e Laravel, aproveitando ferramentas e frameworks modernos para aplicações eficientes e escaláveis.",
        find_me_on: "ME ENCONTRE NAS REDES",
        connect_with_me: "Sinta-se à vontade para se conectar comigo",
        days: "Dias que eu ",
        code: "Programo",
        connect_me: "Conecte-se Comigo",
        about: "Sobre",
        projects: "Projetos",
        resume: "Currículo",
        quick_links: "Links Rápidos",
        professional_skill: "Conjunto de Habilidades Profissionais",
        tools_i_use: "Ferramentas que eu uso",
        desc_json_generator_for_printers:
          "Esse projeto em Python é um CLI feita para o registro e administração de impressoras para a instalação automatizada delas no windows",
        desc_auto_print_installer:
          "Este projeto em Python é uma ferramenta para a instalação automática de impressoras em um sistema. Ele simplifica o processo de configuração de impressoras, economizando tempo e esforço.",
        desc_projeto_gota_de_mel:
          "PDV (Ponto de Venda) integrado ao WooCommerce, desenvolvido com Laravel, permitindo a sincronização em tempo real de estoque, pedidos e produtos. Oferece uma solução prática e eficiente para gerenciar vendas de forma integrada entre lojas físicas e online, com uma interface simples e funcional.",
        desc_auth_api:
          "API de Autenticação com Node.js Esta API de autenticação é construída usando Node.js, Express, e JWT (JSON Web Token). Ela permite registrar novos usuários, realizar login e verificar a autenticidade dos tokens fornecidos.",
        desc_rpc_python:
          "Implementei uma aplicação cliente-servidor para comunicação remota, permitindo funcionalidades específicascomo cálculo do Índice de Massa Corporal (IMC), resolução de equações do segundo grau e verificação depalíndromos.",
        about_me: `
Eu sou o Guilherme, desenvolvedor web focado no Back-end.`,
        about_me2: `Trabalho principalmente com Laravel, PHP,  JavaScript e Python, nunca deixando de explorar novas tecnologias para aplicar meus trabalhos. 
  Se você está procurando alguém para dar vida ao seu projeto ou melhorar o que já existe, bora conversar? 🙂`,
        projects_text: "Alguns projetos que eu desenvolvi recentemente",
        hello_how_are_you: "Olá, tudo bem?",
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
