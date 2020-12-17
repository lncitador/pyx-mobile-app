import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Erros {
  const validationErrors: Erros = {};

  err.inner.forEach((error) => {
    if (!error.path) {
      return;
    }
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
