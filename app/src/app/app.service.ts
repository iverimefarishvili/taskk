import { Injectable } from '@angular/core';

export interface leaf {
  name: string;
  children: [leaf]
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
                            name: 'c',
                            children: [
                                
                            ]
                        }
                    ]
                }
            ]
          }
        ];
    
        return leaf;
      }
}