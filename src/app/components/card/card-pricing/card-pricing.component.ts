import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit{
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  @Input()
  gamePricePromo: string | null = null;
  @Input()
  promoTextTransform:string = ""

  constructor() { }
  ngOnInit(): void {
    if (this.gamePricePromo) {
    this.promoTextTransform = 'line-through';
    }
  }
}
