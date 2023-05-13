import { Injectable } from '@angular/core';
import { TeBestellen } from '../model/teBestellen';
import { TEBESTELLEN } from '../mockData/mock-winkelmandje';
import { Winkel } from '../model/winkel';
import { Groente } from '../model/groente';
import { Subject } from 'rxjs';
import { Output } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WinkelmandjeService {
   send_data = new Subject<any>();
   send_totaal = new Subject<any>();
   send_subTotaal = new Subject<any>();
    constructor(){}
    
}
