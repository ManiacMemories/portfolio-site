import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  return (
    <motion.div
      className="max-w-xl mx-auto px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="05." title="Contact" />

      <p className="text-gray-700 text-base leading-loose">
        포트폴리오를 봐주셔서 감사합니다.<br/>
        협업 제안, 문의사항 등은 아래 이메일로 연락 주시면 빠르게 회신드리겠습니다.
      </p>
      <br />
      <a
        href="mailto:your-email@example.com"
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        이메일 보내기
      </a>
    </motion.div>
  );
}
