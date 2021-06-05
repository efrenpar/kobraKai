import { Component,Input } from '@angular/core';

@Component({
  selector: 'alert-app',
  templateUrl: './alert.component.html',
})
export class alertComponent {

    @Input() mensaje:string="";
}
