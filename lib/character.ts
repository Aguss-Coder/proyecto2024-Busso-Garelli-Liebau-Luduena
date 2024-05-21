import { Character } from '../types/character';

export function getCharacters(): Character[] {
  const storedCharacters = localStorage.getItem('characters');

  return !storedCharacters
    ? []
    : (JSON.parse(storedCharacters) as Character[]);
}