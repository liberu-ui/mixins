/**
 * Format numbers with SI unit prefixes.
 * 
 * @param number - The number to be formatted.
 * @param precision - The decimal places to round the number to. Default is 2.
 * @returns The formatted number with SI unit prefixes.
 */
const formatNumberWithSIUnit = (number: number, precision: number = 2): string => {
  number = Number.parseFloat(number);

  if (number < 1) {
    return number.toString();
  }

  const tier = Math.floor(Math.log10(number) / 3);

  if (tier === 0) {
    return number.toString();
  }

  const suffix = ['', 'k', 'M', 'G', 'T', 'P', 'E'][tier];
  const scale = 10 ** (tier * 3);
  const scaled = number / scale;
  const formatted = Number(scaled.toFixed(precision)) + suffix;

  return formatted;
};

export default formatNumberWithSIUnit;