import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import {
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact,
  FaNodeJs, FaPython, FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMysql, SiMongodb, SiExpress,SiRaspberrypi,
  SiDocker, SiDbeaver, SiOracle, SiSocketdotio, SiArduino
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';  
import { motion } from 'framer-motion';

const skillData = {
  Frontend: [
    { icon: <FaHtml5 className="text-orange-500" />, title: 'HTML5', desc: '간단한 웹 페이지 제작' },
    { icon: <FaCss3Alt className="text-blue-500" />, title: 'CSS', desc: '레이아웃, 반응형, 애니메이션 구현' },
    { icon: <FaJs className="text-yellow-400" />, title: 'Javascript', desc: 'DOM 제어, 비동기 처리' },
    { icon: <FaReact className="text-sky-500" />, title: 'React', desc: 'SPA, 컴포넌트 기반 UI 개발' },
    { icon: <SiTailwindcss className="text-cyan-400" />, title: 'Tailwind CSS', desc: 'CSS 프레임워크 활용' },
  ],
  Backend: [
    { icon: <FaNodeJs className="text-green-500" />, title: 'Node.js', desc: 'REST API, 비동기 서버 개발' },
    { icon: <SiExpress className="text-gray-800" />, title: 'Express', desc: 'Node.js 서버 프레임워크 활용' },
    { icon: <span className="text-pink-600">🌱</span>, title: 'Spring Boot', desc: 'Java 기반 RESTful API 서버 개발' },
    { icon: <FaJava className="text-red-500" />, title: 'Java', desc: '객체지향 프로그래밍 경험' },
    { icon: <FaPython className="text-blue-400" />, title: 'Python', desc: '데이터 처리 및 스크립트 개발' },
  ],
  Database: [
    { icon: <SiMysql className="text-blue-600" />, title: 'MySQL', desc: '관계형 DB 설계 및 쿼리 작성' },
    { icon: <SiOracle className="text-red-600" />, title: 'Oracle', desc: '대용량 데이터 관리 및 쿼리' },
    { icon: <SiMongodb className="text-green-700" />, title: 'MongoDB', desc: 'NoSQL, 문서형 DB 활용' },
    { icon: <SiDbeaver className="text-sky-700" />, title: 'DBeaver', desc: 'DB 관리 및 시각화 도구 사용' },
  ],
  Tools_Others: [
    { icon: <SiDocker className="text-blue-500" />, title: 'Docker', desc: '컨테이너 환경 구축 및 배포' },
    { icon: <FaGithub className="text-black" />, title: 'GitHub', desc: '버전 관리 및 협업' },
    { icon: <VscVscode className="text-blue-700" />, title: 'VS Code', desc: '코드 작성, 디버깅, 확장 활용' },
    { icon: <SiArduino className="text-orange-500" />, title: 'Arduino', desc: '센서 제어 및 시리얼 통신' },
    { icon: <SiRaspberrypi className="text-red-500" />, title: 'Raspberry Pi', desc: 'IoT 데이터 수집 및 서버 역할' },
    { icon: <span className="text-green-600">🌐</span>, title: 'WebSocket', desc: '실시간 양방향 통신 구현' },
    { icon: <SiSocketdotio className="text-purple-600" />, title: 'Socket.IO', desc: '실시간 데이터 UI 연동' },
    { icon: <span className="text-blue-400">🔑</span>, title: 'OpenAI API', desc: 'AI 서비스 연동 및 활용' },
  ],
};

export default function Skills() {
  const categories = Object.keys(skillData);

  return (
    <motion.div
      className="container mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle number="02." title="Skills" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-row flex-wrap gap-8 w-full justify-center">
          {categories.map(cat => (
            <div key={cat} className="flex flex-col items-center bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 min-w-[270px] max-w-xs w-full">
              <h3 className="text-lg font-bold mb-4 text-primary">{cat}</h3>
              <div className="flex flex-col gap-3 w-full">
                {skillData[cat].map(({ icon, title, desc }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-gray-100 rounded-lg p-3 shadow w-full transition duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-50 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-center text-2xl mr-3 w-8 h-8">{icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{title}</div>
                      <p className="text-xs text-gray-600 leading-tight truncate">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
