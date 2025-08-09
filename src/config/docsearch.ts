import type { DocSearchClientOptions } from '@astrojs/starlight-docsearch';

export default {
  appId: 'K6NYEUUKJ9',
  apiKey: 'e4a2df4e480fe69f988e257842f3c90d',
  indexName: 'u-zyhorg-ac',
  getMissingResultsUrl({ query }) {
    return `https://github.com/zyhgov/issues/new?title=Search%20for%20"${query}"`;
  },
} satisfies DocSearchClientOptions;