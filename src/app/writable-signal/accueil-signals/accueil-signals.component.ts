import { ChangeDetectionStrategy, Component, computed, effect, signal, viewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil-signals',
  templateUrl: './accueil-signals.component.html',
  styleUrl: './accueil-signals.component.css',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    RouterLink
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilSignalsComponent {
  accordion = viewChild.required(MatAccordion);
  isExpanded = false; // Variable pour suivre l'état

  togglePanels(accordion: MatAccordion) {
    if (this.isExpanded) {
      accordion.closeAll(); // Fermer tous les panneaux
    } else {
      accordion.openAll(); // Ouvrir tous les panneaux
    }
    this.isExpanded = !this.isExpanded; // Basculer l'état
  }
}
