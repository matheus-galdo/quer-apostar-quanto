import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function invalidParticipantBalanceAmount(): ApplicationError {
    return {
        name: 'invalidParticipantBalanceAmount',
        message: 'Invalid participant balance amount',
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    };
}
