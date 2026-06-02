import { LangSwitcherComponent } from './../../../../Shared/lang-switcher/lang-switcher';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../../../Shared/theme-toggle/theme-toggle';
import { TranslateModule } from '@ngx-translate/core';

interface NavItem {
  labelKey: string;
  hasDropdown: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, LangSwitcherComponent, TranslateModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  activeDropdown = signal<string | null>(null);
  mobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { labelKey: 'HEADER.NAV.HOME',    hasDropdown: true },
    { labelKey: 'HEADER.NAV.PAGES',   hasDropdown: true },
    { labelKey: 'HEADER.NAV.ABOUT',   hasDropdown: true },
    { labelKey: 'HEADER.NAV.SERVICE', hasDropdown: true },
    { labelKey: 'HEADER.NAV.CONTACT', hasDropdown: true },
    { labelKey: 'HEADER.NAV.BLOG',    hasDropdown: true },
  ];

  toggleDropdown(key: string): void {
    this.activeDropdown.update((current) => (current === key ? null : key));
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
