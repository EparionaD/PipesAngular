import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mostrar'})
export class MostrarPipe implements PipeTransform {
    transform(value: any, visible): any {
        if( visible == true ){
            return value;
        }else{
            let a1 = '';
            for(var i=0;i<value.length;i++){
                a1 += '*';
            }
            return a1;
            /*console.log(value);
            let oculto = value.toString().replace(value,'******');
            return oculto;*/
        }
    }
}