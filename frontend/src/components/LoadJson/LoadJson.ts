interface LanguageData {
    name: string;
    nativeName: string;
    dir: string;
  }
  
  interface TranslationData {
    [key: string]: LanguageData;
  }
  
  const jsonData: { translation: TranslationData } = require('../../assets/JSON/languages.json');
  
  
  
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