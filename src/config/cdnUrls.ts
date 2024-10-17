import { EmojiStyle } from '../types/exposedTypes';

const CDN_URL_APPLE =
  'https://emojidatasadevat.netlify.app/img-apple-64/';
const CDN_URL_FACEBOOK =
  'https://emojidatasadevat.netlify.app/img-facebook-64/';
const CDN_URL_TWITTER =
  'https://emojidatasadevat.netlify.app/img-twitter-64/';
const CDN_URL_GOOGLE =
  'https://emojidatasadevat.netlify.app/img-google-64/';

export function cdnUrl(emojiStyle: EmojiStyle): string {
  switch (emojiStyle) {
    case EmojiStyle.TWITTER:
      return CDN_URL_TWITTER;
    case EmojiStyle.GOOGLE:
      return CDN_URL_GOOGLE;
    case EmojiStyle.FACEBOOK:
      return CDN_URL_FACEBOOK;
    case EmojiStyle.APPLE:
    default:
      return CDN_URL_APPLE;
  }
}
