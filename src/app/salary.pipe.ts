import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  fibonacci(n:number):number
  {
    if(n<=2) {
      if(n==0) {
        return 0;
      }
      return 1;
    }
    return this.fibonacci(n-1)+this.fibonacci(n-2);
  }

  transform(value: number): number {
    console.log("calling transform")
    return this.fibonacci(value);
  }

}
