import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import { SelectionItem } from '@/models/common'

const toCamelCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        camelCase(key),
        toCamelCase(val),
      ])
    )
  } else {
    return obj.map((el) => toCamelCase(el))
  }
}

const toSnakeCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        snakeCase(key),
        toSnakeCase(val),
      ])
    )
  } else {
    return obj.map((el) => toSnakeCase(el))
  }
}

const getSelectionItemName = (
  source: SelectionItem[],
  itemId: number
): string => {
  return source.find((e) => e.id !== null && e.id === itemId)?.name ?? ''
}

export interface IUtilHelper {
  toCamelCase: (obj: object) => any
  toSnakeCase: (obj: object) => any
  getSelectionItemName: (source: SelectionItem[], itemId: number) => string
}

const helper: IUtilHelper = {
  toCamelCase,
  toSnakeCase,
  getSelectionItemName,
}

export default helper
