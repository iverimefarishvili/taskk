import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child;
  isActive = true;
  
  @ViewChild("selector", {static: false}) divView: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.child);
    
  }

  public clickChild(name: any): void {
    name.isActive = !name.isActive;
    if(name.isActive) {
      this.divView.nativeElement.classList.add('openfolder');
    } else {
      this.divView.nativeElement.classList.remove('openfolder');
    }
    console.log(name);
  }

}
