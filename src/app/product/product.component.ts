import { TestComponentRenderer } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  template: `<div><h1>{{product.name}}</h1> </div>`,
})
export class ProductComponent {
  @Input() Product: any;
  constructor() {}
}
