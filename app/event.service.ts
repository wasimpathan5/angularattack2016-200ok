// Game events 

import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()



export class EventService {  
   static state = new Subject();   
}