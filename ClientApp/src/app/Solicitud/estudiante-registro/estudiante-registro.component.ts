import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'C:\Users\rikar\Desktop\Angular\Cempre\ClientApp\src\app\Solicitud\models\estudiante';
import {EstudianteService} from "C:\Users\rikar\Desktop\Angular\Cempre\ClientApp\src\app\services\persona.service";

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.css']
})
export class EstudianteRegistroComponent implements OnInit {

estudiante: Estudiante;
  constructor(private estudianteService:EstudianteService) { }

  ngOnInit() {
    this.estudiante=new Estudiante();
  }
  add(){
    this.estudianteService.post(this.persona).subscribe(p => {
      if (p!=null) {
        alert('Solicitud Creada!');
        this.estudiante = p;
      }
    })
  }

}
