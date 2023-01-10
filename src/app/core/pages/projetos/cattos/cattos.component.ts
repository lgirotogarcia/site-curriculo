import { Component, AfterContentInit } from '@angular/core';

import { CattosService } from '@services/cattos/cattos.service';
import { Cattos } from '@app/interface/cattos';

@Component({
  selector: 'app-cattos',
  templateUrl: './cattos.component.html',
  styleUrls: ['./cattos.component.scss']
})
export class CattosComponent implements AfterContentInit {

  cattosArr: Array<Cattos> = [];

  constructor(private CattosService: CattosService) { }

  ngAfterContentInit(): void {
    this.getCattos();
  }

  getCattos(): void{
    //TODO verificar como faz a tratativa de erros sem ser com a versão deprecated de subscribe.
    this.CattosService.getCattos().subscribe(resp => {this.cattosArr = resp;
    console.log(this.cattosArr)})
  }

  //TODO fazer armazenamento de imagem para poder acessar uma imagem antiga.
}
