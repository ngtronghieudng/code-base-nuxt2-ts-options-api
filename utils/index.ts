import validate, { IUtilValidate } from '@/utils/validate'
import helper, { IUtilHelper } from '@/utils/helper'

export interface IUtils {
  validate: IUtilValidate
  helper: IUtilHelper
}

const utils: IUtils = {
  validate,
  helper,
}

export default utils
