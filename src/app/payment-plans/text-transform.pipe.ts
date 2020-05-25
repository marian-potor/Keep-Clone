import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform{
  transform(text: string): string  {
    return text.replace(/, /g, ",\n");
  }
}