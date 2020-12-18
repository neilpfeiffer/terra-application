const loadLocaleData = (locale, polyfill) => {
  return new Promise((resolve, reject) => {
    const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;

    if (polyfill === 'intl') {
      switch (locale) {
        case "en":
          return import('intl/locale-data/jsonp/en.js');
        case "en-AU":
          return import('intl/locale-data/jsonp/en-AU.js');
        case "en-CA":
          return import('intl/locale-data/jsonp/en-CA.js');
        case "en-US":
          return import('intl/locale-data/jsonp/en-US.js');
        case "en-GB":
          return import('intl/locale-data/jsonp/en-GB.js');
        case "es":
          return import('intl/locale-data/jsonp/es.js');
        case "es-ES":
          return import('intl/locale-data/jsonp/es-ES.js');
        case "de":
          return import('intl/locale-data/jsonp/de.js');
        case "fr":
          return import('intl/locale-data/jsonp/fr.js');
        case "fr-FR":
          return import('intl/locale-data/jsonp/fr-FR.js');
        case "nl":
          return import('intl/locale-data/jsonp/nl.js');
        case "nl-BE":
          return import('intl/locale-data/jsonp/nl-BE.js');
        case "pt":
          return import('intl/locale-data/jsonp/pt.js');
        case "pt-BR":
          return import('intl/locale-data/jsonp/pt-BR.js');
        case "sv":
          return import('intl/locale-data/jsonp/sv.js');
        case "sv-SE":
          return import('intl/locale-data/jsonp/sv-SE.js');
        default:
          return reject(`Locale data for ${polyfill} was not supplied for the ${locale} locale.`);
        }
      } else {
        switch (locale) {
          case "en":
            return import('@formatjs/intl-relativetimeformat/locale-data/en.js');
          case "en-AU":
            return import('@formatjs/intl-relativetimeformat/locale-data/en-AU.js');
          case "en-CA":
            return import('@formatjs/intl-relativetimeformat/locale-data/en-CA.js');
          case "en-US":
            return import('@formatjs/intl-relativetimeformat/locale-data/en-US.js');
          case "en-GB":
            return import('@formatjs/intl-relativetimeformat/locale-data/en-GB.js');
          case "es", "es-ES":
            return import('@formatjs/intl-relativetimeformat/locale-data/es.js');
          case "de":
            return import('@formatjs/intl-relativetimeformat/locale-data/de.js');
          case "fr", "fr-FR":
            return import('@formatjs/intl-relativetimeformat/locale-data/fr.js');
          case "nl":
            return import('@formatjs/intl-relativetimeformat/locale-data/nl.js');
          case "nl-BE":
            return import('@formatjs/intl-relativetimeformat/locale-data/nl-BE.js');
          case "pt", "pt-BR":
            return import('@formatjs/intl-relativetimeformat/locale-data/pt.js');
          case "sv", "sv-SV":
            return import('@formatjs/intl-relativetimeformat/locale-data/sv.js');
          default:
            return reject(`Locale data for ${polyfill} was not supplied for the ${locale} locale.`)
        }
      }
  });
}

export default loadLocaleData
