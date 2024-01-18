import { Participant as ParticipantPrisma } from "@prisma/client";
import { Game as GamePrisma } from "@prisma/client";
import { Bet as BetPrisma } from "@prisma/client";

export type Participant = Omit<ParticipantPrisma, 'id' | 'updatedAt' | 'createdAt'>;
export type Game = Omit<GamePrisma, 'id' | 'updatedAt' | 'createdAt'>;
export type Bet = Omit<Bet, 'id' | 'updatedAt' | 'createdAt'>;

export type ApplicationError = Error & {
    statusCode: number;
}