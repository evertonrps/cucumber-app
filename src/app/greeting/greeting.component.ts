import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  name: string;
  greeting = 'Welcome!!';

  greet(): void {
    this.greeting = this.name !== null ? `Welcome ${this.name}!!` : 'Welcome!!';
  }
  constructor() { }

  ngOnInit() {
  }

}
