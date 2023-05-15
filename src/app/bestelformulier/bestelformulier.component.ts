import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Winkel } from '../model/winkel';
import { WinkelService } from '../services/winkel.service';
import { GroenteService } from '../services/groente.service';
import { Groente } from '../model/groente';
import { WinkelmandjeService } from '../services/winkelmandje.service';
import { TeBestellen } from '../model/teBestellen';
import {aantalMagGeenNulZijn} from "../custom-validators/aantal-mag-geen-nul-zijn";

@Component({
  selector: 'app-bestelformulier',
  templateUrl: './bestelformulier.component.html',
  styleUrls: ['./bestelformulier.component.css']
})
export class BestelformulierComponent implements OnInit{
winkelmand!: any[];
winkels!: Winkel[];
groentes!: Groente[];
winkelmandjeLeeg: boolean = true;


bestelformulier = new FormGroup({
  winkel: new FormControl('', Validators.required),
  groente: new FormControl('', Validators.required),
  aantal: new FormControl('', [Validators.min(1), Validators.required])
})
selectedWinkel!: Winkel;
onSubmit() {
  this.winkelmandjeLeeg = false;
  let winkel = this.bestelformulier.get('winkel')?.value;
  let groente = this.bestelformulier.get('groente')?.value;
  let aantal = Number(this.bestelformulier.get('aantal')?.value);
  var totaalPerArtikel = Number(groente[1]);
  let totaalEuro: number = Number(totaalPerArtikel*aantal);
  let totaalDollar: number = totaalEuro * 1.0886;
  let toevoegenAanMandje: any = [winkel, groente[0], groente[1], aantal, totaalEuro, totaalDollar]
  this.winkelmandjeService.addPrijsToTotaal(totaalEuro);
  this.winkelmandjeService.addToWinkelmandje(toevoegenAanMandje)
}

constructor(private winkelSerice: WinkelService, private groentenService: GroenteService, private winkelmandjeService: WinkelmandjeService){}
ngOnInit(): void {
  this.winkelSerice.getWinkels().subscribe(winkels => this.winkels = winkels);
  this.groentenService.getGroenten().subscribe(groentes => this.groentes = groentes);
  this.winkelmandjeService.getWinkelmandje().subscribe(winkelmand => this.winkelmand = winkelmand)
}
sendData() {}

//Valdiaties
get aantal() {
  return this.bestelformulier.get('aantal')!;
}
get winkel() {
  return this.bestelformulier.get('winkel')!;
}
get groente() {
  return this.bestelformulier.get('groente')!;
}
}
