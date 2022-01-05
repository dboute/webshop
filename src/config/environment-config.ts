/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
export type ExtendedGlobalThis = typeof globalThis & { __env?: Record<string, unknown> };

function _env() {
  return (globalThis as ExtendedGlobalThis)['__env'];
}

export function getEnvironmentVariable<T = string>(name: string): T | undefined {
  const env = _env();
  if (env) {
    return env[name] as T;
  }
  return undefined;
}
