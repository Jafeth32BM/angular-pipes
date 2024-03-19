import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFLy'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean) {
    return value ? 'Si vuela' : 'No vuela';
  }
}
