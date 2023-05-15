import { Injectable } from '@angular/core';
import { Groente } from '../model/groente';
import { GROENTES } from '../mockData/mock-groente';
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GroenteService {
    getGroenten():Observable <Groente[]> {
        return of(GROENTES);
    }
    constructor() {}
}
