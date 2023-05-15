import { Injectable } from '@angular/core';
import { Winkel } from '../model/winkel';
import { WINKELS } from '../mockData/mock-winkel';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WinkelService {
  getWinkels(): Observable<Winkel[]> {
    return of(WINKELS);
  }
  constructor() { }
}
