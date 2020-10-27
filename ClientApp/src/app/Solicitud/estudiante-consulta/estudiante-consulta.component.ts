import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'C:\Users\rikar\Desktop\Angular\Cempre\ClientApp\src\app\Solicitud\models\estudiante';
import {EstudianteService} from "C:\Users\rikar\Desktop\Angular\Cempre\ClientApp\src\app\services\persona.service";
@Component({
  selector: 'app-estudiante-consulta',
  templateUrl: './estudiante-consulta.component.html',
  styleUrls: ['./estudiante-consulta.component.css']
})
export class EstudianteConsultaComponent implements OnInit {

estudiantes:Estudiante[];
  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.estudianteService.get().subscribe(result => {
      this.estudiantes = result;
    })
  }

}
