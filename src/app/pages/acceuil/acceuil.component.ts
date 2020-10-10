import { Projets } from './../../../assets/projets';
import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/shared/models/projet';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  projets: Projet[];

  constructor() { }

  ngOnInit(): void {
    this.projets = Projets;
  }

}
