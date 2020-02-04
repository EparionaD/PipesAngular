import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pipes';
    nombre:string = 'Ernesto';
    apellido:string = 'Pariona';
    numeros = [2,4,5,7,8,'hola',9,10,11,14,15];
    decimal = 3.54345;
    porcentaje = 0.52456;
    dinero= 1.43454;
    fecha = new Date();
    ejemplo = 'sdsdksisand';
    jsonEjemplo = [
        {
            nombre: 'luz',
            edad: 13,
            direccion: 'pje.locura',
        },
        {
            nombre: 'juan',
            edad: 13,
            direccion: 'malvinas',
        },
        {
            nombre: 'lucas',
            edad: 13,
            direccion: 'ferrocaril',
        },
    ]
    texto = 'paquita la del barrio';
    visible:boolean = true;

}
