import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component'
import { CardPricingComponent } from './card-pricing/card-pricing.component'
import { CommonModule } from '@angular/common';
import { CardPromoComponent } from './card-promo/card-promo.component'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardPricingComponent , CardLabelComponent, CommonModule, CardPromoComponent, ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  @Input()
  labelTag: string = ""
  @Input()
  gameCover: string = ""
  @Input()
  labelColor: string = ""
  @Input() 
  labelText: string = ""
  @Input() 
  labelSpacing: string = ""
  @Input()
  gamePricePromo:string = ""
  @Input()
  promoSwitch: boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log('Promo Switch in CardComponent:', this.promoSwitch);
  }

}
