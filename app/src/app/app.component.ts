import { Component, OnInit } from '@angular/core';
import { AppService, leaf} from './app.service';
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
  leafs: leaf[] = [ ];
  empList: Array<Model> = [];
  
  constructor(private appservice: AppService) {}
  

  

  ngOnInit() {
    this.appservice.getLeafs()
    .map(
      data => {
        console.log(data);
        //this.leafs = data;
        
        this.leafs.push({name: data.name, children: data.children} );
        console.log(this.leafs);
      }
    );
    
  }
  
  
  onSubmit(model:Model) {
    //console.log(this.str);
    //console.log(model);
    //console.log(this.leafs.name);
    //this.ind++
    //Object.values(this.leafs).map(
    //  data => {
    //    this.empList.push({index: ++this.index ,name: data.name});
    //    console.log(this.empList);
    //    
    //    this.leafs = data.children;
    //  }
    //);
  }

  onClick() {
    console.log("sry");
  }
  
}
