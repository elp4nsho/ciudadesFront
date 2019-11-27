import { Component } from '@angular/core';
import { ServiceService } from './service.service'
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: string = '';
  q(){
    return true;
  }
  ngOnInit() {
  
    /* this.getMessage().subscribe(d=>console.log(d)); */
  
  }

  locations = [
    {
      "id": 0,
      "img": "https://www.irishtimes.com/polopoly_fs/1.4064042.1572117922!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
      "nombre": "Santiago",
      "hora": "",
      "temperatura": ""
    },
    {
      "id": 1,
      "img": "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Switzerland/zurich-switzerland-aerial.jpg?imwidth=450",

      "nombre": "Zurich",
      "hora": "",
      "temperatura": ""
    },
    {
      "id": 2,
      "img": "https://www.qantas.com/content/travelinsider/en/travel-tips/things-to-know-before-you-go-to-auckland/_jcr_content/parsysTop/hero.img.full.medium.jpg/1550538896279.jpg",

      "nombre": "Auckland",
      "hora": "",
      "temperatura": ""
    },
    {
      "id": 3,
      "img": "https://assets.vancouverisawesome.com/wp-content/uploads/2019/09/25093747/sydney-opera-house.jpg",

      "nombre": "Sydney",
      "hora": "",
      "temperatura": ""

    },
    {
      "id": 4,
      "img": "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",

      "nombre": "London",
      "hora": "",
      "temperatura": ""
    },
    {
      "id": 5,
      "img": "https://images.landsofamerica.com/resizedimages/217/325/l/40/1-3713595763",

      "nombre": "Monticello",
      "hora": "",
      "temperatura": ""
    }
  ]

  busqueda = this.locations;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  filtrar(){
    console.log(this.search);

    this.busqueda = this.locations.filter(l=>{
      return l.nombre.toLowerCase().includes(this.search.toLowerCase()) 
    })

  }



  title = 'tiempo';

  constructor(private socket: Socket, private service: ServiceService) {

  }

  sendMessage(msg: string) {
    console.log("sending");
    this.refrescar("Santiago");
   /*  this.socket.emit("message", msg); */
  }
  getMessage() {
    return Observable.create((observer) => {

      this.socket.on("asd",(error,reply) => {
/* 
        this.locations.forEach(l=>{
          this.solicitar(l.nombre);
        }) */
        observer.next(reply);
      });
    });
  }

  scroll = 0;

  correrR() {
    if (this.scroll <= -350) {

    } else {
      this.scroll -= 70;

    }
    let card: any = document.getElementsByTagName("app-card")[0];
    card.style.marginLeft = this.scroll + "%";
  }
  correrL() {
    if (this.scroll >= 0) {

    } else {
      this.scroll += 70;

    }
    let card: any = document.getElementsByTagName("app-card")[0];
    card.style.marginLeft = this.scroll + "%";
  }

  solicitar(nombre) {
    this.service.obtenerPorNombre(nombre).subscribe(data => {
      console.log(data);
    },e=>console.log(e));
  }

  refrescar(nombre){
    let elements: any = [];
    let parent: any,elm: any = "";

    elements = document.getElementsByTagName("app-card");
    for(let i=0;i<1;i++){
      console.log(elements[i].getAttribute("ng-reflect-name"))
      parent = elements[i].parentNode;
      console.log(parent);

      elm = document.createElement("app-card");
      elm.setAttribute("name","Santiag");
      parent.appendChild(elm);

    }
  }

}
