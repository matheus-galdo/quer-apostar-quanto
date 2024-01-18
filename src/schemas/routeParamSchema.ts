import joi from 'joi';

export const routeParamSchema = joi.object({
    id: joi.number().required(),
});
