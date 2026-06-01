import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeNewsletterComponent } from '../subscribe-newsletter/subscribe-newsletter';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SubscribeNewsletterComponent],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    'Financial Planning',
    'Software & Research',
    'Business Services',
    'Quality Resourcing',
    'Travel and Aviation',
    'Healthcare Services',
  ];
}
