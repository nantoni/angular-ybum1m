import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})
export class SaisieComponent implements OnInit {

    login : string = "";

  checkLogin () : boolean {
    return (/^[0-9]{1,10}$/.test (this.login));    
  }

  @Input() form: FormGroup;
  @Output() formValidated: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(formBuilder: FormBuilder) { 

    this.form = formBuilder.group({
      login: '',
      groupCivilite: '',
      nom: '',
      prenom: '',
      pays: '',
      email: '',
      tel: '',
      adresse: '',
      cp: '',
      ville: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
    this.formValidated.emit(this.form);
  }

}
