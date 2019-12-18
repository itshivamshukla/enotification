
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})

export class DataFormComponent implements OnInit {
	registered = false;
	submitted = false;
	dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {

  }

  invalidFirstName()
  {
  	return (this.submitted && this.dataForm.controls.tittle_name.errors != null);
  }

  invalidLastName()
  {
  	return (this.submitted && this.dataForm.controls.description_name.errors != null);
  }

  invalidEmail()
  {
  	return (this.submitted && this.dataForm.controls.url.errors != null);
  }

  invalidZipcode()
  {
  	return (this.submitted && this.dataForm.controls.zipcode.errors != null);
  }

  

  ngOnInit()
  {
  	this.dataForm = this.formBuilder.group({
  		tittle_name: ['', Validators.required],
  		category_name: ['', Validators.required],
  		description: ['', [Validators.required, Validators]],
  		url: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
  		details: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
  	});
  }

  onSubmit()
  {
  	this.submitted = true;

  	if(this.dataForm.invalid == true)
  	{
  		return;
  	}
  	else
  	{
  		this.submitted = true;
  	}
  }

};
