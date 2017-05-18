import { Router } from '@angular/router';
import { CameraService } from '../camera/camera.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  private currentPage: number;
  private disablePrevious: boolean;
  private disableNext: boolean;

  constructor(private cameraService: CameraService, private router: Router) {
    // Récupération de l'information concernant la page actuellle
    this.cameraService.currentPage.subscribe(page => {
      this.currentPage = page
      
      this.disablePrevious = this.currentPage <= 1;
      this.disableNext = this.currentPage >= 10;
    });
  }

  ngOnInit() {

  }

  previousPage(): void {
    this.router.navigate(['/cameras', String(this.currentPage - 1)]);
  }

  nextPage(): void {
    this.router.navigate(['/cameras', String(this.currentPage + 1)]);
  }
}
