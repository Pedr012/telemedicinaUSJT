import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './template/cadastro/register/register.component';
import { MedicoComponent } from './template/cadastro/medico/medico.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndexComponent } from './index/index.component';
import { MatButtonModule } from '@angular/material/button';
import { Pergunta1Component } from './perguntas/pergunta1/pergunta1.component';
import { Pergunta2Component } from './perguntas/pergunta2/pergunta2.component';
import { Pergunta3Component } from './perguntas/pergunta3/pergunta3.component';
import { Pergunta4Component } from './perguntas/pergunta4/pergunta4.component';
import { Pergunta5Component } from './perguntas/pergunta5/pergunta5.component';
import { Pergunta6Component } from './perguntas/pergunta6/pergunta6.component';
import { Pergunta7Component } from './perguntas/pergunta7/pergunta7.component';
import { Pergunta8Component } from './perguntas/pergunta8/pergunta8.component';
import { Pergunta9Component } from './perguntas/pergunta9/pergunta9.component';
import { Pergunta10Component } from './perguntas/pergunta10/pergunta10.component';
import { Pergunta11Component } from './perguntas/pergunta11/pergunta11.component';
import { Pergunta12Component } from './perguntas/pergunta12/pergunta12.component';
import { Pergunta13Component } from './perguntas/pergunta13/pergunta13.component';
import { Pergunta14Component } from './perguntas/pergunta14/pergunta14.component';
import { Pergunta15Component } from './perguntas/pergunta15/pergunta15.component';
import { Pergunta16Component } from './perguntas/pergunta16/pergunta16.component';
import { Pergunta17Component } from './perguntas/pergunta17/pergunta17.component';
import { Pergunta18Component } from './perguntas/pergunta18/pergunta18.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MedicoComponent,
    CabecalhoComponent,
    IndexComponent,
    Pergunta1Component,
    Pergunta2Component,
    Pergunta3Component,
    Pergunta4Component,
    Pergunta5Component,
    Pergunta6Component,
    Pergunta7Component,
    Pergunta8Component,
    Pergunta9Component,
    Pergunta10Component,
    Pergunta11Component,
    Pergunta12Component,
    Pergunta13Component,
    Pergunta14Component,
    Pergunta15Component,
    Pergunta16Component,
    Pergunta17Component,
    Pergunta18Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
