import { Injectable } from '@angular/core';
import { Post } from '../../../shared/interfaces/posts/post';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostItems {
  // assign post that of type post initerface
  private posts: Post[] = [];
  private postSubject = new BehaviorSubject<Post[]>(this.posts);
  posts$ = this.postSubject.asObservable();

  addPost(post: Post) {
    // put it to the top of aaray
    this.posts.unshift(post);
    this.postSubject.next([...this.posts]);
  }
}
