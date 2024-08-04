export const statusOptions = [
  "wantToRead",
  "alreadyRead",
  "reading",
  "rereading",
  "abandoned",
] as const;

export const statusTextMap = {
  wantToRead: "Quero Ler",
  alreadyRead: "Já Li",
  reading: "Estou Lendo",
  abandoned: "Abandonado",
  rereading: "Relendo",
};
