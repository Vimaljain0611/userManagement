import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractedEntitiesComponent } from './extracted-entities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChipsDirective } from '../directives/chips.directive';

@NgModule({
  declarations: [ExtractedEntitiesComponent,ChipsDirective],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports:[ExtractedEntitiesComponent]
})
export class ExtractedEntitiesModule { }
