import {useTranslation} from 'react-i18next';

import {useErrorContext} from './error.provider';

export function useError() {
  const {t} = useTranslation('shared');

  const {
    bug,
    success,
    warning,
    fail,
    fatal,
    failModal,
    toasts,
    remove,
    setError,
    clearFail,
  } = useErrorContext();

  function errorMessage(code?: number, message?: string | (() => never)) {
    const errorCode = String(code);

    if (message) {
      return message;
    }

    const errorsObject = {
      '13': t('errors.statuses.13'),
      '14': t('errors.statuses.14'),
      '67': t('errors.statuses.67'),
      '68': t('errors.statuses.68'),
      '85': t('errors.statuses.85'),
      '96': t('errors.statuses.96'),
      '97': t('errors.statuses.97'),
      '202': t('errors.statuses.202'),
      '205': t('errors.statuses.205'),
      '203': t('errors.statuses.203'),
      '1000': t('errors.statuses.1000'),
      '1001': t('errors.statuses.1001'),
      '1002': t('errors.statuses.1002'),
      '1003': t('errors.statuses.1003'),
      '1004': t('errors.statuses.1004'),
      '1005': t('errors.statuses.1005'),
      '1007': t('errors.statuses.1007'),
      '1100': t('errors.statuses.1100'),
      '1101': t('errors.statuses.1101'),
      '1102': t('errors.statuses.1102'),
      '1103': t('errors.statuses.1103'),
      '1105': t('errors.statuses.1105'),
      '1106': t('errors.statuses.1106'),
      '1104': t('errors.statuses.1104'),
      '1107': t('errors.statuses.1107'),
      '1108': t('errors.statuses.1108'),
      '1110': t('errors.statuses.1110'),
      '1111': t('errors.statuses.1111'),
    };

    return (
      errorsObject[errorCode as keyof typeof errorsObject] ||
      t('errors.default-error')
    );
  }

  return {
    bug,
    success,
    warning,
    fail,
    fatal,
    errorMessage,
    failModal,
    toasts,
    remove,
    setError,
    clearFail,
  };
}
