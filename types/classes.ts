export interface Abilities {
  [key: string]: {
    unlockableAt: number;
    description: string;
  };
}

export interface Dowry {
  name: string;
  description: string;
}

export interface Statistics {
  strength: number;
  dexterity: number;
  agility: number;
  intelligence: number;
  charisma: number;
  perception: number;
  constitution: number;
}

export interface CharacterClass {
  description: string;
  statistics: Statistics;
  dowry: Dowry;
  abilities: Abilities;
}

export type CharacterClasses = Record<string, CharacterClass>;
