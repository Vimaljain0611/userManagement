import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeleteModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [DeleteModalComponent],
})
export class DeleteModalModule {}
