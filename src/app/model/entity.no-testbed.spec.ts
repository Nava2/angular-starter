import { Entity } from './entity';
import * as uuid from 'uuid';

const UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

describe('Entity', () => {

  let underTest: Entity;

  beforeEach(() => {
    underTest = new Entity('bob', 'no comment');
  });

  it('has simple content', () => {
    expect(underTest.id).toMatch(UUID_REGEX);
    expect(underTest.name).toEqual('bob');
    expect(underTest.comment).toEqual('no comment');
  });

});
