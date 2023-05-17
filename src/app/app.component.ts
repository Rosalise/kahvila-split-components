import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tarjoiluOhje:any = [];
  
  kahvinMyynti(myyntiData: {poydanNumero: string, myyntiMaara: string}) {
    this.tarjoiluOhje.push({
      tyo: 'myyty',
      poydanNumero: myyntiData.poydanNumero,
      myyntiMaara: myyntiData.myyntiMaara
    });
  }
  
    kahvinTarjoiltu(tarjoiluData: {poydanNumero: string, myyntiMaara: string}) {
      this.tarjoiluOhje.push({
        tyo: 'tarjoiltu',
        poydanNumero: tarjoiluData.poydanNumero,
        myyntiMaara: tarjoiluData.myyntiMaara
      });
    }
}
