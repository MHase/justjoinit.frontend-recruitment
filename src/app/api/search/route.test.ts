import { testApiHandler } from 'next-test-api-route-handler';
import { describe, expect, it } from 'vitest';

import { GET } from './route';

const responseMock = {
  400: { message: '`name` param is required' },
  200: {
    samuro: {
      data: [
        {
          item: {
            name: 'samurott',
            id: 503,
          },
          refIndex: 17,
        },
        {
          item: {
            name: 'bulbasaur',
            id: 1,
          },
          refIndex: 0,
        },
        {
          item: {
            name: 'simipour',
            id: 516,
          },
          refIndex: 30,
        },
        {
          item: {
            name: 'seismitoad',
            id: 537,
          },
          refIndex: 51,
        },
      ],
    },
  },
};

describe('Search api route', () => {
  describe('GET', () => {
    it('throws an error for missing name param', async () => {
      await testApiHandler({
        appHandler: { GET },
        async test({ fetch }) {
          const res = await fetch({ method: 'GET' });
          await expect(res.json()).resolves.toStrictEqual({ message: '`name` param is required' });
          expect(res.status).toBe(400);
        },
      });

      await testApiHandler({
        appHandler: { GET },
        url: '/api/search?name=',
        async test({ fetch }) {
          const res = await fetch({ method: 'GET' });
          await expect(res.json()).resolves.toStrictEqual({ message: '`name` param is required' });
          expect(res.status).toBe(400);
        },
      });
    });

    it('returns data for specified name param', async () => {
      await testApiHandler({
        appHandler: { GET },
        url: '/api/search?name=samuro',
        async test({ fetch }) {
          const res = await fetch({ method: 'GET' });
          await expect(res.json()).resolves.toStrictEqual(responseMock[200].samuro);
        },
      });
    });
  });
});
