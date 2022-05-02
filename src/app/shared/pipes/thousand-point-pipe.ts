import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'thousandPoint'})
export class ThousandPointPipe implements PipeTransform {
  transform(value: string): string {
      let result = value.trim()
      let points = Math.floor((value.length-1)/3)

      for(let i=0;i<points;i++){
        if(i%2==0){
            result = result.slice(0, value.length-3*i-3)+"."+ result.slice(value.length-3*i-3)
        }else{
            result = result.slice(0, value.length-3*i-3)+","+ result.slice(value.length-3*i-3)
        }
      }
    return result
  }
}