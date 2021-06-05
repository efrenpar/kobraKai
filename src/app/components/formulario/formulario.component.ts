import { Component } from '@angular/core';

@Component({
  selector: 'form-app',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormComponent {
  
  nickname:string="";
  descripcion:string="";
  selection:string="";
  radio:number=0;
  mensaje:string="";

  warning:boolean=false;
  validation:boolean=true;
  tipo:string="";
  

  submit(){

    if(!this.nickname || !this.descripcion
      ||   !this.selection
      ||  !this.radio){
        this.mensaje="Debe llenar todos los campos"
        this.warning=true;
        
    }else if(this.nickname.length<6){
      this.warning=false;
      this.mensaje="El nickname debe tener mas de 6 caracteres"
        this.warning=true;
    }
    else{
      this.warning=false;
      this.mensaje="Su voto se envio"
        this.warning=true;
        this.tipo="alert alert-success"
      window.location.reload();
    }

      
  }

}
