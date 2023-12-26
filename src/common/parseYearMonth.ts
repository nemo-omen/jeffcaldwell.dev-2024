/**
 * This is a horrible function that manhandles a year-month
 * representation into something like `December 2023`. I should be
 * able to easily do this with JS new Date(), but that piece of hot
 * garbage just gives me `November 2023` when I send it `2023-12`.
 * I don't care why it's doing this. That's insane behavior.
 * @param date A string representing the year and month: `2023-12`
 * @returns string: A string,, formatted as `December 2023`
 */
export function parseYearMonth(date: string): string {
  const split = date.split('-');

  if (split[0].length < 4) {
    throw new Error("Expected a date in the format: 'yyyy-mm'.");
  }

  const nums = split.map((s) => Number.parseInt(s));
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const month = months[nums[1] - 1];
  const year = split[0];
  const rep = `${month} ${year}`;
  return rep;
}