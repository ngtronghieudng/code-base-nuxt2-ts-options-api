import { i18n } from '@/utils/i18n'

type regexFormatKey =
  | 'nummeric'
  | 'alphanumeric'
  | 'fullwidthKana'
  | 'email'
  | 'url'
  | 'ip'
  | 'multipleEmail'
  | 'password'
  | 'alphanumericOrSymbols'
  | 'alphanumericAndSymbols'
  | 'phone'

interface ILengthParam {
  value: string
  field?: string
  min?: number
  max?: number
  message?: string
}

interface IRegexParam {
  value: string | number
  pattern: any
  format: regexFormatKey
  field?: string
  message?: string
  symbols?: string
}

const required = (
  value: string | number | Array<any> | boolean,
  field?: string,
  message?: string
) => {
  const contentMessage = field
    ? i18n.t('common.validate.cmnErr001', [field])
    : message

  if (typeof value === 'boolean') {
    return value || contentMessage
  }

  return (
    (typeof value === 'number'
      ? value && !!String(value)?.length
      : !!value?.length) || contentMessage
  )
}

const length = (params: ILengthParam) => {
  const { value, message, min, max, field } = params

  if (!value) return true
  let contentMessage = ''

  if (min && max) {
    contentMessage = field
      ? i18n.t('common.validate.cmnErr005', [field, min, max])
      : message

    return (min <= value.length && value.length <= max) || contentMessage
  }
  if (max) {
    contentMessage = field
      ? i18n.t('common.validate.cmnErr004', [field, max])
      : message

    return value.length <= max || contentMessage
  }

  // TODO: case min length
  return true
}

const regex = (params: IRegexParam) => {
  const { value, message, pattern, format, field, symbols } = params

  if (!value) return true
  const stringFormat = i18n.t(`common.regexFormat.${format}`, [symbols])
  const contentMessage = field
    ? i18n.t('common.validate.cmnErr003', [field, stringFormat])
    : message

  if (format === 'multipleEmail') {
    const emails = value.toString().split(',')

    for (const email of emails) {
      if (!pattern.test(email)) return contentMessage
    }

    return true
  }

  return pattern.test(value) || contentMessage
}

export interface IUtilValidate {
  required: (
    value: string | number | Array<any> | boolean,
    field?: string,
    message?: string
  ) => boolean | string
  length: (params: ILengthParam) => boolean | string
  regex: (params: IRegexParam) => boolean | string
}

const validate: IUtilValidate = {
  required,
  length,
  regex,
}

export default validate
