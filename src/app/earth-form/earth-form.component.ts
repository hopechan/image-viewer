import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earth-form',
  templateUrl: './earth-form.component.html',
  styleUrls: ['./earth-form.component.css']
})
export class EarthFormComponent implements OnInit {

  earthForm!: FormGroup;
  submitted = false;

  constructor(private earthFormBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.earthForm = this.earthFormBuilder.group({
      lon: ["", Validators.required],
      lat: ["", Validators.required],
      date: ["", Validators.required],
      dim: ["", Validators.required]
    });
  }

  getForm(){
    return this.earthForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.earthForm.invalid) {
      //si el formulario es invalido ya no se envia
      return;
    }

    console.log(JSON.stringify(this.earthForm.value, null, 4))
    this.router.navigate(['/result'], {
      state: {
        data: this.earthForm.value
      }
    })
  }

  onReset(){
    //se limpia el formulario
    this.submitted = false;
    this.earthForm.reset();
  }

}
