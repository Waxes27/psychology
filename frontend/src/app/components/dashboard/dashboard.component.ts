import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpAuthService } from 'src/app/services/api/http-auth.service';
import { Profile } from '../profile/models/profile-model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userUUID: String | undefined;
  profile!: Profile;
  

  constructor(
    private route: ActivatedRoute,
    public auth: HttpAuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 

    this.route.queryParams.subscribe((params) => {
      this.userUUID = params['uuid'];
      console.log('Received UUID:', this.userUUID);
      this.auth.getUserData(this.userUUID).subscribe((data) => {
        console.log(data);
        this.profile = data
        
      });
    });}

}
