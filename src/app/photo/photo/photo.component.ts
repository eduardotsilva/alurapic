import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  description = "Leão";
  url = "https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=900&t=st=1682117766~exp=1682118366~hmac=7980f7296be5e5e4aaaa4a346365a2bcf4c27d615bd0268f825ab62f5d69e9ad";


}
