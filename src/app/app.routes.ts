import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'header',
    loadComponent: () =>
      import('./Features/home/components/header/header').then(
        (m) => m.HeaderComponent
      ),
  },
      {
    path: 'services',
    loadComponent: () =>
      import('./Features/home/components/home-services/home-services').then(
        (m) => m.HomeServicesComponent
      ),
  },
        {
    path: 'why-choose',
    loadComponent: () =>
      import('./Features/home/components/why-choose/why-choose').then(
        (m) => m.WhyChooseComponent
      ),
  },
          {
    path: 'book-appointment',
    loadComponent: () =>
      import('./Features/home/components/book-appointment/book-appointment').then(
        (m) => m.BookAppointmentComponent
      ),
  },
            {
    path: 'tech-growth',
    loadComponent: () =>
      import('./Features/home/components/tech-growth/tech-growth').then(
        (m) => m.TechGrowthComponent
      ),
  },
              {
    path: 'latest-news',
    loadComponent: () =>
      import('./Features/home/components/latest-news/latest-news').then(
        (m) => m.LatestNewsComponent
      ),
  },
                {
    path: 'footer',
    loadComponent: () =>
      import('./Features/home/components/footer/footer').then(
        (m) => m.FooterComponent
      ),
  },
                  {
    path: 'home',
    loadComponent: () =>
      import('./Features/home/pages/home/home').then(
        (m) => m.HomeComponent
      ),
  },
];
