import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karate-Kid';
  form:boolean=false;

  showForm(){
    this.form=true;
  }

}
