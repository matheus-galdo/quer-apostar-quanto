import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function notEnoughBalanceError(): ApplicationError {
    return {
        name: 'notEnoughBalanceError',
        message: 'Participant balance is not enough to make this bet',
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    };
}
