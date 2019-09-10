import { Component, OnInit, Input } from '@angular/core';
import {registrazione} from '../registrazione';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
@Input() us : registrazione;
myForm4: FormGroup;
input4: object;

  constructor(fb:FormBuilder) {
      this.myForm4 = fb.group({
      'oggetto': ['',Validators.required],
      'descrizione': ['',Validators.required],
      'prezzo': ['',Validators.required],
      'link': ['',Validators.required]
    })
   }

  ngOnInit() {
  }
  onSubmitOggetti(){
    this.input4 = new object();
    this.input4.oggetto = this.myForm4.controls['oggetto'].value;
    this.input4.descrizione = this.myForm4.controls['descrizione'].value;
    this.inputOggetti.prezzo = this.myForm4.controls['prezzo'].value;
    this.inputOggetti.link = this.myForm4.controls['link'].value;
    this.vettObject.push(new Oggetto(this.us.nome,this.us.cognome,this.input4.oggetto,this.inputOggetti.descrizione,this.inputOggetti.prezzo,this.inputOggetti.link));
    console.log(this.vettObject);
  }

}
