import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = formbuilder.group({
      name: [''],
      email: [''],
      pass: [''],
      repass: [''],
    })
  }

  ngOnInit(): void {

  }
  signup() {
    this.http.post<any>('http://localhost:3000/users', this.registerForm.value).subscribe(res => {
      alert("Successful")
      this.registerForm.reset
    })
  }

}
