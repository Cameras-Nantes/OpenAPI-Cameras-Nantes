import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeActions } from 'angular2-materialize';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  private _city: string;
  @Input()
  private _lattitude: number;
  @Input()
  private _longitude: number;
  @Input()
  private _location: string;
  @Input()
  private _url: string;
  @Input()
  private _zip: string;

  private cardActions = new EventEmitter<string | MaterializeActions>();

  constructor() { }

  ngOnInit() {
    /**
     * Pour recharger l'image de la caméra toutes les secondes
     */
    setInterval(() => this.url += new Date(), 1000);
  }

  public get city(): string {
    return this._city;
  }

  public set city(value: string) {
    this._city = value;
  }

  public get lattitude(): number {
    return this._lattitude;
  }

  public set lattitude(value: number) {
    this._lattitude = value;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public set longitude(value: number) {
    this._longitude = value;
  }

  public get location(): string {
    return this._location;
  }

  public set location(value: string) {
    this._location = value;
  }

  public get url(): string {
    return this._url;
  }

  public set url(value: string) {
    this._url = value;
  }

  public get zip(): string {
    return this._zip;
  }

  public set zip(value: string) {
    this._zip = value;
  }

}
