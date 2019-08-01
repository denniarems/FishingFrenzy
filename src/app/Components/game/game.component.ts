import { AuthService } from './../../Services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit() {
    if (!this.auth.isActive) {
      this.route.navigateByUrl('/Home');
    }
  }
}
