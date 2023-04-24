import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class UserNgModel {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userNgModel: UserNgModel;

  constructor(
    private httpClient: HttpClient
  ) {
    this.userNgModel = new UserNgModel();
  }

  ngOnInit() {
  }

  onUserSubmit(userForm: NgForm) {
    this.httpClient.post('https://localhost:7117/api/users/add_user', this.userNgModel, {
      headers: {
        'Content-Type': 'application/json'
      },
      observe: 'response',
      responseType: 'json'
    }).subscribe((userResponse: any) => {
      console.log(userResponse);
    });
  }

}
