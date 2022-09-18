import { createI18n } from "vue-i18n";

const messages = {
  en: {},
  zh: {},
};
const i18n = createI18n({
  locale: localStorage.getItem("language") || "zh",
  messages,
});

export default i18n;
