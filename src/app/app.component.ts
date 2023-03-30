import { Component } from '@angular/core';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input_validations';
  
  // disabled = true
  public data: Array<string> = [
    "My Profile",
    "Friend Requests",
    "Account Settings",
    "Support",
    "Log Out",
  ];

  public listItems: Array<string> = [
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
  ];
}



