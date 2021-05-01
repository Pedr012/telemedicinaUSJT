import { Paciente } from './paciente.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export class PacienteService {
  private paciente: Paciente[] = [];
  private listaClientesAtualizada = new Subject<Paciente[]>();

  getPaciente(): Paciente[] {
    return [...this.paciente];
  }

  adicionarPaciente(
    cpf: string,
    nome: string,
    sexo: string,
    nascimento: string,
    fone: string,
    email: string,
    senha: string
  ) {
    const paciente: Paciente = {
      cpf: cpf,
      nome: nome,
      sexo: sexo,
      nascimento: nascimento,
      fone: fone,
      email: email,
      senha: senha,
    };

    this.paciente.push(paciente);

    this.listaClientesAtualizada.next([...this.paciente]);
  }
  getListaClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }
}
