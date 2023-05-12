import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Winkel } from '../model/winkel';
import { WinkelService } from '../services/winkel.service';
import { GroenteService } from '../services/groente.service';
import { Groente } from '../model/groente';
import { WinkelmandjeService } from '../services/winkelmandje.service';
import { TeBestellen } from '../model/teBestellen';

@Component({
  selector: 'app-bestelformulier',
  templateUrl: './bestelformulier.component.html',
  styleUrls: ['./bestelformulier.component.css']
})
export class BestelformulierComponent implements OnInit{
winkels!: Winkel[];
groentes!: Groente[];
winkelmandje!: TeBestellen[];

mandjeArray: TeBestellen[] = [];
totaalArray = [];

bestelformulier = new FormGroup({
  winkel: new FormControl(''),
  groente: new FormControl(''),
  aantal: new FormControl('')
})

get groenteNaam() {
  return this.bestelformulier.get('winkel.naam');
}
selectedWinkel!: Winkel;
onSubmit() {
  let winkel = this.bestelformulier.get('winkel')?.value;
  let groente = this.bestelformulier.get('groente')?.value;
  //var splitStrng = groente.split(' ', 3);
  console.log(groente);
  let aantal = this.bestelformulier.get('aantal')?.value;
  this.mandjeArray.push([winkel, groente[0], groente[1], aantal]);
  var aantalArtikel = Number(aantal);
  var totaalPerArtikel = Number(groente[1]);
  this.totaalArray.push(totaalPerArtikel*aantalArtikel)

}

constructor(private winkelSerice: WinkelService, private groentenService: GroenteService, private winkelmandjeService: WinkelmandjeService){}
ngOnInit(): void {
  this.winkels = this.winkelSerice.getWinkels();
  this.groentes = this.groentenService.getGroenten();
}
sendData() {
  this.winkelmandjeService.send_data.next(this.mandjeArray)
  this.winkelmandjeService.send_totaal.next(this.totaalArray)
}

}
