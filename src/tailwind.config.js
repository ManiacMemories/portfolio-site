/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // 모든 JS/TS/JSX/TSX 내에서 Tailwind 클래스 검색
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Tailwind의 indigo-500 → 강조색 지정
      },
    },
  },
  plugins: [],
};
