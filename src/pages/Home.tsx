import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Send } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  const solutions = [
    {
      title: '일일호프 스폰서십',
      step: 'Step 01',
      description: '대학생 문화의 중심, 일일호프를 통한 직접적인 브랜드 경험 제공. 타겟 고객과의 실질적인 접점 형성으로 브랜드 인지도 극대화',
      icon: '🎉',
      features: ['현장 브랜딩', '체험 부스 운영', '이벤트 기획 및 실행']
    },
    {
      title: '바이럴 콘텐츠 제작',
      step: 'Step 02',
      description: '방문객들의 자발적인 바이럴을 유도하는 창의적인 스폰서십 콘텐츠 기획. SNS에서 화제가 되는 독창적인 경험 제공',
      icon: '✨',
      features: ['인스타그래머블 포토존', '참여형 이벤트', '실시간 SNS 인터랙션']
    },
    {
      title: '미디어 확산',
      step: 'Step 03',
      description: '학생들의 자발적인 홍보 활동을 통한 미디어 확산. 에브리타임, 인스타그램 등 대학생 플랫폼에서의 자연스러운 바이럴 유도',
      icon: '📱',
      features: ['해시태그 캠페인', '인플루언서 협업', '커뮤니티 마케팅']
    }
  ];

  const stats = [
    {
      title: '대학생 특화 마케팅',
      value: '90%+',
      description: '재구매율'
    },
    {
      title: '높은 콘텐츠 조회수',
      value: '4.9/5.0',
      description: '크몽 마케팅 만족도'
    },
    {
      title: '낮은 CPC 단가',
      value: '10년+',
      description: '마케팅 경력'
    }
  ];

  const clients = [
    '코드스테이츠', '밀리', '하늘안과의원', 'QUAT', 'LG U+', 'NoteMe', 
    '올마이투어', 'Wable', 'KPMG', '천호엔케어', '메가DJ페스티벌', 
    '그레이비랩', '광동제약'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden"
        style={{ opacity, scale, y }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MZ세대 마케팅의 새로운 기준
              </motion.span>
              <motion.span 
                className="block mt-2 text-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                University Studio
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              대학생 타겟 종합 마케팅 솔루션으로 비즈니스 성장을 가속화하세요
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="http://pf.kakao.com/_DxnAZG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                상담 문의하기
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="/docs/university-studio-proposal.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:shadow-xl border border-blue-400"
              >
                <Download className="w-5 h-5 mr-2" />
                제안서 다운로드
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/20 to-blue-900/40"
          animate={{ 
            background: [
              "linear-gradient(to bottom, transparent, rgba(37, 99, 235, 0.2), rgba(30, 58, 138, 0.4))",
              "linear-gradient(to bottom, transparent, rgba(79, 70, 229, 0.2), rgba(49, 46, 129, 0.4))",
              "linear-gradient(to bottom, transparent, rgba(37, 99, 235, 0.2), rgba(30, 58, 138, 0.4))"
            ]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Solutions Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              종합 마케팅 솔루션
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              비즈니스 목표와 브랜드 특성을 반영한 전략적 접근
            </motion.p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="relative flex flex-col items-center p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, #60A5FA, transparent)",
                      "radial-gradient(circle at 100% 100%, #60A5FA, transparent)",
                      "radial-gradient(circle at 0% 0%, #60A5FA, transparent)"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="text-5xl mb-6 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {solution.icon}
                </motion.div>
                <div className="text-center relative z-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-3">
                    {solution.step}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="text-blue-600 font-medium"
                      >
                        • {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              전문성과 노하우
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              10년 이상 경력의 대학생 타겟 전문 마케터들이 함께합니다
            </motion.p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
                <p className="mt-4 text-4xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              함께한 클라이언트
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              다양한 브랜드와 함께 성공적인 마케팅을 진행했습니다
            </motion.p>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-4"
              >
                <span className="text-lg font-semibold text-gray-900">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-600 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-white sm:text-4xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              지금 바로 시작하세요
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-blue-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              MZ 세대와의 효과적인 커뮤니케이션을 위한 첫걸음
            </motion.p>
            <div className="mt-8 flex justify-center gap-4">
              <motion.a
                href="http://pf.kakao.com/_DxnAZG/chat"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                상담 문의하기
              </motion.a>
              <motion.a
                href="/docs/university-studio-proposal.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                제안서 다운로드
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">연락처</h3>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center"
                >
                  <span className="mr-2">📞</span>
                  <a href="tel:010-5700-0623" className="hover:text-white transition-colors">
                    010-5700-0623
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center"
                >
                  <span className="mr-2">✉️</span>
                  <a href="mailto:contact@freeyourmindcorp.com" className="hover:text-white transition-colors">
                    contact@freeyourmindcorp.com
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center"
                >
                  <span className="mr-2">📍</span>
                  <span>서울특별시 강남구</span>
                </motion.li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">바로가기</h3>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a href="http://pf.kakao.com/_DxnAZG/chat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    카카오톡 상담
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <a href="/docs/university-studio-proposal.pdf" download className="hover:text-white transition-colors">
                    제안서 다운로드
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-sm">
              © 2025 UniversityStudio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 