import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {

  @Input() videoData;

  constructor() { }

  ngOnInit() {
  }

}
