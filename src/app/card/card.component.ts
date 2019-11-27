import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input("name") name;
  @Input("temp") temp;
  @Input("hour") hour;
  @Input("img") img;

  constructor(private socket: Socket, private service: ServiceService) {




  }
  getMessage() {
    return Observable.create((observer) => {

      this.socket.on("asd", (error, reply) => {
        /* console.log(this.name); */
        this.service.obtenerPorNombre(this.name).subscribe((data: any) => {
          console.log(data.hora);
          this.hour = data.hora;
          this.temp = data.temperatura;
        })
        observer.next(reply);
      });
    });
  }
  ngOnInit() {
    this.getMessage().subscribe(d=>{});
  }
  ngAfterViewInit() {
    this.service.obtenerPorNombre(this.name).subscribe((data: any) => {
      this.hour = data.hora;
      this.temp = data.temperatura;
    })
  }
  clicked() {
    console.log(this.name);
    this.service.obtenerPorNombre(this.name).subscribe((data: any) => {
      console.log(data.hora);
      this.hour = data.hora;
      this.temp = data.temperatura;
    })
  }


}
