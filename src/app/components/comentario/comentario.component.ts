import { Component} from '@angular/core';

@Component({
  selector: 'comentario-app',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  
  comentarios:any=[
    {nickname:"efrenpar",
      descripcion:"This is awesome website. I would love to comeback again."
    },
    {
      nickname:"nanaga",
      descripcion:"This is awesome website. I would love to comeback again."
    }
    
    ]

}
