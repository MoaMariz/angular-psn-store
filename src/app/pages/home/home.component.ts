import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component"
import { CardComponent } from "../../components/card/card.component"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, CardComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  promoSwitchOn: boolean = true
  promoSwtichOff: boolean = false
}
