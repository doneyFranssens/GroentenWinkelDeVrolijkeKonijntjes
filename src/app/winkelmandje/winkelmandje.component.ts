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
  totaalArray = []
  sub: Subscription
  subT: Subscription
  subTotBedrag: number;
  subA: Subscription

  
   
  constructor(private winkelmandjeService: WinkelmandjeService){
    this.subA = this.winkelmandjeService.send_subTotaal.subscribe(
      data => {
        this.subTotBedrag = data
      }
    )
  }
  
  ngOnInit(): void {
    this.subA = this.winkelmandjeService.send_subTotaal.subscribe(
      data => {
        this.subTotBedrag = data
      }
    )
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

