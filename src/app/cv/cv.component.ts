import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[] = [];

  selectedPersonne: Personne | undefined;

  constructor() { }

  ngOnInit() : void {


  this.personnes =[

new Personne (1, 'rim', 'frioui', 28, 'rotating_card_profile.png',777777, 'ingenieur'),
new Personne (2, 'imed', 'missaoui', 34, 'rotating_card_profile2.png',44444, 'chef service qualité'),

    ];
  }

  selectPersonne(personne:any) {

    this.selectedPersonne = personne;
  }

}
