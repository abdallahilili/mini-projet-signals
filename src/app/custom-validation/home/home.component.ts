// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // Lien vers le fichier HTML
  styleUrls: ['./home.component.css'] , // Lien vers le fichier CSS
  imports: [MatIcon,RouterLink]

})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
