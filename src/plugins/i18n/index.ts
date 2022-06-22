import { createI18n } from 'vue-i18n'
import { LOCALES } from '@/plugins/i18n/types'

const i18n = createI18n({
  inheritLocale: true,
  legacy: false,
  locale: LOCALES.EN,
})

export default i18n
