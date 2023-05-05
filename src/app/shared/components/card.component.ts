import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-view',
  template: `<div><h1>{{product.name}}</h1> </div>`,
})
export class CardComponent {
  @Input() Product: any;
  constructor() {}
}
