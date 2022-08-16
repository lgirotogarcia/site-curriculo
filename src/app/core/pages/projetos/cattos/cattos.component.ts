import { Component, AfterContentInit } from '@angular/core';
import { CattosService } from 'src/app/services/cattos/cattos.service';
import { Cattos } from 'src/app/models/cattos';

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
    let olar = this.CattosService.getCattos().subscribe(resp => this.cattosArr = resp);
    console.log(olar)
  }

  //TODO fazer armazenamento de imagem para poder acessar uma imagem antiga.
}
