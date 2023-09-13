import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Tag {
  @PrimaryKey({ type: 'number' })
  id: number;

  @Property({unique: true})
  tag: string;

  constructor(tag: string) {
    this.tag = tag
  }
}
