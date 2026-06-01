import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../Core/Services/ThemeService/theme-service';


@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="theme-toggle"
      [class.theme-toggle--dark]="themeService.isDark"
      (click)="themeService.toggle()"
      [attr.aria-label]="themeService.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      title="{{ themeService.isDark ? 'Light Mode' : 'Dark Mode' }}"
    >
      <span class="toggle-track">
        <span class="toggle-icons">
          <!-- Sun icon -->
          <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41
                     M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <!-- Moon icon -->
          <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </span>
        <span class="toggle-thumb"></span>
      </span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .toggle-track {
      position: relative;
      width: 56px;
      height: 28px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 100px;
      display: flex;
      align-items: center;
      padding: 3px;
      transition: background 0.3s ease, border-color 0.3s ease;
    }

    .theme-toggle--dark .toggle-track {
      background: rgba(30, 64, 175, 0.4);
      border-color: rgba(30, 64, 175, 0.6);
    }

    .toggle-icons {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 7px;
      pointer-events: none;
    }

    .icon-sun, .icon-moon {
      width: 14px;
      height: 14px;
      transition: opacity 0.3s ease, color 0.3s ease;
      flex-shrink: 0;
    }

    /* Light mode: sun visible, moon faded */
    .icon-sun  { color: rgba(255,255,255,0.9); opacity: 1; }
    .icon-moon { color: rgba(255,255,255,0.4); opacity: 0.4; }

    /* Dark mode: moon visible, sun faded */
    .theme-toggle--dark .icon-sun  { opacity: 0.4; }
    .theme-toggle--dark .icon-moon { opacity: 1; color: rgba(255,255,255,0.9); }

    .toggle-thumb {
      position: absolute;
      width: 22px;
      height: 22px;
      background: #ffffff;
      border-radius: 50%;
      top: 2px;
      left: 3px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    }

    .theme-toggle--dark .toggle-thumb {
      transform: translateX(28px);
      background: #93c5fd;
    }
  `]
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}
}
