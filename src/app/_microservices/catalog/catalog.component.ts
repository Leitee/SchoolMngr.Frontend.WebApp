import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-catalog',
  styleUrls: ['./catalog.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
