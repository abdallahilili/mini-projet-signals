import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, MatSidenavModule, MatButtonModule, MatListModule, RouterLink],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-projet-signals';
  
  isSidenavOpened = true; // Etat initial de la barre latérale (true = ouverte)

  // Méthode pour basculer la barre latérale
  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
