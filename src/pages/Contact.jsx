import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const email = "kimjunghyen990521@gmail.com";
  const phone = "010-8582-1136";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;

  return (
    <motion.div
      className="max-w-xl mx-auto px-4 sm:px-6 text-center py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="04." title="Contact" />

      <p className="text-left sm:text-center text-base sm:text-lg text-gray-700 leading-relaxed">
        포트폴리오를 봐주셔서 감사합니다.<br /><br />
        협업 제안, 문의사항은 아래로 연락 주세요.
        <br /><br />
      </p>

      {/* 연락처(이메일, 전화번호) 강조 */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 text-base sm:text-lg font-semibold">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span role="img" aria-label="전화">📞</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span role="img" aria-label="이메일">✉️</span>
          <span className="break-all">{email}</span>
        </div>
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
