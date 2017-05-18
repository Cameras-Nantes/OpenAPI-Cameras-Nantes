import { Component, OnInit } from '@angular/core';
import { ModalService } from "app/modal/modal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.css',
  ]
})
export class NavbarComponent implements OnInit {

  private _mainTitle: string;
  private _sourceCode: string;
  private _meOnGitHub: string;

  constructor(private modalService: ModalService) {
    this._mainTitle = 'Caméras de Nantes';
    this._sourceCode = 'Le code source sur GitHub';
    this._meOnGitHub = 'Thibault Osmont sur GitHub';
  }

  ngOnInit() {
    
  }

  /**
   * Pour ouvrir la fenêtre Modal
   */
  public openModal() {
    this.modalService.triggerOpen.next(true);
  }

  public get mainTitle() {
    return this._mainTitle;
  }

  public set mainTitle(title: string) {
    this._mainTitle = title;
  }

  public get sourceCode() {
    return this._sourceCode;
  }

  public set sourceCode(sourceCode: string) {
    this._sourceCode = sourceCode;
  }

  public get meOnGitHub() {
    return this._meOnGitHub;
  }

  public set meOnGitHub(me: string) {
    this._meOnGitHub = me;
  }
}
