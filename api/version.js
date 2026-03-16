// Non-sebuf: returns XML/HTML, stays as standalone Vercel function
import { jsonResponse } from './_json-response.js';

export const config = { runtime: 'edge' };

const RELEASES_URL = 'https://api.github.com/repos/koala73/worldmonitor/releases/latest';

export default async function handler() {
  try {
    const res = await fetch(RELEASES_URL, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'WorldMonitor-Version-Check',
      },
    });

    if (!res.ok) {
      return jsonResponse({ error: 'upstream' }, 502);
    }

    const release = await res.json();
    const tag = release.tag_name ?? '';
    const version = tag.replace(/^v/, '');

    return jsonResponse({
      version,
      tag,
      url: release.html_url,
      prerelease: release.prerelease ?? false,
    }, 200, {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60, stale-if-error=3600',
      'Access-Control-Allow-Origin': '*',
    });
  } catch {
    return jsonResponse({ error: 'fetch_failed' }, 502);
  }
}
