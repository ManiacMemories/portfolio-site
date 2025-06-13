import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const email = "kimjunghyen990521@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;

  return (
    <motion.div
      className="max-w-xl mx-auto px-4 sm:px-6 text-center py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="05." title="Contact" />

      <p className="text-gray-700 text-base leading-loose mb-6">
        포트폴리오를 봐주셔서 감사합니다.<br />
        협업 제안, 문의사항은 아래 이메일로 연락 주세요.
      </p>

      {/* 이메일 주소 강조 */}
      <div className="text-2xl sm:text-3xl font-semibold text-primary mb-8">
        {email}
      </div>

      {/* Gmail 링크 버튼 */}
      <a
        href={gmailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-base"
      >
        Gmail로 메일 보내기
      </a>
    </motion.div>
  );
}
