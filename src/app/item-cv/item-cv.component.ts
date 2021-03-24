import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne?:Personne;


@Output() selectedPersonne = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne() {
    // TODO emmettre un evenement et y injecter personne

    this.selectedPersonne.emit(

      this.personne

    );
    }

  }
