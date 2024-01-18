import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function invalidDataError(message: string): ApplicationError {
    return {
        name: 'invalidDataError',
        message: `Invalid data: ${message}`,
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    };
}
