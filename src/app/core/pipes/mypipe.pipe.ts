import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: true
})
export class MypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
