import { Component } from '@angular/core';
import {Profile} from './models/profile-model';
import { HttpProfileService } from 'src/app/services/api/http-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  myForm!: FormGroup;

  profile: Profile = {
    "name": "Unknown",
    "age": 0,
    "location": "Unknown",
    "languagePreferences": "Unknown",
    "emotion": "Unknown",
    "currentChallenges": "Unknown",
    "preferredCommunicationMethods": "Unknown"
};

  userUUID: String | undefined;

  constructor(
    private http: HttpProfileService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 

    this.route.queryParams.subscribe((params) => {
      this.userUUID = params['uuid'];
      console.log('Received UUID:', this.userUUID);

    });


    this.http.getUserProfile(this.userUUID).subscribe((response) => {
      this.profile = response

      this.myForm = this.formBuilder.group({
        userId: [this.userUUID, Validators.required],
        name: [this.profile.name, Validators.required],
        age: [this.profile.age, Validators.required],
        location: [this.profile.location, Validators.required],
        languagePreferences: [this.profile.languagePreferences, Validators.required],
        emotion: [this.profile.emotion, Validators.required],
        currentChallenges: [this.profile.currentChallenges, Validators.required],
        preferredCommunicationMethods: ['TEXT', Validators.required],
      });
    },(error) => {
      console.log("Cannot load user profile")
    })

    this.myForm = this.formBuilder.group({
      userId: ['group2', Validators.required],
      name: [this.profile.name, Validators.required],
      age: [this.profile.age, Validators.required],
      location: [this.profile.location, Validators.required],
      languagePreferences: [this.profile.languagePreferences, Validators.required],
      emotion: [this.profile.emotion, Validators.required],
      currentChallenges: [this.profile.currentChallenges, Validators.required],
      preferredCommunicationMethods: ['TEXT', Validators.required],
    });
    

      
  }

  ngOnInit(){
    if (this.userUUID == undefined) {
      this.router.navigate(["/sign-in"])
    }  
  }

  onSubmit() {
    this.http.postUserProfile(this.myForm.value).subscribe((response) =>{
      console.log("Response with UUID?: " + response["id"]);
      this.router.navigate(["/dashboard"] , {queryParams : { uuid: this.userUUID }})
    });
    }

    colorChanger() {
      if (!this.myForm.invalid){
        return "background-color: green;"
      }
      return "background-color: rgba(255, 0, 0, 0.39); color: white"
    }

}
