import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CToCComponent } from './c-to-c/c-to-c.component';
import { YtnotifyComponent } from './ytnotify/ytnotify.component';
import { CapstoneComponent } from './capstone/capstone.component';



@NgModule({
  declarations: [
    CToCComponent,
    YtnotifyComponent,
    CapstoneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
