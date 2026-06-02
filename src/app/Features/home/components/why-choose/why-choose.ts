import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

export interface ReasonItem {
  icon: SafeHtml;
  titleKey: string;
}

export interface CaseStudy {
  categoryKey: string;
  titleKey: string;
  image: string;
}

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-choose.html',
  styleUrls: ['./why-choose.scss'],
})
export class WhyChooseComponent {

  reasons: ReasonItem[];
  caseStudies: CaseStudy[];

  constructor(private sanitizer: DomSanitizer) {
    this.reasons = [
      {
        titleKey: 'WHY_CHOOSE.REASONS.ITEM1',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25.5" cy="18" r="7" stroke="#1a56db" stroke-width="1.8"/>
          <circle cx="10" cy="30" r="4" stroke="#1a56db" stroke-width="1.8"/>
          <circle cx="41" cy="30" r="4" stroke="#1a56db" stroke-width="1.8"/>
          <circle cx="25.5" cy="43" r="4" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="25.5" y1="25" x2="25.5" y2="39" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="14" y1="30" x2="21.5" y2="30" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="29.5" y1="30" x2="37" y2="30" stroke="#1a56db" stroke-width="1.8"/>
        </svg>`),
      },
      {
        titleKey: 'WHY_CHOOSE.REASONS.ITEM2',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="31" height="22" rx="3" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="18" y1="36" x2="18" y2="42" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="33" y1="36" x2="33" y2="42" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="13" y1="42" x2="38" y2="42" stroke="#1a56db" stroke-width="1.8"/>
          <circle cx="25.5" cy="24" r="4" stroke="#1a56db" stroke-width="1.8"/>
          <path d="M19 32 Q19 28 25.5 28 Q32 28 32 32" stroke="#1a56db" stroke-width="1.8" fill="none"/>
        </svg>`),
      },
      {
        titleKey: 'WHY_CHOOSE.REASONS.ITEM3',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5 8 L28 18 H39 L30.5 24.5 L33.5 35 L25.5 28.5 L17.5 35 L20.5 24.5 L12 18 H23 Z"
            stroke="#1a56db" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
          <circle cx="25.5" cy="42" r="3" stroke="#1a56db" stroke-width="1.8"/>
          <line x1="25.5" y1="36" x2="25.5" y2="39" stroke="#1a56db" stroke-width="1.8"/>
        </svg>`),
      },
      {
        titleKey: 'WHY_CHOOSE.REASONS.ITEM4',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25.5" cy="16" r="8" stroke="#1a56db" stroke-width="1.8"/>
          <path d="M10 44 Q10 32 25.5 32 Q41 32 41 44" stroke="#1a56db" stroke-width="1.8" fill="none"/>
          <path d="M36 20 Q40 18 43 22 Q43 26 39 27 L36 26" stroke="#1a56db" stroke-width="1.6" fill="none"/>
        </svg>`),
      },
    ];

    this.caseStudies = [
      {
        categoryKey: 'WHY_CHOOSE.CASES.CASE1.CATEGORY',
        titleKey:    'WHY_CHOOSE.CASES.CASE1.TITLE',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
      },
      {
        categoryKey: 'WHY_CHOOSE.CASES.CASE2.CATEGORY',
        titleKey:    'WHY_CHOOSE.CASES.CASE2.TITLE',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
      },
      {
        categoryKey: 'WHY_CHOOSE.CASES.CASE3.CATEGORY',
        titleKey:    'WHY_CHOOSE.CASES.CASE3.TITLE',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
      },
      {
        categoryKey: 'WHY_CHOOSE.CASES.CASE4.CATEGORY',
        titleKey:    'WHY_CHOOSE.CASES.CASE4.TITLE',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
      },
    ];
  }
}
