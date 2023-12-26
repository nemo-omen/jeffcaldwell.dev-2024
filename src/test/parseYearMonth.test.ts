import { parseYearMonth } from '../common/parseYearMonth';
import { expect, test } from 'vitest';


test("Converts '2023-12' to 'December 2023'", () => {
  expect(parseYearMonth('2023-12')).toBe('December 2023');
  expect(() => parseYearMonth('12-2023')).toThrowError(/^Expected a date in the format: 'yyyy-mm'.$/);
});