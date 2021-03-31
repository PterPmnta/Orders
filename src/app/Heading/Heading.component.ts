import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Heading',
  templateUrl: './Heading.component.html',
  styleUrls: ['./Heading.component.scss']
})
export class HeadingComponent implements OnInit {

  iconStore: string = `https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png`;

  constructor() { }

  ngOnInit() {
  }

}
