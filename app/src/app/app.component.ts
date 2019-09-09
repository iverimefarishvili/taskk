import { Component, OnInit } from '@angular/core';
import { AppService, leaf } from './app.service';
import { Model } from './model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  clicked = false;
  index = -1;
  ind = -2;
  leafs: leaf[];
  empList: Array<Model> = [];
  

  constructor(private appservice: AppService) {}

  

  ngOnInit() {
    this.appservice.getLeafs().map(
      data => {
        this.leafs = data;
        console.log(data);
      }
    );
  }
  
  
  onSubmit(model:Model) {
    //console.log(this.str);
    console.log(model);
    //console.log(this.leafs.name);
    this.empList.push({index: ++this.index ,name: this.leafs.name});
    console.log(this.empList);
    this.leafs = this.leafs.children[0];
    
    //console.log(this.todos)
  }

  
  
}
