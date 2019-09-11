import { Component, OnInit, Input } from '@angular/core';
import {registrazione} from '../registrazione';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Object, Objects } from './mockobjects';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
@Input() us : registrazione;
myForm4: FormGroup;
input4: object;
arrayObject: Object[] = arrayObject;
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
  onSubmitObject(){
    this.input4 = new Object();
    this.input4.object = this.myForm4.controls['object'].value;
    this.input4.description = this.myForm4.controls['description'].value;
    this.input4.price = this.myForm4.controls['price'].value;
    this.input4.link = this.myForm4.controls['link'].value;
    this.arrayObject.push(new Object(this.us.nome,this.us.cognome,this.input4.object,this.input4.description,this.input4.price,this.input4.link));
    console.log(this.arrayObject);
  }

}
