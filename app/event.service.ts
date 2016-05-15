// Game events service
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';
export class EventService {  
   static state = new Subject(); // Possible states 'start', 'loose', 'win'
   // TODO: create states enum
}