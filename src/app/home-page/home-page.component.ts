import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [ 
    RouterLink,
     RouterModule,CommonModule
     ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',

})
export class HomePageComponent {
  showCards = false;
}
