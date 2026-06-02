import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeNewsletterComponent } from '../subscribe-newsletter/subscribe-newsletter';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SubscribeNewsletterComponent, TranslateModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    'FOOTER.SERVICES.FINANCIAL_PLANNING',
    'FOOTER.SERVICES.SOFTWARE_RESEARCH',
    'FOOTER.SERVICES.BUSINESS_SERVICES',
    'FOOTER.SERVICES.QUALITY_RESOURCING',
    'FOOTER.SERVICES.TRAVEL_AVIATION',
    'FOOTER.SERVICES.HEALTHCARE_SERVICES',
  ];
}
