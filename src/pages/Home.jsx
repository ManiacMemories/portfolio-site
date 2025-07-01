import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 sm:px-6 text-left sm:text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="01." title="About" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-900 mb-6">
        안녕하세요 👋<br /><br />
        개발자를 꿈꾸는 <span className="text-primary">김정현</span> 입니다. 
      </h1><br />

      <p className="text-left sm:text-center text-base sm:text-lg text-gray-700 leading-relaxed">
        Java, Spring Boot, React를 중심으로 풀스택 프로젝트를 경험했고,<br/><br />
        사용자 중심의 서비스 기획과 프론트/백엔드 개발에 열정을 가지고 있습니다.<br/><br/>
        기술적인 성장뿐만 아니라, 동료와의 협업과 소통을 중요하게 생각합니다.
      </p>
    </motion.div>
  );
}
