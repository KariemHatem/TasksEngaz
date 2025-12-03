import { TranslatePipe } from '@ngx-translate/core';
import { Translation } from './../../../../core/services/translate/translation';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private translation = inject(Translation);

  changeLang(lang: string) {
    this.translation.changeLang(lang);
  }
}
