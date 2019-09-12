import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface leaf {
  name: string;
  children: Array<leaf>;
}

@Injectable()
export class AppService {
    getLeafs() {
        return [
          {
            name: 'a',
            children: [
                {
                    name: 'b',
                    children: [
                      {
                      name: 'k',
                      children: [
                        {
                          name: 'c',
                          children: [
                        ]
                        }
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
                      },
                      {
                        name: 'n',
                        children: [
                      ]
                      },
                      {
                        name: 'm',
                        children: [
                          {
                            name: 'p',
                            children: [
                          ]
                          }
                      ]
                      }
                  ]
              }
            ],
            
          }
        ];
      }
}