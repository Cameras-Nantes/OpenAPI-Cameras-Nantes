import { CameraService } from './camera.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  private cameras: any;

  constructor(private db: AngularFireDatabase,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cameraService: CameraService) {
    this.activatedRoute.params.subscribe(params => {
      // Envoie le signal comme quoi les caméras ne sont pas chargés
      this.cameraService.componentsLoaded.next(false);

      /**
       * Récupération et envoi de l'information concernant la page actuelle
       */
      const currentPage = +params['p'];
      this.cameraService.currentPage.next(currentPage);

      /**
       * Si le numéro de page dans l'URL n'est as compris entre 0 et 10
       */
      if (currentPage < 1 || currentPage > 10 || isNaN(currentPage)) {
        this.router.navigate(['/cameras', 1]);
      }

      /**
       * Préparation de la requête vers FireBase
       */
      const first = (currentPage === 1)
        ? '701' : String(currentPage * 10 + 690);

      const last = (currentPage === 1)
        ? '709' : String(currentPage * 10 + 700);

      this.db.list('/cameras/cameras', {
        query: {
          orderByKey: true,
          startAt: first,
          endAt: last
        }
      }).subscribe(cameras => {
        this.cameras = cameras;
        // Envoie le signal comme quoi les caméras sont bien chargées
        this.cameraService.componentsLoaded.next(true);
      });
    });
  }

  ngOnInit() {

  }

}
