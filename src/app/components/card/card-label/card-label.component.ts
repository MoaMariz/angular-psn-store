import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css'] 


})
export class CardLabelComponent implements OnInit {
  @Input() 
  labelTag: string = ""
  @Input() 
  labelColor: string = ""
  @Input() 
  labelText: string = ""
  @Input() 
  labelSpacing: string = ""

  constructor() {}

  ngOnInit(): void {
  }
}
