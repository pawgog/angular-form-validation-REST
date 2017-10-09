import { TestBed, ComponentFixture, inject} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('Validation forms', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpModule, BrowserAnimationsModule],
      declarations: [AppComponent],
      providers: [AppService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should form invalid when empty', () => {
    expect(component.inputFormControl.invalid).toBeTruthy();
  });

  it('should customer account number mandatory, length over 4 characters and has only numbers', () => {
    let errors = {};
    let customerNumber = component.inputFormControl.controls['customerNumber'];
    expect(customerNumber.valid).toBeFalsy();
    errors = customerNumber.errors || {};
    customerNumber.setValue(34222342);
    expect(errors['required']).toBeTruthy();
    expect(customerNumber.value).toMatch(/([0-9]){4,}/);
    expect(customerNumber.valid).toBeTruthy();
  });

  it('should date of birth mandatory and length over 4 characters', () => {
    let errors = {};
    let birth = component.inputFormControl.controls['birth'];
    expect(birth.valid).toBeFalsy();
    errors = birth.errors || {};
    birth.setValue("23-12-1987");
    expect(errors['required']).toBeTruthy();
    expect(birth.value).toMatch(/.{4,}/);
    expect(birth.valid).toBeTruthy();
  });

  it('should post code mandatory and length over 4 characters', () => {
    let errors = {};
    let postCode = component.inputFormControl.controls['postCode'];
    expect(postCode.valid).toBeFalsy();
    errors = postCode.errors || {};
    postCode.setValue("sw1 59w");
    expect(errors['required']).toBeTruthy();
    expect(postCode.value).toMatch(/.{4,}/);
    expect(postCode.valid).toBeTruthy();
  });

  it('should last name mandatory and length over 4 characters', () => {
    let errors = {};
    let lastName = component.inputFormControl.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
    errors = lastName.errors || {};
    lastName.setValue("Smith");
    expect(errors['required']).toBeTruthy();
    expect(lastName.value).toMatch(/.{4,}/);
    expect(lastName.valid).toBeTruthy();
  });

  it('should telephone number mandatory, length over 4 characters and has only numbers', () => {
    let errors = {};
    let telephone = component.inputFormControl.controls['telephone'];
    expect(telephone.valid).toBeFalsy();
    errors = telephone.errors || {};
    telephone.setValue("0765432132");
    expect(errors['required']).toBeTruthy();
    expect(telephone.value).toMatch(/([0-9]){4,}/);
    expect(telephone.valid).toBeTruthy();
  });

  it('form valid when all fields are input', () => {
    expect(component.inputFormControl.valid).toBeFalsy();
    component.inputFormControl.controls['customerNumber'].setValue(34222342);
    component.inputFormControl.controls['birth'].setValue("27-08-1987");
    component.inputFormControl.controls['postCode'].setValue("sw 1ad");
    component.inputFormControl.controls['lastName'].setValue("Smith");
    component.inputFormControl.controls['telephone'].setValue("0765432132");
    expect(component.inputFormControl.valid).toBeTruthy();
  });

});
