import { Component, OnInit } from '@angular/core';
import { AppService, leaf } from './app.service';
import { Todo } from './todo';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  leafs: leaf[];
  empList: Array<Todo> = [];
  

  constructor(private appservice: AppService) {}

  

  ngOnInit() {
    this.leafs = this.appservice.getLeafs()[0];
  }
  
  
  onSubmit(todo:Todo) {
    //console.log(this.str);
    //console.log(this.leafs.name);
    this.empList.push({name: this.leafs.name});
    console.log(this.empList);
    this.leafs = this.leafs.children[0];
    
    //console.log(this.todos)
  }

  
  
}
