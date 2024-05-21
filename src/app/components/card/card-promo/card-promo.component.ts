import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-promo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-promo.component.html',
  styleUrl: './card-promo.component.css'
})
export class CardPromoComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

}
