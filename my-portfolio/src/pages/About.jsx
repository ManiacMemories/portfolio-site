import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="02." title="About Me" />

      <p className="text-gray-700 text-base leading-loose">
        👨‍💻 안녕하세요! 저는 꾸준한 학습과 깔끔한 UI 구현을 즐기는 웹 개발자입니다.<br/><br/>
        Java, Spring Boot, React를 중심으로 풀스택 프로젝트를 경험했고,<br/>
        사용자 중심의 서비스 기획과 프론트/백엔드 개발에 열정을 가지고 있습니다.<br/><br/>
        기술적인 성장뿐만 아니라, 동료와의 협업과 소통을 중요하게 생각합니다.
      </p>
    </motion.div>
  );
}
