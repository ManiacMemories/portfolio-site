import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiExpress, SiFigma, SiDocker } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillData = {
  Language: [
    { icon: <FaHtml5 className="text-orange-500" />, title: 'HTML5', desc: '기본적인 HTML 태그를 사용할 수 있습니다.' },
    { icon: <FaCss3Alt className="text-blue-500" />, title: 'CSS', desc: '순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.' },
    { icon: <FaJs className="text-yellow-400" />, title: 'Javascript', desc: 'ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.' },
    { icon: <SiTypescript className="text-blue-600" />, title: 'Typescript', desc: '타입을 활용하여 명확한 코드를 작성할 수 있습니다.' },
    { icon: <FaJava className="text-red-500" />, title: 'Java', desc: '자바로 다양한 프로그램을 제작해보았습니다.' },
  ],
  FrontEnd: [
    { icon: <FaReact className="text-sky-500" />, title: 'React', desc: 'SPA 기반 웹앱을 제작할 수 있습니다.' },
    { icon: <SiTailwindcss className="text-cyan-400" />, title: 'Tailwind CSS', desc: '유틸리티 퍼스트 CSS 프레임워크를 활용한 빠른 스타일링' },
  ],
  BackEnd: [
    { icon: <FaNodeJs className="text-green-500" />, title: 'Node.js', desc: '비동기 기반 서버 구축 가능' },
    { icon: <SiExpress className="text-gray-800" />, title: 'Express', desc: 'Node.js 백엔드 프레임워크 사용 가능' },
  ],
  Database: [
    { icon: <SiMysql className="text-blue-600" />, title: 'MySQL', desc: '관계형 DB 설계 및 쿼리 작성 가능' },
    { icon: <SiMongodb className="text-green-700" />, title: 'MongoDB', desc: 'NoSQL 문서형 DB 사용 경험' },
  ],
  ETC: [
    { icon: <SiFigma className="text-pink-500" />, title: 'Figma', desc: '디자인 협업 툴을 활용한 UI 시안 설계' },
    { icon: <SiDocker className="text-blue-500" />, title: 'Docker', desc: '이미지 빌드 및 컨테이너 실행 경험 있음' },
  ],
};

export default function Skills() {
  const categories = Object.keys(skillData);
  const [activeTab, setActiveTab] = useState('Language');

  return (
    <motion.div
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="03." title="Skills" />
      <div className="flex flex-col md:flex-row">
        {/* 사이드 탭 */}
        <div className="flex md:flex-col justify-center mb-6 md:mb-0 md:mr-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 border-l-4 md:border-l-0 md:border-b-4 text-sm font-medium transition text-left ${activeTab === cat ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 기술 리스트 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillData[activeTab].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-gray-100 rounded-xl p-4 shadow"
            >
              <div className="text-4xl shrink-0">{icon}</div>
              <div>
                <div className="text-lg font-semibold">{title}</div>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
