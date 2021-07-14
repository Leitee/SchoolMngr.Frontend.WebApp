import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-microservices',
  styleUrls: ['./microservices.component.scss'],
  template: `
    <ngx-one-column-layout>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class MicroservicesComponent implements OnInit {

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
