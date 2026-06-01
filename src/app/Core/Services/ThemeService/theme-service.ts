import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private _theme$ = new BehaviorSubject<Theme>(this.getSavedTheme());

  readonly theme$ = this._theme$.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyTheme(this._theme$.value);
  }

  get isDark(): boolean {
    return this._theme$.value === 'dark';
  }

  toggle(): void {
    const next: Theme = this.isDark ? 'light' : 'dark';
    this._theme$.next(next);
    this.applyTheme(next);
    localStorage.setItem('bizi-theme', next);
  }

  private applyTheme(theme: Theme): void {
    const body = document.documentElement; // نضع الـ attribute على <html>
    if (theme === 'dark') {
      this.renderer.setAttribute(body, 'data-theme', 'dark');
    } else {
      this.renderer.removeAttribute(body, 'data-theme');
    }
  }

  private getSavedTheme(): Theme {
    const saved = localStorage.getItem('bizi-theme') as Theme | null;
    if (saved) return saved;
    // System preference fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
