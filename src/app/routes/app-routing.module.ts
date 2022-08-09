import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattosComponent } from '../core/pages/projetos/cattos/cattos.component';
import { ProjetosComponent } from '../core/pages/projetos/projetos.component';
import { QuemSouEuComponent } from '../core/pages/quem-sou-eu/quem-sou-eu.component';

const routes: Routes = [
  {path:'', component: QuemSouEuComponent},
  {path:'projetos', component: ProjetosComponent},
  {path:'projetos/cattos', component:CattosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
