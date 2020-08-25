import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import 'moment/locale/es-us';

interface ActividadInterface {
	id:number,
	fechaDate:Date,
	glosa:string,
	texto:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'TimeLineWebApp';
  public fechas:Array<ActividadInterface> = new Array<ActividadInterface>();

  ngOnInit() {
  	this.fechas = new Array<ActividadInterface>();
  	for (var i = 1;i<30; i++) {
  		let string ="2020-06-"+i;
	  	let fechaDate = new Date(string);
	  	let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis sagittis arcu. Curabitur mattis, lacus ac tincidunt iaculis, quam purus fringilla lacus, vitae dignissim nulla orci at enim. In vitae justo aliquet, consequat nulla sit amet, rhoncus dui. Cras facilisis est at volutpat laoreet. Donec eget facilisis enim, ac dictum sapien. Vivamus elementum lectus sed nibh scelerisque elementum. Aliquam erat volutpat. Nam gravida vulputate urna ac commodo. In vel ligula consequat, feugiat tellus at, aliquet risus. Vestibulum pulvinar varius felis, vel tempus lorem interdum vitae. Proin et felis nisi.";
	  	this.fechas.push({id:i,fechaDate:fechaDate,glosa:this.obtenerFecha(fechaDate),texto:texto});
      this.fechas.push({id:i,fechaDate:fechaDate,glosa:this.obtenerFecha(fechaDate),texto:texto});
  	}
  	console.log(this.fechas);
  }

  private obtenerFecha(fecha:Date):string {
    const dateString = moment(fecha).format("DD-MM");
  	return dateString;
  }

}