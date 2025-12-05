import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-video-dialog',
  imports: [],
  templateUrl: './video-dialog.html',
  styleUrl: './video-dialog.css',
})
export class VideoDialog {
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);

  title = '';
  videoUrl = '';

  ngOnInit() {
    this.title = this.config.data?.title ?? '';
    this.videoUrl = this.config.data?.videoUrl ?? '';
  }

  closeDilaog() {
    this.ref.close();
  }
}
