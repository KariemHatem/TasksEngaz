import { TranslatePipe } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VideoDialog } from '../../need-help-videodialog/video-dialog/video-dialog';

@Component({
  selector: 'app-help-dialog',
  imports: [DynamicDialogModule, TranslatePipe],
  templateUrl: './help-dialog.html',
  styleUrl: './help-dialog.css',
})
export class HelpDialog {
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  private dialogservice = inject(DialogService);

  videos: any[] = [];

  lang = localStorage.getItem('lng');

  ngOnInit() {
    this.videos = this.config.data?.videos ?? [];
  }

  closeDilaog() {
    this.ref.close();
  }

  openHelpDialog(title: string, videoUrl: string) {
    this.dialogservice.open(VideoDialog, {
      showHeader: false,
      contentStyle: { padding: '0' },
      data: { title, videoUrl },
    });
  }
}
