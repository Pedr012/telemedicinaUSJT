import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './template/cadastro/register/register.component';
import { MedicoComponent } from './template/cadastro/medico/medico.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, MedicoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
