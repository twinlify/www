const size = {
  mobileSMax: '319px',
  mobileSMin: '320px',

  mobileMMax: '374px',
  mobileMMin: '375px',

  mobileLMax: '424px',
  mobileLMin: '425px',

  tabletMax: '767px',
  tabletMin: '768px',

  laptopMax: '1023px',
  laptopMin: '1024px',

  laptopLMax: '1439px',
  laptopLMin: '1440px',

  desktopMax: '2559px',
  desktopMin: '2560px'
};

export const device = {
  mobileSMax: `screen and (max-width: ${size.mobileSMax})`,
  mobileSMin: `screen and (min-width: ${size.mobileSMin})`,

  mobileMMax: `screen and (max-width: ${size.mobileMMax})`,
  mobileMin: `screen and (min-width: ${size.mobileMMin})`,

  mobileLMax: `screen and (max-width: ${size.mobileLMax})`,
  mobileLMin: `screen and (min-width: ${size.mobileLMin})`,

  tabletMax: `screen and (max-width: ${size.tabletMax})`,
  tabletMin: `screen and (min-width: ${size.tabletMin})`,

  laptopMax: `screen and (max-width: ${size.laptopMax})`,
  laptopMin: `screen and (min-width: ${size.laptopMin})`,

  laptopLMax: `screen and (max-width: ${size.laptopLMax})`,
  laptopLMin: `screen and (min-width: ${size.laptopLMin})`,

  desktopMax: `(max-width: ${size.desktopMax})`,
  desktopMin: `(min-width: ${size.desktopMin})`,
};

export const mediaQueryTransition = `transition: all 0.4s`;
