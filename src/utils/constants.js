// 根据环境配置BASE_URL
export const URL_CONFIG = () => {
  const env = import.meta.env.VITE_APP_MOD;
  const mode = import.meta.env.MODE;
  const list = {
    development: 'http://10.10.194.20',
    test: 'http://10.174.26.145',
    production: 'http://10.174.111.248',
  };
  let url = '';

  if (mode === 'production') {
    url = `http://${window.location.host}`;
  } else {
    url = list[env];
  }

  return url;
};
