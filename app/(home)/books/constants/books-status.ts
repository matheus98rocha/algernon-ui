export const statusOptions = [
  "wantToRead",
  "alreadyRead",
  "reading",
  "abandoned",
  "rereading",
] as const;

export const statusTextMap = {
  wantToRead: "Quero Ler",
  alreadyRead: "Já Li",
  reading: "Estou Lendo",
  abandoned: "Abandonado",
  rereading: "Relendo",
};
