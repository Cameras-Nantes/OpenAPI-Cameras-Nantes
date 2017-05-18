import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ModalService {

  private _triggerOpen = new Subject<boolean>();

  constructor() { }

  public get triggerOpen() {
    return this._triggerOpen;
  }

}
