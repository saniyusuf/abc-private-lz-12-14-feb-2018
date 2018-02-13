import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import {RouterModule, Routes} from '@angular/router';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

const dashboardChildRoutes: Routes = [
  { path: '', component: VideoDashboardComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardChildRoutes)
  ],
  declarations: [VideoListComponent, VideoPlayerComponent, VideoDashboardComponent, StatFiltersComponent, VideoThumbnailComponent]
})
export class DashboardModule { }
