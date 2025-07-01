import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const projects = [
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
    title: '미니 프로젝트2',
    description: 'AI 기반 야구 통계 & 커뮤니티 플랫폼 "야~! 모여"',
    tech: ['React', 'Spring Boot', 'Oracle', 'OpenAI API','Websocket'],
    link: 'https://github.com/YB3698/team5-baseball-project'
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
      <SectionTitle number="03." title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
