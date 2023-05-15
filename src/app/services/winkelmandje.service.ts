import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Observable, of} from "rxjs";
import { WINKELMANDJE } from "../mockData/mock-winkelmandje";

@Injectable({
    providedIn: 'root'
})

export class WinkelmandjeService {

  totaal: number = 0;
    constructor(){}
  getWinkelmandje(): Observable<any> {
      return of(WINKELMANDJE)
  }
  addToWinkelmandje(object: any): Observable<any> {
      WINKELMANDJE.push(object)
      return of(WINKELMANDJE)
  }

  addPrijsToTotaal(bedrag: number): number {
      this.totaal += bedrag;
      return this.totaal;
  }
  getTotaal(): number {
      return this.totaal;
  }
}
