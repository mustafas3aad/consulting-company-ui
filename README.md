<h1 align="center">
  🌐 Consulting Company – Landing Page Frontend
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-Styling-CC6699?style=flat-square&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/i18n-AR_%2F_EN-0ea5e9?style=flat-square" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
</p>

---

<h2 align="center">⚙️ Backend & Live Demo</h2>

<div align="center">

<a href="https://github.com/mustafas3aad/ConsultingCompany-LandingPage" target="_blank">
  <img src="https://img.shields.io/badge/⚙️_Backend_Repository-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

<br/>

<a href="https://novaedge-consulting.vercel.app" target="_blank">
  <img src="https://img.shields.io/badge/🚀_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

</div>

---

## 📖 Overview

**Consulting Company UI** is a modern, responsive **Angular** frontend application that serves as the landing page for a consulting firm. It provides a polished user interface for showcasing services, capturing leads, and handling contact submissions — all while connecting seamlessly to the [backend REST API](https://github.com/mustafas3aad/ConsultingCompany-LandingPage).

Built with **Angular 20**, fully styled with **Bootstrap 5** and **SCSS**, and supports **Arabic / English** localization out of the box.

---

## ✨ Key Features

- **Responsive Landing Page:** Fully responsive design that works across all screen sizes.
- **Multi-language Support:** Built-in AR / EN localization using `@ngx-translate`.
- **Contact & Lead Forms:** Frontend forms for submitting inquiries, connected to the backend API.
- **Service Showcase:** Dynamic sections to display consulting services and offerings.
- **Dark Mode Support:** Full light / dark theme toggle with persistent preference via a dedicated `theme-toggle` component.
- **Angular Routing:** Clean SPA navigation with the Angular Router.
- **Reactive Forms:** Form validation and reactive patterns via `@angular/forms`.
- **SCSS Architecture:** Component-scoped styles with global theming.

---

## 💻 Tech Stack

| | Technology | | Technology |
|--|------------|--|------------|
| **Framework** | Angular 20 | **Language** | TypeScript 5.9 |
| **Styling** | SCSS + Bootstrap 5.3 | **HTTP** | Angular HttpClient |
| **Localization** | @ngx-translate (AR / EN) | **Linting / Format** |Prettier + EditorConfig |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
consulting-company-ui/
│
├── public/
│   └── i18n/                      → Translation files (ar.json / en.json)
│
├── src/
│   ├── app/
│   │   ├── Core/                  → Core module
│   │   │   ├── Constants/         → App-wide constants
│   │   │   ├── Interceptors/      → HTTP interceptors (auth, error, etc.)
│   │   │   ├── Models/            → TypeScript interfaces & models
│   │   │   └── Services/          → Business logic & API services
│   │   │
│   │   ├── Features\home/         → Home feature module
│   │   │   ├── components/        → Feature-specific components
│   │   │   └── pages/             → Routable page components
│   │   │
│   │   ├── Shared/                → Shared standalone components
│   │   │   ├── lang-switcher/     → Language toggle (AR / EN)
│   │   │   ├── theme-toggle/      → Light / dark theme switcher
│   │   │   └── toast/             → Toast notification component
│   │   │
│   │   ├── environments/          → Environment config (dev / prod)
│   │   ├── app.config.ts          → App-level providers & configuration
│   │   ├── app.routes.ts          → Application routing
│   │   ├── app.component.*        → Root component
│   │   └── app.spec.ts            → Root component tests
│   │
│   ├── index.html                 → App shell HTML
│   ├── main.ts                    → Application entry point
│   └── styles.scss                → Global styles
│
├── angular.json                   → Angular workspace configuration
├── tsconfig.json                  → TypeScript configuration
└── package.json                   → Dependencies and scripts
```

## 👨‍💻 Author

<p>
  <a href="https://github.com/mustafas3aad" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-mustafas3aad-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=181717" />
  </a>
</p>

---

## 📸 Screenshots

<div align="center">
  <table border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td><img src="https://github.com/user-attachments/assets/feddc43f-7e99-49c5-8b37-faf972e63614" width="100%" /></td>
      <td><img src="https://github.com/user-attachments/assets/c015bfad-4150-4cc6-afff-8b7e5452ca4d" width="100%" /></td>
    </tr>
  </table>
  <br/>
  <img src="https://github.com/user-attachments/assets/f861abb5-605a-42fb-be2b-d52777e9aac0" width="80%" />
</div>
