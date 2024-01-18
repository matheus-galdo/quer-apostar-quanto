import { faker } from '@faker-js/faker';
import { Participant } from '@/protocols';

export function makeParticipant() {
    const participant: Participant = {
        name: faker.person.fullName(),
        balance: faker.number.int({ min: 10, max: 500 }) * 100,
    };

    return participant;
}

export function makeIncompleteParticipant() {
    const participant = {
        name: faker.person.fullName(),
    };
    return participant;
}

export function makeParticipantWithLowFunds() {
    const participant = {
        name: faker.person.fullName(),
        balance: 500,
    };
    return participant;
}
