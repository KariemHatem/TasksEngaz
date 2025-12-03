import { Component, inject } from '@angular/core';
import { PostItems } from '../../../../../core/services/post-items/post-items';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-addtimeline-post',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './addtimeline-post.html',
  styleUrl: './addtimeline-post.css',
})
export class AddtimelinePost {
  //hold text value
  text = '';
  // hold filess
  files: string[] = [];

  private postItems = inject(PostItems);

  // Hadling file formate
  onFielSelected(event: any) {
    const selected = event.target.files;

    Array.from(selected).forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => this.files.push(reader.result as string);
      reader.readAsDataURL(file);
    });
  }

  // publish post method
  publish() {
    if (!this.text.trim() && this.files.length === 0) return;

    this.postItems.addPost({
      text: this.text,
      files: this.files,
      date: new Date(),
    });

    this.text = '';
    this.files = [];
  }
}
