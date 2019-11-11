import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explication',
  templateUrl: './explication.page.html',
  styleUrls: ['./explication.page.scss'],
})
export class ExplicationPage implements OnInit {

  backdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
