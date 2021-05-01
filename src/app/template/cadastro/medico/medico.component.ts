import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss'],
})
export class MedicoComponent {
  choose(event: Event) {
    const target = event.target as HTMLButtonElement;
    const bubble = document.querySelector('.bubble') as HTMLDivElement;

    const locale = target.innerText === 'Masculino' ? 'left' : 'right';
    bubble.classList.remove('left');
    bubble.classList.remove('right');
    bubble.classList.add(locale);
  }

  especialidade = ['Pediatra', 'Cardiologista', 'Neurologista'];
}
