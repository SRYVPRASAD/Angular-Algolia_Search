import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<header class="header">
  <h1 class="header-title">
    <a href="/">Algolia Search</a>
  </h1>
  <p class="header-subtitle">
    Using
    <a href="https://github.com/algolia/angular-instantsearch">
      Angular InstantSearch
    </a>
  </p>

  <nav class="header-right">
    <a class="active" routerLink="home" routerLinkActive="active">| Home </a>
    <a routerLink="scroll" routerLinkActive="active">| Infinite Scroll </a>
    <a routerLink="search" routerLinkActive="active">| Search URL</a>
  </nav>
</header>

<router-outlet> </router-outlet>`,
  styleUrls: ['./algolia.css'],
})
export class AppComponent {}
