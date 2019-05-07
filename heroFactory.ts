import { Hero } from './hero';
import { Villain } from './villain';

export class HeroFactory {

  createHero(type: Object);
  createHero(type: 'hero'): Hero;
  createHero(type: 'villain'): Villain;

  public createHero(heroOptions): Hero | Villain {
    if (heroOptions.type === "hero") {
      const hero = new Hero(heroOptions.name, heroOptions.health);
      return hero;
    } else if (heroOptions.type === "villain") {
      const villain = new Villain(heroOptions.name, heroOptions.health);
      return villain;
    } else {
      throw new Error('Select either a Hero or a Villain');
    }
  }
}