import {CameraService} from '../camera/camera.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.css']
})
export class PreLoaderComponent implements OnInit {

  private componentsLoaded: boolean;

  constructor(private cameraService: CameraService) {
    this.componentsLoaded = false;
    this.cameraService.componentsLoaded.subscribe(loaded => this.componentsLoaded = loaded);
  }

  ngOnInit() {
  }

}
