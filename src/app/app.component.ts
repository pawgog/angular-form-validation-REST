import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AppService } from './app.service';

const numRegex = /([0-9])/;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  data : any[];
  afterSuccess : boolean = false;

  inputFormControl: FormGroup;

  ngOnInit() {
  this.postAllUsers();
  this.inputFormControl = new FormGroup({
      customerNumber: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern(numRegex)]),
      birth: new FormControl('', [Validators.required, Validators.minLength(4)]),
      postCode: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(numRegex)])
    });
  }

  constructor (private userService: AppService, private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'body-background');
  }

  postAllUsers(){
    this.userService.postUsersAPI(this.data);
  }
  onSubmit(customerNumber: number, birth : string, postCode : string, lastName : string, telephone : string){
    this.userService.onSubmit(customerNumber, birth, postCode, lastName, telephone).subscribe(
      data=>{
        this.afterSuccess = true;
      });
  }
}