import app from "@/app";
import supertest from "supertest";
import { makeIncompleteParticipant, makeParticipant, makeParticipantWithLowFunds } from "../factories/participantFactory";
import prisma from "@/database";

beforeEach(async () => {
    await prisma.participant.deleteMany();
});

//começar pelo requisito -> fiz os testes

//TDD
//começar pelos testes -> depois faz o requisito

describe('/POST participant', () => {
    //caminho feliz
    it('Should create a new participant and respond with status 201', async () => {
        const participant = makeParticipant();
        const response = await supertest(app).post('/participants').send(participant);

        const createdParticipant = await prisma.participant.findUnique({ where: { id: response.body.id } });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: expect.any(Number),
            name: participant.name,
            balance: participant.balance,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
        });
        expect(createdParticipant.name).toEqual(participant.name);
        expect(createdParticipant.balance).toEqual(participant.balance);
    });

    it('Should fail at creating participant and responde with status 422', async () => {
        const participant = makeIncompleteParticipant();
        const response = await supertest(app).post('/participants').send(participant);

        expect(response.status).toBe(422);
    });

    it('Should fail at creating participant with funds under 10 reais', async () => {
        const participant = makeParticipantWithLowFunds();
        const response = await supertest(app).post('/participants').send(participant);

        expect(response.status).toBe(422);
        expect(response.body.message).toBe('Invalid participant balance amount');
    });
});
