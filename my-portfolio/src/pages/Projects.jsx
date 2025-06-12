import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: '야구 데이터 기반 MVP 예측 서비스',
    description: 'KBO 데이터를 분석하여 팬 MVP 투표와 비교 가능한 웹 플랫폼 구축',
    tech: ['React', 'Spring Boot', 'MySQL'],
    link: '#'
  },
  {
    title: '포트폴리오 웹사이트',
    description: '프론트엔드 중심의 반응형 개인 웹사이트 제작',
    tech: ['React', 'Tailwind CSS'],
    link: '#'
  },
];

export default function Projects() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="04." title="Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
