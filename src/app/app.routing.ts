import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CameraComponent } from './camera.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/camera/1', pathMatch: 'full' },
  { path: 'camera/:page', component: CameraComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}