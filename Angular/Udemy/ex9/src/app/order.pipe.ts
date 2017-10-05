import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, key: any): any {

    return value.sort(
      (a, b) => {
        return a[key] > b[key];
      }
    );
  }

}
