import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Freeze implements PipeTransform {
  transform(value: any) {
    Object.freeze(value);
    return value;
  }
}
