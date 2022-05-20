import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CToCComponent } from './projects/c-to-c/c-to-c.component';
import { CapstoneComponent } from './projects/capstone/capstone.component';
import { YtnotifyComponent } from './projects/ytnotify/ytnotify.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects/canvas', component: CToCComponent },
  { path: 'projects/ytnotify', component: YtnotifyComponent },
  { path: 'projects/capstone', component: CapstoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
