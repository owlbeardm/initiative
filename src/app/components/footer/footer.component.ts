import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version?: String;

  constructor() { }

  ngOnInit() {
  }

}