import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'docker-app';
  lista: any;
  constructor(
    private personaService: PersonaService
  ) {

  }
  ngOnInit(): void {
    this.personaService.findall().subscribe((data: any) => {
      this.lista = data;
    })
  }
}
