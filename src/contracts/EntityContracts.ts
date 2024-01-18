import { Participant as ParticipantPrisma } from "@prisma/client";

export type Participant = Omit<ParticipantPrisma, 'id' | 'updatedAt' | 'createdAt'>;
export type Game = Omit<Participant, 'id' | 'updatedAt' | 'createdAt'>;
export type Bet = Omit<Participant, 'id' | 'updatedAt' | 'createdAt'>;