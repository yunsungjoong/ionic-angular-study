import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sk.pe.toktok.todo',
  appName: '과제완수',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    StatusBar: {
      style: 'DARK', // 상태 표시줄 스타일 설정
      backgroundColor: '#7d76d3', // 상태 표시줄 배경색 설정
    },
  },

};

export default config;
