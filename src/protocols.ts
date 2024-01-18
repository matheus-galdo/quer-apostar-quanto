import { Participant as ParticipantPrisma } from "@prisma/client";
import { Game as GamePrisma } from "@prisma/client";
import { Bet as BetPrisma } from "@prisma/client";

export type Participant = Omit<ParticipantPrisma, 'id' | 'updatedAt' | 'createdAt'>;

export type Game = Omit<GamePrisma, 'id' | 'updatedAt' | 'createdAt'>;
export type GameTeamsNames = {
    homeTeamName: string;
    awayTeamName: string;
};

 
export type Bet = Omit<BetPrisma, 'id' | 'updatedAt' | 'createdAt' | 'amountWon' | 'status'> & {
    amoutWon?: number
    status?: BetStatus
};

type BetStatus = "PENDING" | "WON" | "LOST";


export type ApplicationError = Error & {
    statusCode: number;
}