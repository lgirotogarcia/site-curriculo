import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { QuemSouEuComponent } from './core/pages/quem-sou-eu/quem-sou-eu.component';
import { ProjetosComponent } from './core/pages/projetos/projetos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeChangerComponent } from './shared/components/theme-changer/theme-changer.component';
import { NavLateralComponent } from './shared/components/nav-lateral/nav-lateral.component';
import { CattosComponent } from './core/pages/projetos/cattos/cattos.component';
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
    CattosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
