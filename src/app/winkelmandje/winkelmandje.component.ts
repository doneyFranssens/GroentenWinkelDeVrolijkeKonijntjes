import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WinkelmandjeService } from '../services/winkelmandje.service';

let totaal = 0;
@Component({
  selector: 'app-winkelmandje',
  templateUrl: './winkelmandje.component.html',
  styleUrls: ['./winkelmandje.component.css']
})
export class WinkelmandjeComponent implements OnInit {
  mandjeArray = []
  totaalArray = []
  sub: Subscription
  subT: Subscription
  totaalBedrag: number;

  constructor(private winkelmandjeService: WinkelmandjeService){}
  ngOnInit(): void {
    
  }
  ngAfterContentInit() {
    this.sub = this.winkelmandjeService.send_data.subscribe(
      data => {
        this.mandjeArray = data
      }
    )
    this.subT = this.winkelmandjeService.send_totaal.subscribe(
      data => {
        this.totaalArray = data
      }
    )
    
  }
}

