import { Component, AfterContentInit } from '@angular/core';

import { RickMortyService } from 'src/app/services/rick-morty/rick-morty.service';
import { RickMorty } from 'src/app/interface/rick-morty';
import { take } from "rxjs/operators"

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss']
})
export class RickMortyComponent implements AfterContentInit {

  charArr: RickMorty[] = [];
  info: RequestInfo = {
    next: "",
   }
  id: string = "";

  constructor(private RickMortyService: RickMortyService) { }

  ngAfterContentInit(): void {
    this.getChars();
  }

  getChars(): void {
    this.RickMortyService.getChars().subscribe(resp => {this.charArr = resp
    console.log(this.charArr);
    })
  }
}
