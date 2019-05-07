export class Hero {
  private name: string;
  private health: number;
  private maxHealth: number = 100;
  constructor(name: string, health: number = 100) {
    this.name = name;
    if (health < this.maxHealth) {
      this.health = health;
    } else {
      this.health = this.maxHealth;
    }
  }
  
  attacked(attackValue) {
    if (attackValue > this.health) {
      console.log(`${this.name} is dead.`);
    } else {
      this.health -= attackValue;
      console.log(`${this.name} was attacked by ${attackValue} -- Remaining health is ${this.health}`);
    }
  }
 }