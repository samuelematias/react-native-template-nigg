import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;
const vh = height / 100;
const pw = w => w * vw; // percent width
const ph = h => h * vh; // percent height
const majorVersionIOS = parseInt(Platform.Version, 10);
const isIOS10OrMinus = Platform.OS === 'ios' && majorVersionIOS < 11;
const iPhoneXHelper = isIOS10OrMinus ? 20 : 0;

function size(s) {
  let returnSize;
  if (Platform.OS === 'ios') {
    if (pixelRatio === 2 && vw === 3.2) {
      // 5, SE
      returnSize = s * 1;
    } else if (pixelRatio === 2 && vw === 3.75) {
      // 6, 7, 8
      returnSize = s * 1.1;
    } else if (pixelRatio === 2 && vw === 4.14) {
      // XR
      returnSize = s * 1.2;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // 6, 7, 8 plus
      returnSize = s * 1.2;
    } else if (pixelRatio === 3 && vw === 3.75) {
      // X, XS
      returnSize = s * 1.2;
    } else if (pixelRatio === 3 && vw === 4.14) {
      // XS Max
      returnSize = s * 1.3;
    } else {
      returnSize = s * 1;
    }
  }
  if (Platform.OS === 'android') {
    if (pixelRatio <= 1) {
      returnSize = s * 0.9;
    } else if (pixelRatio <= 1.5) {
      returnSize = s * 1;
    } else if (pixelRatio <= 2) {
      returnSize = s * 1.1;
    } else if (pixelRatio <= 3) {
      returnSize = s * 1.2;
    } else if (pixelRatio <= 3.5) {
      returnSize = s * 1.3;
    } else {
      returnSize = s * 1.1;
    }
  }
  return returnSize;
}

function keyboardVerticalOffset(offset) {
  let returnOffset;
  const deviceName = DeviceInfo.getDeviceName();

  if (Platform.OS === 'ios') {
    const isIphone6Plus = deviceName === 'iPhone 6 Plus';
    const isIphone7Plus = deviceName === 'iPhone 7 Plus';
    const isIphone8Plus = deviceName === 'iPhone 8 Plus';
    const isSomeIPhonePlus = isIphone6Plus || isIphone7Plus || isIphone8Plus;

    const isMax = deviceName === 'iPhone Xs Max';
    if (pixelRatio === 2 && vw === 3.2) {
      // 5, SE
      returnOffset = offset;
    } else if (pixelRatio === 2 && vw === 3.75) {
      // 6, 7, 8
      // returnOffset = offset - 100;
      returnOffset = offset;
    } else if (pixelRatio === 2 && vw === 4.14) {
      // XR
      // returnOffset = offset - 150;
      returnOffset = offset + 25;
    } else if (pixelRatio === 3 && vw === 4.14 && isSomeIPhonePlus) {
      // 6, 7, 8 plus
      // returnOffset = offset - 150;
      returnOffset = offset;
    } else if (pixelRatio === 3 && vw === 3.75) {
      // X, XS
      // returnOffset = offset - 200;
      returnOffset = offset + 25;
    } else if (pixelRatio === 3 && vw === 4.14 && isMax) {
      // XS Max
      // returnOffset = offset - 200;
      returnOffset = offset + 25;
    } else {
      // returnOffset = offset - 100;
      returnOffset = offset;
    }
  }
  if (Platform.OS === 'android') {
    if (pixelRatio <= 1) {
      returnOffset = offset;
    } else if (pixelRatio <= 1.5) {
      returnOffset = offset;
    } else if (pixelRatio <= 2) {
      returnOffset = offset + 20;
    } else if (pixelRatio <= 3) {
      returnOffset = offset + 50;
    } else if (pixelRatio <= 3.5) {
      returnOffset = offset + 100;
    } else {
      returnOffset = offset;
    }
  }

  return returnOffset;
}

const metrics = {
  // /**
  //  * yourScreenMetrics
  //  */
  // yourScreenMetrics: {
  //   keyboardVerticalOffset: keyboardVerticalOffset(-50),
  //   container: {
  //     marginTop: ph(8),
  //     height: size(40),
  //     width: pw(72)
  //   }
  // }
};

export default {
  pw,
  ph,
  size,
  keyboardVerticalOffset,
  iPhoneXHelper,
  metrics,
};
