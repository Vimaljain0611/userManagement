import { moduleMetadata, storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from '../app/components/video-player/video-player.component';

import { VgCoreModule, VgMediaElement } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const template = `<div class="row" id="videoplayer" style="width: 100%;"><app-video-player></app-video-player> </div>`;

storiesOf('VideoPlayer', module)
  .addDecorator(
    moduleMetadata({
      declarations: [VideoPlayerComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
      ],
    })
  )
  .add('sample video player', () => ({
    template,
    // props: {
    //   totalRecords: text('Total Records', '25'),
    //   recordsPerPage: text('Record Per Page', '10'),
    // },
  }));
