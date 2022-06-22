import type enUS from '@/plugins/i18n/locales/en'
import type ruRU from '@/plugins/i18n/locales/ru'

export enum LOCALES {
  EN = 'en',
  RU = 'ru',
}

type MessageSchemaEn = typeof enUS
type MessageSchemaRu = typeof ruRU

export interface MessageSchema {
  [LOCALES.EN]: MessageSchemaEn
  [LOCALES.RU]: MessageSchemaRu
}
