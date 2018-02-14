import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  public selectedVideo;
  constructor() { }

  ngOnInit() {
  }

  videoSelectionChanged(video){
    this.selectedVideo = video;
  }

}
