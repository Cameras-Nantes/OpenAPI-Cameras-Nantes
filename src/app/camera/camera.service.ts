import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class CameraService {

  /**
   * Numéro de la page actuelle
   */
  private _currentPage = new Subject<number>();

  /**
   * Pour envoyer le signal de si toutes les caméras sont chargées
   */
  private _componentsLoaded = new Subject<boolean>();

  constructor() { }

  public get currentPage() {
    return this._currentPage;
  }

  public get componentsLoaded() {
    return this._componentsLoaded;
  }
}
