import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projects = [
  // {
  //   title: '야구 데이터 기반 MVP 예측 서비스',
  //   description: 'KBO 데이터를 분석하여 팬 MVP 투표와 비교 가능한 웹 플랫폼 구축',
  //   tech: ['React', 'Spring Boot', 'MySQL'],
  //   link: '#'
  // },
  {
    title: '스마트팜 방울토마토 재배 시스템',
    description: 'AI 기반 영상 분석 및 IoT 제어 기술을 활용한 스마트팜 졸업작품',
    tech: ['React','Node.js','Express','Socket.IO','MongoDB','OpenCV','Python','Arduino'],
    link: 'https://github.com/ManiacMemories/smartfarm_project'
  },
  {
    title: '포트폴리오 웹사이트',
    description: '프론트엔드 중심의 반응형 개인 웹사이트 제작',
    tech: ['React', 'Tailwind CSS'],
    link: 'https://github.com/ManiacMemories/portfolio-site'
  },
  {
    title: '미니 프로젝트',
    description: '7일 미니 도서 관리 시스템 프로젝트',
    tech: ['GitHub','Oracle','DBeaver','Python','Docker','Figma'],
    link: 'https://github.com/jszxro/PK_miniproject_3'
  },
  {
    title: 'HTML 학습 과정',
    description: 'java개발자 과정 Html 리포지토리',
    tech: ['Html','JavaScript','CSS'],
    link: 'https://github.com/ManiacMemories/pknu_html'
  },
];

export default function Projects() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="04." title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
