// src/utils/types.ts

export interface BullItem {
  name: string;
  nomeFantasia: string;
  idade: number; // or number, based on your actual use case
  peso: number; // example property
  vaquejadas: number; // example property
}

export interface CowboyItem {
  name: string;
  nomeFantasia: string;
  idade: number;
  peso: number;
  estado: string;
  vaquejadas: number;
  vitorias: number;
  nomeAssistente: string;
  campeao: number;
  odds: number;
}

export interface HorseItem {
  name: string;
  nomeFantasia: string;
  idade: number;
  peso: number;
  haras: string;
  vaquejadas: number;
  vitorias: number;
  nomeVaqueiro: string;
  campeao: number;
}