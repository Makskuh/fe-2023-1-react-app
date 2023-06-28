import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-Z][a-z]{1,16}$/)
  .required();

export const SIGN_UP_SCHEMA = yup.object({
  email: yup.string().email().required('You must enter email'),
  password: yup
    .string()
    .matches(/^(?=.{0,}[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%^&*]).{8,32}$/, ' Password must be 8-32 symbols with lower and upper case letters, number and one of this symbols !#$%^&*')
    .required(),
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  isAgree: yup.boolean().required(),
});


export const TODO_TASK_SCHEMA = yup.object({
  todo: yup.string()
    .required('Empty field')
    .matches(/^\S/, 'Task cannot start with a space'),
});