function convertRgbToHex(color: string) {
  const arrColor = color.replace(/[rgb()]/g, '').split(',');
  let result: string = '#';
  for (let i = 0; i < arrColor.length; i += 1) {
    let hex: string = (+arrColor[i]).toString(16);
    const hexColor: string = hex.length === 1 ? '0' + hex : hex;
    result += hexColor;
  }
  return result;
}

export default convertRgbToHex;
