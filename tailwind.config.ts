import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        xl: '1440px',
      },
      colors:{
        error: '#FF2FF2',
        success: '#1E4AE9',
        black: '#0C1421',
        white: '#FFFFFF',
        primary: '#1E4AE9',
        secondary1: '#6F8EFF',
        secondary2: '#EAEEFF',
        secondary3: '#F2F7FF',
        neutral1: '#86878F',
        neutral2: '#CCCCCC',
        neutral3: '#E7E7E8',
        neutral4: '#D4D7E3',
        expense: '#E92C2C',
        expenseStroke: '#F8C1C0',
        expenseBG: '#FFF9F8',
        income: '#00BA34',
        incomeStroke: '#ADE7D2',
        incomeBG: '#F5FFFB',
        default: '#F9F9FB',
        active: '#F2F7FF',
        tag1: '#FFDDD9',
        tag2: '#FFF0D9',
        tag3: '#D9F9CE',
        tag4: '#D9F4FF',
        tag5: '#EAEEFF',
        tag6: '#F1E6FF',
        kakao: '#FEE500',
        naver: '#1EC800',
        google: '#EAF4FF',
      }
    },
  },
  plugins: [],
};
export default config;
