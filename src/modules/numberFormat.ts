```
import store from '@liberu-ui/ui/src/core/services/store';

/**
 * Format a number with a specified number of decimal places.
 *
 * @param value - The number to be formatted.
 * @param decimals - The number of decimal places to include in the formatted number. Default is 3.
 * @returns The formatted number as a string.
 */
export default function formatNumber(value: number, decimals = 3): string {
  const options: Intl.NumberFormatOptions = {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };

  const formattedNumber: string = new Intl.NumberFormat(
    store.state.preferences.global.lang,
    options,
  ).format(value);

  return formattedNumber;
}
```