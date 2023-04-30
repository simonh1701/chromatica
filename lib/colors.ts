import tinycolor from "tinycolor2";

/**
 * The djb2 hash function.
 *
 * Learn more here: https://theartincode.stanis.me/008-djb2/
 *
 * @param str - the string to hash
 * @returns hash of string `str`
 */
export function djb2(str: string) {
  let hash = 5381;

  for (let i = 0; i < str.length; i++)
    hash = (hash << 5) + hash + str.charCodeAt(i);

  return hash;
}

export function generateGradientColors(str: string) {
  const hash = djb2(str);

  var hue1 = hash % 360;
  while (hue1 < 0) hue1 += 360;

  var c1 = tinycolor({
    h: hue1,
    s: 0.95,
    l: 0.5,
  });

  var c2 = c1.triad()[1];
  var c3 = c1.complement();
  var c4 = c3.triad()[1];

  const colors = [c1, c2, c3, c4].map((color) => color.toHexString());

  return colors;
}
