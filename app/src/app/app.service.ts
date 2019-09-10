import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface leaf {
  name: string;
  children: Array<leaf>
}

@Injectable()
export class AppService {
    getLeafs() {
        const leaf: leaf[] = [
          {
            name: 'a',
            children: [
                {
                    name: 'b',
                    children: [
                      {
                      name: 'k',
                      children: [
                      
                      ]
                    }
                    ]
                },
                {
                  name: 'z',
                  children: [
                      {
                          name: 'c',
                          children: [
                      ]
                      }
                  ]
              }
            ],
            
          }
        ];
    
        return leaf;
      }
}