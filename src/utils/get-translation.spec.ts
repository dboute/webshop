import axios from 'axios';
import { getTranslations } from './get-translations';

describe('getTranslations', () => {
  it('should get all the translations from all the libs', async () => {
    const mockLanguage = 'en';
    const mockGet = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({
        data: {
          libs: [
            { name: 'libA', assetsRoot: true },
            { name: 'libB', assetsRoot: true },
            { name: 'libC', assetsRoot: false },
          ],
        },
      })
      .mockResolvedValueOnce({
        data: {
          LABEL_A: 'Label A',
        },
      })
      .mockResolvedValueOnce({ data: { LABEL_B: 'Label b' } });

    const expected = { LABEL_A: 'Label A', LABEL_B: 'Label b' };
    const result = await getTranslations(mockLanguage);
    expect(result).toEqual(expected);
    expect(mockGet).toHaveBeenCalledWith('assets/include.json', { baseURL: '' });
    expect(mockGet).toHaveBeenCalledWith(`assets/libA/i18n/${mockLanguage}.json`, { baseURL: '' });
    expect(mockGet).toHaveBeenCalledWith(`assets/libB/i18n/${mockLanguage}.json`, { baseURL: '' });
  });
});
