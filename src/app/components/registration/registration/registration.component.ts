import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userRegistrationForm: FormGroup | any;
  public saveUserDetails: any = [];
  public counter: any;
  public emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(
    private userService: UsersService,
    private fBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.userRegistrationForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegEx)]),
      state: new FormArray([
        new FormGroup({
          state: new FormControl(""),
          city: new FormControl(""),
          pincode: new FormControl("")
        })
      ])
    });
  }

  public addAddresses() {
    const control = <FormArray>this.userRegistrationForm.controls['state'];
    control.push(
      new FormGroup({
        state: new FormControl(""),
        city: new FormControl(""),
        pincode: new FormControl("")
      })
    )
  }

  public removeAddresses(index: any) {
    const control = <FormArray>this.userRegistrationForm.controls['state'];
    control.removeAt(index);
  }



  onSubmit() {
    localStorage.setItem("username", this.userRegistrationForm.get("username").value)
    const user = this.userRegistrationForm.value;
    this.userService.storeUserData(user);
    this.toastr.success('Registered Successfully!');
    this.userRegistrationForm.reset();
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000);
  }

}
