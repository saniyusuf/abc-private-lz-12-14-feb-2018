import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  public videoList: Video[];
  public selectedVideoID;
  @Output() videoSelected = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) {
    httpClient
      .get<Video[]>('http://localhost:8085/videos')
      .subscribe((videoData)=> this.videoList = videoData)
  }

  ngOnInit() {
  }

  setSelectedVideoID(id){
    this.selectedVideoID = id;
    this.videoList.forEach((video)=>{
      if(video.id ===  id){
        this.videoSelected.emit(video);
      }
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
