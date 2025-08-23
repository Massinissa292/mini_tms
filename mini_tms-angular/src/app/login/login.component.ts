import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
   templateUrl: './login.component.html',
     styleUrls: ['./login.component.css'],
  standalone:false,

})
export class LoginComponent {
  email = '';
  motDePasse = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.motDePasse).subscribe({
      next: (user) => {
        this.authService.saveUser(user);
        this.router.navigate(['/vehicules']); // redirige après connexion
      },
      error: () => {
        alert('Email ou mot de passe incorrect');
      }
    });
  }
}
