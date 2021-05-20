import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  choose(event: Event) {
    const target = event.target as HTMLButtonElement
    const bubble = document.querySelector('.bubble') as HTMLDivElement
    
    const locale = target.innerText === 'Masculino' ? 'left' : 'right'
    bubble.classList.remove('left')
    bubble.classList.remove('right')
    bubble.classList.add(locale)
  }
}
