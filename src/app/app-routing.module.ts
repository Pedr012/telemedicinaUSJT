import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './template/cadastro/register/register.component';
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

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'perg1', component: Pergunta1Component },
  { path: 'perg2', component: Pergunta1Component },
  { path: 'perg3', component: Pergunta1Component },
  { path: 'perg4', component: Pergunta1Component },
  { path: 'perg5', component: Pergunta1Component },
  { path: 'perg6', component: Pergunta1Component },
  { path: 'perg7', component: Pergunta1Component },
  { path: 'perg8', component: Pergunta1Component },
  { path: 'perg9', component: Pergunta1Component },
  { path: 'perg10', component: Pergunta1Component },
  { path: 'perg11', component: Pergunta1Component },
  { path: 'perg12', component: Pergunta1Component },
  { path: 'perg13', component: Pergunta1Component },
  { path: 'perg14', component: Pergunta1Component },
  { path: 'perg15', component: Pergunta1Component },
  { path: 'perg16', component: Pergunta1Component },
  { path: 'perg17', component: Pergunta1Component },
  { path: 'perg18', component: Pergunta1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
