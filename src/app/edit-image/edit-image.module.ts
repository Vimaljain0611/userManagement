import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditImageComponent } from '../edit-image/edit-image.component';



@NgModule({
  declarations: [
    EditImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[EditImageComponent]
})
export class EditImageModule { }
