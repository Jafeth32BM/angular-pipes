import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Jafeth';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Isela';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Jafeth', 'Isela', 'Dulce', 'Pamela', 'Divani', 'Vanessa', 'Elizabeth'];
  delteClient() {
    this.clients.pop();
  }
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  // KeyValue Pipe
  public person = {
    name: 'Jafeth',
    age: 27,
    address: 'Okinawa, Japan'
  }

  // Async Pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap((value) => console.log('tap: ', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500)
  })
}
