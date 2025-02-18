import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interface/iproduct';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(data:any[] , searchkey:string):any[] {
     return data.filter(current => current.title.toLowerCase().includes(searchkey.toLowerCase()));
  }

}
