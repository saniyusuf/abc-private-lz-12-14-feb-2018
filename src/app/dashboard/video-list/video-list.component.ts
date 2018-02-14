import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {VideoService} from '../../video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  public videoList$: Observable<Video[]>;
  public selectedVideoID;
  @Output() videoSelected = new EventEmitter<any>();

  constructor(private videoService: VideoService) {
    this.videoList$ = videoService.getVideos();
  }

  ngOnInit() {
  }

  setSelectedVideoID(id){
    this.selectedVideoID = id;
    this.videoList$
      .subscribe((videoList)=>{
        videoList.forEach((video)=>{
          if(video.id ===  id){
            this.videoSelected.emit(video);
          }
        });
      });

  }

}


export interface ViewDetails {
  age: string;
  region: string;
  date: string;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetails[];
}
