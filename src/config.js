
const isDev = process.env.NODE_ENV === 'development';

const config = {
  isDev,
  brandName: 'チャット',
  avatarUploadLimit: 2 * 1024 * 1024, // 2 MB
};

export default config;