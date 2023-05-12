import { Injectable } from '@angular/core';
import { Winkel } from '../model/winkel';
import { WINKELS } from '../mockData/mock-winkel';

@Injectable({
  providedIn: 'root'
})
export class WinkelService {
  getWinkels(): Winkel[] {
    return WINKELS;
  }
  constructor() { }
}
