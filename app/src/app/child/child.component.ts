import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child;
  isActive = true;

  constructor() { }

  ngOnInit() {
    console.log(this.child);
  }

  public clickChild(name: string): void {
    this.isActive = !this.isActive;
    console.log(name);
  }

}
