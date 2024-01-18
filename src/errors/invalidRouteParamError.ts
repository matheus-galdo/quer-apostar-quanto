import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function invalidRouteParamError(message: string): ApplicationError {
    return {
        name: 'invalidRouteParamError',
        message: `Invalid route param: ${message}`,
        statusCode: httpStatus.UNPROCESSABLE_ENTITY,
    };
}
