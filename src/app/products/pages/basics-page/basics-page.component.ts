import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'jafeth';
  public nameUpper: string = 'JAFETH';
  public fullName: string = 'JaFeTH baDilLo';

  public customDate: Date = new Date();
}
