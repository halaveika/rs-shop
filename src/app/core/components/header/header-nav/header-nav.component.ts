import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  constructor(private router: Router) { }

  navigateHome () {
    console.log('TO MAIJN');
    this.router.navigate(['']);
  }
}
