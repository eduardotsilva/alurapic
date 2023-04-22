import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  photos = [
    {
      url: 'https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?w=1380&t=st=1682128375~exp=1682128975~hmac=8bbed76c5bcaf61f1673d63e66aae599dadbf7ca9bfcc8b1bcfc25410f23e6a9',
      description: "Imagem 1"
    },
    {
      url: 'https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?w=1380&t=st=1682128379~exp=1682128979~hmac=0b74d602fa93366accf78baed24a5970dd352af4e6361a16cd16203ed779a84e',
      description: "Imagem 2"
    },
  ];



}
