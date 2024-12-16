import { Component, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-basic-signal',
  imports: [],
  templateUrl: './basic-signal.component.html',
  styleUrl: './basic-signal.component.css'
})
export class BasicSignalComponent {
 compteur = signal(0);
 increment():void {
   this.compteur.set(this.compteur() + 1);
 }
 decremant():void {
   this.compteur.update(compteur => compteur - 1);
 }
}
