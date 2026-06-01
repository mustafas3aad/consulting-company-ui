import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../../../Shared/theme-toggle/theme-toggle';


interface NavItem {
  label: string;
  hasDropdown: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  activeDropdown = signal<string | null>(null);
  mobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Home', hasDropdown: true },
    { label: 'Pages', hasDropdown: true },
    { label: 'About', hasDropdown: true },
    { label: 'Service', hasDropdown: true },
    { label: 'Contact', hasDropdown: true },
    { label: 'Blog', hasDropdown: true },
  ];

  toggleDropdown(label: string): void {
    this.activeDropdown.update((current) => (current === label ? null : label));
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
