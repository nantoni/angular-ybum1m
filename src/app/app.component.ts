import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'spa';

  formValidated: boolean = false;
  data: FormGroup;

  onFormValidated(data: FormGroup){
    this.data = data;
    this.formValidated = true;
  }

}
