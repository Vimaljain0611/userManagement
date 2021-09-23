import { Component, OnInit } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  media;
  vgMedia;
  isPlaying:boolean;
  api: VgApiService;
  constructor() {}

  ngOnInit(): void {}
  resetVideo(video)
  {
    video.currentTime = 0;
    video.pause();
  }
}
