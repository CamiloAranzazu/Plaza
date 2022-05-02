import { isNullOrUndefined } from 'util';

export function fixNulls(obj: object | {} = {}): object {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      isNullOrUndefined(value) ? undefined : value
    )
  );
}

export function autoTextColor(bgColor = '#222222') {
  let color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  let r = parseInt(color.substring(0, 2), 16); // hexToR
  let g = parseInt(color.substring(2, 4), 16); // hexToG
  let b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#222222' : '#f4f4f4';
}
