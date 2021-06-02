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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MedicoComponent,
    CabecalhoComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
