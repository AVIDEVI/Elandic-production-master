import { fetcher } from 'core/fetcher/fetcher';

export function vimeoFetchInstance<T>(
  url: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  return fetcher(`https://api.vimeo.com/users/200453739${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: 'bearer 1dfda7306f008ffa3d56feb4accf801d',
    },
  });
}
