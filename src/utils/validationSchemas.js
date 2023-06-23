import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-Z][a-z]{1,16}$/)
  .required();

export const SIGN_UP_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.{0,}[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%^&*]).{8,32}$/)
    .required(),
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
});