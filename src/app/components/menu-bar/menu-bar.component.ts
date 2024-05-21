import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  youtubeLink: string = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  linkedinLink: string = 'https://www.linkedin.com/in/moacirmariz/';
  githubLink: string = 'https://github.com/MoaMariz';
  

}
