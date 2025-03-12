import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Send } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  const solutions = [
    {
      title: '마케팅 솔루션',
      step: 'Step 01',
      description: '고객이 고민하는 근본적 문제 해결, 타겟의 관심사와 행동 패턴 기반의 맞춤형 마케팅 전략 설계 및 최적화',
      icon: '🎯'
    },
    {
      title: '콘텐츠 솔루션',
      step: 'Step 02',
      description: '창의적이고 참신한 콘텐츠를 통해 코어 타겟에게 브랜드 임팩트 극대화, 타겟과 직접적인 상호작용 유도',
      icon: '✨'
    },
    {
      title: '미디어 솔루션',
      step: 'Step 03',
      description: 'MZ세대가 활발히 활용하는 미디어를 통해 브랜드 인지도 향상, 캠퍼스 내 이벤트·체험 마케팅으로 타겟과 직접 소통',
      icon: '📱'
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
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {solution.icon}
                </motion.div>
                <div className="text-center">
                  <span className="text-blue-600 font-semibold">{solution.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{solution.title}</h3>
                  <p className="mt-4 text-gray-600">{solution.description}</p>
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
    </div>
  );
};

export default Home; 