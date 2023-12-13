interface LanguageData {
    name: string;
    nativeName: string;
    dir: string;
  }
  
  interface TranslationData {
    [key: string]: LanguageData;
  }
  
  const jsonData: { translation: TranslationData } = require('../../assets/JSON/languages.json');
  
  
  
  /**
   * Represents an array of language data extracted from the provided JSON data.
   * @typedef {Object} LanguageData
   * @property {string} language_code - The language code.
   * @property {string} display_name - The display name of the language.
   * @property {string} native_name - The native name of the language.
   * @property {string} direction - The direction of the language (ltr or rtl).
   */

  /**
   * Extracts language data from the provided JSON data.
   * @returns {LanguageData[]} An array of language data.
   */
  const languageData = Object.keys(jsonData.translation).map(language_code => ({
    language_code,
    display_name: jsonData.translation[language_code].name,
    native_name: jsonData.translation[language_code].nativeName,
    direction: jsonData.translation[language_code].dir,
  }));
  
  
  const columnCount = 2;
  const languageDataLength = languageData.length;
  const columnSize = Math.ceil(languageDataLength / columnCount);
  
  export const cols: { language_code: string; display_name: string; native_name: string; direction: string; }[][] = [];
  for (let i = 0; i < columnCount; i++) {
    cols.push(languageData.slice(i * columnSize, (i + 1) * columnSize));
  }