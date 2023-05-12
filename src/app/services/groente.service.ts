import { Injectable } from '@angular/core';
import { Groente } from '../model/groente';
import { GROENTES } from '../mockData/mock-groente';

@Injectable({
    providedIn: 'root'
})
export class GroenteService {
    getGroenten(): Groente[] {
        return GROENTES;
    }
    constructor() {}
}