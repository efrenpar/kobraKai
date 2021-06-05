import { Component,Input } from '@angular/core';

@Component({
  selector: 'card-app',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  

    @Input() nombre:string="";
    @Input() descripcion:string="";
    @Input() sourceImage:String="";
    @Input() dojo:String="";

}
