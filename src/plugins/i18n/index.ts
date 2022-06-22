import { createI18n } from 'vue-i18n'
import ru from '@/plugins/i18n/locales/ru'
import en from '@/plugins/i18n/locales/en'
import { LOCALES } from '@/plugins/i18n/types'
import type { MessageSchema } from '@/plugins/i18n/types'

const messages: MessageSchema = {
  en,
  ru,
}

const index = createI18n<MessageSchema, LOCALES>({
  legacy: false,
  locale: LOCALES.EN,
  messages,
})

export default index
