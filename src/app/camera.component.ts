import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable }       from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Rx';

import * as _ from 'lodash';

import { Camera }            from './camera.domain';

@Component({
    selector: 'camera-app',
    templateUrl: './camera.component.html'
})
export class CameraComponent implements OnInit {
    cameras: Camera[] = [];
    numPage: number;

    constructor(private af: AngularFire, private route: ActivatedRoute) { }

    ngOnInit(): void {
        /*
         * Récupération du numéro de page
         */
        this.route.params.subscribe(params => {
            if(! isNaN(params['page'])) {
                this.numPage = params['page'];
            }
        });

        if(this.numPage) {
            /*
            * Récupération des caméras correspondantes
            */
            this.af.database.list('/cameras/cameras', { 
                preserveSnapshot: true,
                query: {
                    orderByKey: true,
                    startAt: this.numPage * 10 + 690 + "",
                    endAt: this.numPage * 10 + 700 + "",
                }
            })
            .subscribe(cameras => {
                cameras.forEach(camera => {
                    //console.log(camera.key, camera.val());
                    this.cameras[camera.key -700] = camera.val();
                })
            });
        }
    }

    reloadCameras(): void {
        Observable.interval(10)
        .flatMap(() => {
            return this.doReload();
        });
        this.doReload();
    }

    doReload(): Camera[] {
        this.cameras = _.cloneDeep(this.cameras).map(camera => {
            if(camera) {
                camera.url += +new Date();
            }
            
            return camera;
        });
        return this.cameras;
    }
}