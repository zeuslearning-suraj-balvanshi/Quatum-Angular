import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getValidate(values: any) {
    if (
      values.username === 'suraj.balvanshi@zeuslearning.com' &&
      values.password === 'Suraj1234'
    ) {
      return true;
    } else {
      return false;
    }
  }

  getValues(values: any) {
    console.log(values);
    if (this.getValidate(values)) {
      alert('Logged in Successfully');

      localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTM0NTQzNTQzNTQzNTM0NTMiLCJleHAiOjE1MDQ2OTkyNTZ9.zG-2FvGegujxoLWwIQfNB5IT46D-xC4e8dEDYwi6aRM'
      );

      this.router.navigate(['/dashboard']);
    }
  }
}
