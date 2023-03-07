import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <a routerLink="/" style="margin-right: 1rem">Home</a>
      <a routerLink="/musicians">Musicians</a>
      <a routerLink="/musicians_clone">Musicians clone</a>
    </header>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class HeaderComponent {}
