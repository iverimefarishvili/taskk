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
    console.log(this.divView);
    if(name.isActive) {
      this.divView.nativeElement.name.classList.add('openfolder');
    } else {
      name.this.divView.nativeElement.classList.remove('openfolder');
    }
    console.log(name);
  }

}
