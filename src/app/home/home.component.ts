import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
  <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>Infinite Scroll</h3>
        <p>The infinite list is a very common pattern to display a list of results.</p>
        <a  routerLink="scroll" >View Demo</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>SEO-friendly URLs</h3>
        <p>Manipulating the URL path is a common e-commerce pattern that lets you better reference your result pages.</p>
        <a routerLink="search">View Demo</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">View Demo</a>
      </div>
    </div>
  </div>

</div>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
}
