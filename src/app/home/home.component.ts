import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
  <div class="container">
  <div class="card">
  <div class="box">
    <div class="content">
      <h2>01</h2>
      <h3>Algolia</h3>
      <p>Algolia is a hosted search engine, offering full-text, numerical, and faceted search, capable of delivering real-time results from the first keystroke.</p >
      <!-- toggle event -->
      <ng-template [ngIf]="showMore"><p>Algolia's powerful API lets you quickly and seamlessly implement search within your websites and mobile applications. Our search API powers billions of queries for thousands of companies every month, delivering relevant results in under 100ms anywhere in the world.</p></ng-template> 
      <a (click)="showMore = !showMore">{{showMore ? 'Read Less ': 'Read More'}}</a>
    </div>
  </div>
</div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>SEO-friendly URLs</h3>
        <p>Manipulating the URL path is a common e-commerce pattern that lets you better reference your result pages.</p>
        <a routerLink="/search"  routerLinkActive="active">View Demo</a>
     
      </div>
    </div>
  </div>


  <div class="card">
  <div class="box">
    <div class="content">
      <h2>03</h2>
      <h3>Infinite Scroll</h3>
      <p>The infinite list is a very common pattern to display a list of results.</p>
      <a  routerLink='/scroll' >View Demo</a>
    </div>
  </div>
</div>
</div>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /* showMore is a toggle event variable for the user to read more or less text */
  showMore = false;

  constructor() {}
}
