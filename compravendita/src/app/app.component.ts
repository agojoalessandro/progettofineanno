import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registrazione } from './registrazione';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garage Sale';
  myForm: FormGroup;
  arrayUtenti: registrazione[];
  input: registrazione;
  constructor(fb:FormBuilder){
    this.arrayUtenti=new Array();
    this.myForm = fb.group({
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'strumento': ['', Validators.required]
      
    });
  }
  onSubmit(){
    if(!this.myForm.invalid){
      
      this.input = new registrazione();
      this.input.nome = this.myForm.controls['nome'].value;
      this.input.cognome = this.myForm.controls['cognome'].value;
      this.input.email = this.myForm.controls['email'].value;
      this.input.password = this.myForm.controls['password'].value;
      this.input.strumento = this.myForm.controls['strumento'].value;
      
      this.arrayUtenti.push(this.input);
      
    }
  }
}