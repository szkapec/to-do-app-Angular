import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

wartoscInputa = ' ';

lista: Array<string> = [];
listaWykonana: Array<string> = [];
listaUsunieta: Array<string> = [];
listaUsunietaZrobiona: Array<string> = [];
historia: Array<string> = [];
i=0;
wykonanieInputa(event) {
    this.wartoscInputa = event.target.value;


  }

  dodajZadanie(){
    this.lista.push(this.wartoscInputa);
    this.wartoscInputa = '';
  }

  zadaniaWykonane(item) {
    this.listaWykonana.push(item)
    this.i=this.i+1
    this.lista = this.lista.filter(pojedynczy => pojedynczy !==item)
  }

  usunZadanie(item) {
    this.listaUsunieta.push(item)
    this.lista = this.lista.filter(pojedynczy => pojedynczy !==item)
    console.log(this.listaWykonana)
  }
  usunZadanieWykonane(zadanie) {
    this.listaUsunietaZrobiona.push(zadanie)
    this.listaWykonana = this.listaWykonana.filter(pojedynczy => pojedynczy !== zadanie)
  }


  zwolnijPamiec(items) {
    this.historia.push(items)
    this.listaUsunieta=this.listaUsunieta.filter( pojedynczy=> pojedynczy!==items)
    this.listaUsunietaZrobiona = this.listaUsunietaZrobiona.filter(pojedynczy => pojedynczy !==items)
  }

  powrot(item) {
    this.listaWykonana.push(item)
    this.listaUsunietaZrobiona = this.listaUsunietaZrobiona.filter(pojedynczy => pojedynczy !==item)
  }
  powrotZadaniaDoWykonania(usuniete) {
    this.lista.push(usuniete)
    this.listaUsunieta = this.listaUsunieta.filter(items => items!==usuniete)
  }
  powrotDoListy(item){
    this.lista.push(item)
    this.listaWykonana = this.listaWykonana.filter(pojedynczy=> pojedynczy !== item)
  }



}
