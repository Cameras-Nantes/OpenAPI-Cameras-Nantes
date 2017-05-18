import { CameraComponent } from './camera/camera.component';


export const routes = [
    { path: '', redirectTo: '/cameras/1', pathMatch: 'full' },
    { path: 'cameras/:p', component: CameraComponent }
];