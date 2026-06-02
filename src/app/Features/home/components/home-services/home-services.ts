import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

export interface ServiceCard {
  icon: SafeHtml;
  titleKey: string;
  descKey: string;
  image: string;
}

export interface OfferItem {
  icon: SafeHtml;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home-services.html',
  styleUrls: ['./home-services.scss'],
})
export class HomeServicesComponent {

  serviceCards: ServiceCard[];
  offerItems: OfferItem[];

  constructor(private sanitizer: DomSanitizer) {

    this.serviceCards = [
      {
        icon: this.s(`<svg viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="36" height="42" rx="3" stroke="#1a56db" stroke-width="2"/>
          <line x1="8" y1="12" x2="30" y2="12" stroke="#1a56db" stroke-width="2"/>
          <line x1="8" y1="18" x2="30" y2="18" stroke="#1a56db" stroke-width="2"/>
          <line x1="8" y1="24" x2="22" y2="24" stroke="#1a56db" stroke-width="2"/>
          <polyline points="6,32 11,38 20,28" stroke="#1a56db" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.CARDS.BUSINESS_PLANNING.TITLE',
        descKey:  'HOME_SERVICES.CARDS.BUSINESS_PLANNING.DESC',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
      },
      {
        icon: this.s(`<svg viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="8" width="40" height="30" rx="3" stroke="#1a56db" stroke-width="2"/>
          <polyline points="8,28 15,18 22,23 30,13 38,8" stroke="#1a56db" stroke-width="2" fill="none" stroke-linecap="round"/>
          <rect x="14" y="1" width="14" height="8" rx="2" stroke="#1a56db" stroke-width="2"/>
          <circle cx="30" cy="28" r="5" stroke="#1a56db" stroke-width="2"/>
          <line x1="34" y1="32" x2="38" y2="36" stroke="#1a56db" stroke-width="2" stroke-linecap="round"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.CARDS.FINANCIAL_PROJECTION.TITLE',
        descKey:  'HOME_SERVICES.CARDS.FINANCIAL_PROJECTION.DESC',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
      },
      {
        icon: this.s(`<svg viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="22" r="12" stroke="#1a56db" stroke-width="2"/>
          <circle cx="26" cy="22" r="5" stroke="#1a56db" stroke-width="2"/>
          <ellipse cx="26" cy="22" rx="26" ry="10" stroke="#1a56db" stroke-width="2"/>
          <line x1="1" y1="22" x2="51" y2="22" stroke="#1a56db" stroke-width="1.5"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.CARDS.INTERNATIONAL_BUSINESS.TITLE',
        descKey:  'HOME_SERVICES.CARDS.INTERNATIONAL_BUSINESS.DESC',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      },
    ];

    this.offerItems = [
      {
        icon: this.s(`<svg viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="14" width="46" height="36" rx="3" stroke="white" stroke-width="2"/>
          <path d="M16 14V8a8 8 0 1116 0v6" stroke="white" stroke-width="2"/>
          <circle cx="24" cy="32" r="5" stroke="white" stroke-width="2"/>
          <line x1="24" y1="37" x2="24" y2="42" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.OFFERS.FINANCIAL_PLANNING.TITLE',
        descKey:  'HOME_SERVICES.OFFERS.FINANCIAL_PLANNING.DESC',
      },
      {
        icon: this.s(`<svg viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 44 L28 8 L52 44 Z" stroke="white" stroke-width="2" fill="none"/>
          <circle cx="28" cy="28" r="8" stroke="white" stroke-width="2"/>
          <line x1="28" y1="20" x2="28" y2="36" stroke="white" stroke-width="1.5"/>
          <line x1="20" y1="28" x2="36" y2="28" stroke="white" stroke-width="1.5"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.OFFERS.QUALITY_RESOURCING.TITLE',
        descKey:  'HOME_SERVICES.OFFERS.QUALITY_RESOURCING.DESC',
      },
      {
        icon: this.s(`<svg viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="44" rx="4" stroke="white" stroke-width="2"/>
          <circle cx="20" cy="20" r="6" stroke="white" stroke-width="2"/>
          <path d="M4 36 Q14 24 28 30 Q40 36 52 24" stroke="white" stroke-width="2" fill="none"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.OFFERS.BUSINESS_SERVICES.TITLE',
        descKey:  'HOME_SERVICES.OFFERS.BUSINESS_SERVICES.DESC',
      },
      {
        icon: this.s(`<svg viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="16" width="52" height="36" rx="3" stroke="white" stroke-width="2"/>
          <path d="M14 16V10a14 14 0 1128 0v6" stroke="white" stroke-width="2"/>
          <path d="M20 34 L26 40 L38 28" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.OFFERS.SOFTWARE_RESEARCH.TITLE',
        descKey:  'HOME_SERVICES.OFFERS.SOFTWARE_RESEARCH.DESC',
      },
      {
        icon: this.s(`<svg viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 4 L52 18 L52 34 Q52 48 28 52 Q4 48 4 34 L4 18 Z" stroke="white" stroke-width="2" fill="none"/>
          <path d="M18 28 L24 34 L38 20" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.OFFERS.TRAVEL_AVIATION.TITLE',
        descKey:  'HOME_SERVICES.OFFERS.TRAVEL_AVIATION.DESC',
      },
      {
        icon: this.s(`<svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 4 Q40 10 44 26 Q40 44 26 48 Q12 44 8 26 Q12 10 26 4Z" stroke="white" stroke-width="2" fill="none"/>
          <path d="M18 22 Q18 16 26 16 Q34 16 34 22 Q34 28 26 32" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
          <circle cx="26" cy="38" r="2" fill="white"/>
        </svg>`),
        titleKey: 'HOME_SERVICES.OFFERS.HEALTHCARE_SERVICES.TITLE',
        descKey:  'HOME_SERVICES.OFFERS.HEALTHCARE_SERVICES.DESC',
      },
    ];
  }

  private s(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
