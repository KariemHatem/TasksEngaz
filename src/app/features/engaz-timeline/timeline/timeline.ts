import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AddtimelinePost } from '../components/add-post/addtimeline-post/addtimeline-post';
import { Heading } from '../components/timeline-heading/heading/heading';
import { PostView } from '../components/post-list/post-view/post-view';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  imports: [
    TabsModule,
    BadgeModule,
    AvatarModule,
    AddtimelinePost,
    Heading,
    PostView,
    TranslatePipe,
  ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {}
