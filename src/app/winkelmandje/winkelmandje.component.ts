import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WinkelmandjeService } from '../services/winkelmandje.service';


@Component({
  selector: 'app-winkelmandje',
  templateUrl: './winkelmandje.component.html',
  styleUrls: ['./winkelmandje.component.css']
})


export class WinkelmandjeComponent implements OnInit {
  mandjeArray = []
  wisselKoers: boolean = true;
  constructor(public winkelmandjeService: WinkelmandjeService){}


  ngOnInit(): void {
    this.winkelmandjeService.getWinkelmandje().subscribe(winkelmandje => this.mandjeArray = winkelmandje)
  }

  //toggle voor boolean om euro of dollar zichbaar te maken
  euroNaarDollar() {
    if(this.wisselKoers) {
      this.wisselKoers = false
    } else {
      this.wisselKoers = true
    }
  }
}

