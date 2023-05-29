import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!:FormGroup;
  hide = true;
  
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {
    // if (localStorage.getItem('token')) {
    //       this.route.navigate(['/']);
    // }

    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      rememberMe:[null]
    });
  }

  onSubmit(){
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(result => {
        if(result.status){
          this.snackBar.open('You logged in successfully', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['green-snackbar'],
          });

          localStorage.setItem('token',JSON.stringify(result.token))
          this.route.navigate(['/']);
        }else{
          this.snackBar.open(result.message,'', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',      
            panelClass: ['red-snackbar'],
          });
        } 
      })
    }
  }
}
