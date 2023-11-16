import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpAuthService } from 'src/app/services/api/http-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  image = "https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  message = ""
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: HttpAuthService,
    private router: Router
  ){
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.message = ""

    if (this.myForm.valid) {
      // Process the form data
      const username  = this.myForm.value["username"];
      const password = this.myForm.value["password"];

      this.auth.postLoginData(this.myForm.value).subscribe(
        (response) => {
        console.log(response)
        this.router.navigate(['/dashboard']);
      },(error) => {
        this.message ="Username or password incorrect"
      })

    }
  }

}
