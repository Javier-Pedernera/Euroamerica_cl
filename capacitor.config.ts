import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Mi Pensión',
  webDir: 'www',
  // bundledWebRuntime: false,
  server: {
    cleartext: true,
    androidScheme: 'https', // Usar HTTPS en Android
  },
  android: {
    allowMixedContent: true, // Permitir contenido mixto en Android
  },
};

export default config;
// import type { CapacitorConfig } from '@capacitor/cli';

// const config: CapacitorConfig = {
//   appId: 'io.ionic.starter',
//   appName: 'euroamerica_cl',
//   webDir: 'www'
// };

// export default config;
