import axios from 'axios';

interface LibTranslation {
  [key: string]: string | unknown;
}

async function getLibTranslation(lang: string, lib: string): Promise<LibTranslation> {
  let libTranslation: LibTranslation;
  try {
    libTranslation = await axios
      .get<LibTranslation>(`assets/${lib}/i18n/${lang}.json`, { baseURL: '' })
      .then((result) => result.data);
  } catch (error) {
    libTranslation = {};
  }
  return libTranslation;
}

export async function getTranslations(language: string): Promise<LibTranslation> {
  const {
    data: { libs },
  } = await axios.get('assets/include.json', { baseURL: '' }).catch(() => ({
    data: {
      libs: [],
    },
  }));

  return (await Promise.all(
    libs.filter((lib) => lib.assetsRoot).map((lib) => getLibTranslation(language, lib.name))
  ).then((result) => {
    return result.reduce((libA, libB) => ({ ...Object.assign(libA, {}), ...Object.assign(libB, {}) }), {});
  })) as LibTranslation;
}
