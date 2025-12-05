import { TranslatePipe } from '@ngx-translate/core';
import { Component, inject, input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { HelpDialog } from '../../need-help-dialog/help-dialog/help-dialog';

@Component({
  selector: 'app-help-button',
  imports: [TranslatePipe],
  templateUrl: './help-button.html',
  styleUrl: './help-button.css',
})
export class HelpButton {
  videos = input<{ title: string; videoUrl: string }[]>([]);

  private dialogservice = inject(DialogService);

  openHelpDialog() {
    this.dialogservice.open(HelpDialog, {
      showHeader: false,
      contentStyle: { padding: '0' },
      width: '50rem',
      style: { 'max-width': '50rem', 'max-height': '37.5rem' },
      data: {
        videos: this.videos(),
      },
    });
  }
}
