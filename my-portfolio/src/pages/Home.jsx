import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 text-center" // 가운데 정렬, 최대 너비 제한, 좌우 패딩, 텍스트 중앙
      initial={{ opacity: 0, y: 30 }} // 진입 시 투명도와 아래쪽에서 애니메이션
      whileInView={{ opacity: 1, y: 0 }} // 뷰포트에 보이면 원래 위치와 불투명도로 전환
      viewport={{ once: false }} // 나갔다 들어올 때 마다 적용
      transition={{ duration: 0.6 }} // 애니메이션 지속시간
    >
      <SectionTitle number="01." title="Intro" />

      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
        {/* text-4xl: 모바일 기준 큰 글씨, md:text-5xl: 데스크탑에서 더 크게, font-bold: 굵게, leading-tight: 줄간격 좁게, text-gray-900: 진한 회색, mb-6: 아래 마진 */}
        안녕하세요 👋<br /><br />
        저는 주니어 개발자 <span className="text-primary">김정현</span> 입니다.
        {/* text-primary: 테마 주요 색상 강조 */}
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed">
        {/* text-lg: 본문 글씨 크게, text-gray-600: 연한 회색, leading-relaxed: 줄간격 넓게 */}
        React & Java 기반의 풀스택 웹개발을 지향하며 <br />
        사용자 중심의 UI/UX와 깔끔한 코드 작성을 추구합니다.
      </p>
    </motion.div>
  );
}
