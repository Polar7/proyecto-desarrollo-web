/**
 * Dto que moldea un Personaje
 */
export interface CharacterDto {
  id: string,
  house: string,
  alternate_names: Array<string>,
  dateOfBirth: string,
  wand: WandDto,
  alive: boolean,
  image: string,
  name: string,
  patronus: string;
}

/**
 * Dto que moldea una Varita de un Personaje
 */
export interface WandDto {
  wood: string,
  core: string,
  length: number,
}

