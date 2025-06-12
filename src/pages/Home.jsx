import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="01." title="Intro" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-900 mb-6">
        안녕하세요 👋<br /><br />
        저는 주니어 개발자 <span className="text-primary">김정현</span> 입니다. 
      </h1><br />

      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        React & Java 기반의 풀스택 웹개발을 지향하며 <br />
        사용자 중심의 UI/UX와 깔끔한 코드 작성을 추구합니다.
      </p>
    </motion.div>
  );
}
