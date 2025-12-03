import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-heading',
  imports: [TranslatePipe],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {}
