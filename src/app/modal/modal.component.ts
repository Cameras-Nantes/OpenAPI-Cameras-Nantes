import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { ModalService } from "app/modal/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private modalService: ModalService) {
    this.modalService.triggerOpen.subscribe(trigger => {
      if(trigger) {
        this.modalActions.emit({action: 'modal', params:['open']});
      } else {
        this.modalActions.emit({action: 'modal', params:['close']});
      }
    });
  }

  ngOnInit() {
  }

}
