import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToProducts(){
    this.router.navigate(['products']) // localhost:4200/products
  }
}


// <-- Routing Paths
//   Absolute >> When we use '/' >>> baseUrl/products >> localhost:4200/products
//   Relative >> When we don't use '/' >>currentUrl/porduct
//  -->