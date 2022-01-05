import { ExtendedGlobalThis, getEnvironmentVariable } from './environment-config';

describe('Config', () => {
  describe('getEnvironmentVariable', () => {
    it('should return whatever is attached with that name to the globalThis object', () => {
      (globalThis as ExtendedGlobalThis)['__env'] = { API_URL: 'http://localhost:8080' };

      expect(getEnvironmentVariable('API_URL')).toBe('http://localhost:8080');
    });

    it('should return undefined if the variable does not exist', () => {
      expect(getEnvironmentVariable('UNKNOWN')).toBeUndefined();
    });

    it('should return undefined if the global environment does not exist', () => {
      delete (globalThis as ExtendedGlobalThis)['__env'];
      expect(getEnvironmentVariable('API_URL')).toBeUndefined();
    });
  });
});
