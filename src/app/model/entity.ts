/**
 * Created by kevin on 2017-06-28.
 */

import * as uuid from 'uuid';
import 'reflect-metadata';

export function identifier(): any {

  return (target: any, propertyKey: string) => {
    target[propertyKey] = uuid.v4();
    console.log(`${target}.${propertyKey}: ` +
      `types: ${Reflect.getOwnMetadata('design:paramtypes', target, propertyKey)}`);
    console.log(`${target}.id: ` +
      `types: ${Reflect.getOwnMetadata('design:paramtypes', target, 'id')}`);
  };
}

export class Entity {

  public readonly name: string;

  public readonly comment: string;

  @identifier()
  private _id: string;

  constructor(name: string, comment: string) {
    this.name = name;
    this.comment = comment;
  }

  get id(): string {
    return this._id;
  }

}
