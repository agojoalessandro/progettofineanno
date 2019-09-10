import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registrazione, login, comment } from './registrazione';
import { Commento } from './commenti';

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

  myForm2: FormGroup;
  input2: login;
  user: registrazione;

  myForm3: FormGroup;
  input3: comment;
  arrayCommenti: comment[] = Commento;

  constructor(fb:FormBuilder){
    this.arrayUtenti=new Array();
    this.myForm = fb.group({
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'strumento': ['', Validators.required]

    });
    this.myForm2 = fb.group({
        'email2': ['', [Validators.required, Validators.email]],
      'psw': ['', Validators.required],
    });
    this.myForm3 = fb.group({
        'nome2': ['', Validators.required],
      'cognome2': ['', Validators.required],
    })
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
  onSubmit2(){
    let k = 0;
    if(!this.myForm2.invalid){

      this.input2 = new login();


          this.input2.email2 = this.myForm2.controls['email2'].value;
          this.input2.psw = this.myForm2.controls['psw'].value;
          for(let i = 0; i < this.arrayUtenti.length; i++){
            if(this.input2.email2 == this.arrayUtenti[i].email){
              if(this.input2.psw == this.arrayUtenti[i].password){
                console.log("logged in");
                this.user = this.arrayUtenti[i];

              }
            }
          }
    }
  }

   onSubmit3(){
          this.input3.nome2 = this.myForm3.controls['nome2'].value;
          this.input3.cognome2 = this.myForm3.controls['cognome2'].value;
          this.input3.commento = this.myForm3.controls['commento'].value;
      this.arrayCommenti.push(new comment (this.input3.nome2, this.input3.cognome2, this.input3.commento));
    }







    }
