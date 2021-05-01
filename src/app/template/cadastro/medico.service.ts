import { Medico } from './medico.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export class MedicoService {
  private medico: Medico[] = [];
  private listaClientesAtualizada = new Subject<Medico[]>();

  getMedico(): Medico[] {
    return [...this.medico];
  }

  adicionarMedico(
    cpf: string,
    nome: string,
    crm: string,
    especialidade: string,
    sexo: string,
    nascimento: string,
    fone: string,
    email: string,
    senha: string
  ) {
    const medico: Medico = {
      cpf: cpf,
      nome: nome,
      crm: crm,
      especialidade: especialidade,
      sexo: sexo,
      nascimento: nascimento,
      fone: fone,
      email: email,
      senha: senha,
    };

    this.medico.push(medico);

    this.listaClientesAtualizada.next([...this.medico]);
  }
  getListaClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }
}
