import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
  @Input() subTotal: number = 0;
  @Input() tax: number = 0;
  @Input() discount: number = 0;
}
