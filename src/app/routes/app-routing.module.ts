import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattosComponent } from '@pages/projetos/cattos/cattos.component';
import { ProjetosComponent } from '@pages/projetos/projetos.component';
import { RickMortyComponent } from '@pages/projetos/rick-morty/rick-morty.component';
import { QuemSouEuComponent } from '@pages/quem-sou-eu/quem-sou-eu.component';

const routes: Routes = [
  {path:'', component: QuemSouEuComponent},
  {path:'projetos', component: ProjetosComponent},
  {path:'projetos/cattos', component: CattosComponent},
  {path:'projetos/rick-and-morty', component: RickMortyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
