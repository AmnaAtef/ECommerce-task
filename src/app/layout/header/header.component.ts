import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartItemCount!:number;

  constructor(
    private route: Router
  ){}

  ngOnInit() {
    const storedCount = localStorage.getItem('cartItemCount');
    if (storedCount) {
      this.cartItemCount = parseInt(storedCount, 10);
    }
  }

  navigateToSignin(){
    this.route.navigate(['/auth/login'])
  }


}
