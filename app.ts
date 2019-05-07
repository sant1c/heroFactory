import { HeroFactory } from './herofactory';

const heroFactory = new HeroFactory();
const  ironman= heroFactory.createHero({name: 'Ironman', type: "hero"});
const thanos = heroFactory.createHero({name: 'Thanos', health: 50, type: "villain"});

ironman.attacked(40); 
thanos.attacked(40); 