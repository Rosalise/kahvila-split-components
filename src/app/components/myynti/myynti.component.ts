import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-myynti',
  templateUrl: './myynti.component.html',
  styleUrls: ['./myynti.component.css']
})
export class MyyntiComponent {
  tarjoiluOhje: any = [];
  @Input() ohje!: {
    tyo: string; poydanNumero: string;
    myyntiMaara: string;
  };

  constructor() {}

  ngOnInit(): void {}

}


