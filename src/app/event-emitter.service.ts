import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export class EventEmitterService {
  invokeFormComponentFunction = new EventEmitter();
  subsVar: Subscription;  

  constructor() { }

  onClickSideReport(data) {  
    this.invokeFormComponentFunction.emit(data);    
  } 

}
