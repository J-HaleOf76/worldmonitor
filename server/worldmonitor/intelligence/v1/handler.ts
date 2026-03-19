import type { IntelligenceServiceHandler } from '../../../../src/generated/server/worldmonitor/intelligence/v1/service_server';

import { getRiskScores } from './get-risk-scores';
import { getPizzintStatus } from './get-pizzint-status';
import { classifyEvent } from './classify-event';
import { getCountryIntelBrief } from './get-country-intel-brief';
import { searchGdeltDocuments } from './search-gdelt-documents';
import { deductSituation } from './deduct-situation';
import { getCountryFacts } from './get-country-facts';
import { listSecurityAdvisories } from './list-security-advisories';

export const intelligenceHandler: IntelligenceServiceHandler = {
  getRiskScores,
  getPizzintStatus,
  classifyEvent,
  getCountryIntelBrief,
  searchGdeltDocuments,
  deductSituation,
  getCountryFacts,
  listSecurityAdvisories,
  listSatellites: async (_ctx, _req) => ({ satellites: [] }),
  listGpsInterference: async (_ctx, _req) => ({ hexes: [], source: '', fetchedAt: 0 }),
  listOrefAlerts: async (_ctx, _req) => ({ configured: false, alerts: [], history: [], historyCount24h: 0, totalHistoryCount: 0, timestampMs: '', error: '' }),
  listTelegramFeed: async (_ctx, _req) => ({ enabled: false, messages: [], count: 0, error: '' }),
  getCompanyEnrichment: async (_ctx, _req) => ({ techStack: [], hackerNewsMentions: [], enrichedAtMs: '', sources: [] }),
  listCompanySignals: async (_ctx, _req) => ({ company: '', domain: '', signals: [], discoveredAtMs: '' }),
};
