import { LatestNewsComponent } from './../../components/latest-news/latest-news';
import { TechGrowthComponent } from './../../components/tech-growth/tech-growth';
import { BookAppointmentComponent } from './../../components/book-appointment/book-appointment';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyChooseComponent } from '../../components/why-choose/why-choose';
import { SubscribeNewsletterComponent } from '../../components/subscribe-newsletter/subscribe-newsletter';
import { HomeServicesComponent } from '../../components/home-services/home-services';
import { FooterComponent } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BookAppointmentComponent,
    TechGrowthComponent,
    LatestNewsComponent,
    WhyChooseComponent,
    SubscribeNewsletterComponent,
    HomeServicesComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {}
