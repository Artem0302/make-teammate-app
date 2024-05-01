import {IRequestError} from '@shared/core/api';

export function isServerError(number?: number): boolean {
  if (!number) {
    return false;
  }

  const numberString = number.toString();

  return numberString.charAt(0) === '5';
}

export function isSendError(number?: number): boolean {
  if (!number) {
    return false;
  }

  const numberString = number.toString();

  return numberString.charAt(0) === '4';
}

export function isError(error: Error | null) {
  return error && 'payload' in error ? true : false;
}

interface ErrorInspectorResult {
  is500: boolean;
  is400: boolean;
  errorCode?: number;
  payload?: IRequestError | undefined;
}

export function errorInspector(error: Error | null): ErrorInspectorResult {
  if (error && 'payload' in error) {
    const payload = error.payload as IRequestError;
    const is500 = isServerError(payload.code);
    const is400 = isSendError(payload.code);
    const errorCode = payload.data.answerCode;

    return {is500, is400, errorCode, payload};
  }

  return {
    is500: false,
    is400: false,
    errorCode: undefined,
    payload: undefined,
  };
}
