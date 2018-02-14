import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from './dashboard/video-list/video-list.component';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  getVideos(): Observable<Video[]>{
    return this.httpClient
      .get<Video[]>('http://localhost:8085/videos');
  }

}
