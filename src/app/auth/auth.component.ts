import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        
    ) { }
    
    ngOnInit() {
        this.router.navigate(['/login'], { relativeTo: this.route });
    }
  
 }