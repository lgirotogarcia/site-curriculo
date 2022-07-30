import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from '../core/pages/projetos/projetos.component';
import { QuemSouEuComponent } from '../core/pages/quem-sou-eu/quem-sou-eu.component';

const routes: Routes = [
  {path:'', component: QuemSouEuComponent},
  {path:'projetos', component: ProjetosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
