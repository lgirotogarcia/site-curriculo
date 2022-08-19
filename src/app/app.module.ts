import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { QuemSouEuComponent } from './core/pages/quem-sou-eu/quem-sou-eu.component';
import { ProjetosComponent } from './core/pages/projetos/projetos.component';
import { ThemeChangerComponent } from './shared/components/theme-changer/theme-changer.component';
import { NavLateralComponent } from './shared/components/nav-lateral/nav-lateral.component';
import { CattosComponent } from './core/pages/projetos/cattos/cattos.component';
import { RickMortyComponent } from './core/pages/projetos/rick-morty/rick-morty.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    QuemSouEuComponent,
    ProjetosComponent,
    ThemeChangerComponent,
    NavLateralComponent,
    CattosComponent,
    RickMortyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
