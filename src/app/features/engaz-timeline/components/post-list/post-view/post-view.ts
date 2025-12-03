import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../../../shared/interfaces/posts/post';
import { PostItems } from '../../../../../core/services/post-items/post-items';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-post-view',
  imports: [AsyncPipe, DatePipe, TranslatePipe],
  templateUrl: './post-view.html',
  styleUrl: './post-view.css',
})
export class PostView {
  posts$!: Observable<Post[]>;

  private postItems = inject(PostItems);

  ngOnInit() {
    this.posts$ = this.postItems.posts$;
  }
}
