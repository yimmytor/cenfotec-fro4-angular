import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  getYear(): string {
    return new Date().getFullYear().toString();    
  }

  constructor() { }

  ngOnInit(): void { }

}
