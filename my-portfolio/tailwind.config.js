export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 반드시 src 하위 파일 포함
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 👈 Inter 폰트 지정
      },
      colors: {
        primary: '#1d4ed8',
        accent: '#2563eb',
        background: '#f9fafb',
      },
    },
  },
  plugins: [],
};