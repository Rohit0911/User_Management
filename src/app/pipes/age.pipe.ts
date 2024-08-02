import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})


export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentyear:any=new Date().getFullYear();

    let userBirthYear:any=new Date(value).getFullYear();
    let userAge=currentyear-userBirthYear;
    return userAge;
  }

  
  

}
