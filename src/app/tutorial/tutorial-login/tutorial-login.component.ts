import { Component, OnInit, EventEmitter } from '@angular/core';

import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-tutorial-login',
  templateUrl: './tutorial-login.component.html',
  styleUrls: ['./tutorial-login.component.css']
})

export class TutorialLoginComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {}

  ngOnInit() {}

  openDialog(){
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeDialog(){
    this.modalActions.emit({action:"modal", params:['close']});
  }
}
