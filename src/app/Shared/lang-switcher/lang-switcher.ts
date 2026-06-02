import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-switcher.html',
  styleUrl: './lang-switcher.scss'
})
export class LangSwitcherComponent {

  private translate = inject(TranslateService);

  get currentLang(): string {
    return this.translate.currentLang ?? this.translate.defaultLang ?? 'en';
  }

  get isArabic(): boolean {
    return this.currentLang === 'ar';
  }

  switchLang(): void {
    const next = this.isArabic ? 'en' : 'ar';
    this.translate.use(next);
    localStorage.setItem('lang', next);
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = next;
  }
}
