import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Send } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

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
                MZ 세대와의 직접적인 접점
              </motion.span>
              <motion.span 
                className="block mt-2 text-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                일일호프 마케팅 패키지
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              일평균 800명의 MZ 대학생과 만나는 강력한 브랜드 경험을 제공합니다
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
                문의하기
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

      {/* Features Section */}
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
              핵심 성과 지표
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              일일호프 패키지의 강력한 마케팅 효과를 경험하세요
            </motion.p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: '직접 참여',
                description: '일평균 800명 이상의 대학생이 직접 참여하며, 브랜드와 2시간 이상 접촉',
                icon: '👥'
              },
              {
                title: 'SNS 도달',
                description: '10,000명 이상의 SNS 도달과 5,000회 이상의 해시태그 노출',
                icon: '📱'
              },
              {
                title: '구매 전환',
                description: '25% 이상의 구매 전환율과 40%의 재방문율 달성',
                icon: '💰'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
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
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
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
              패키지 가격
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              비즈니스 목표에 맞는 최적의 패키지를 선택하세요
            </motion.p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900">브랜드 노출형</h3>
              <p className="mt-4 text-gray-600">기본적인 브랜드 노출과 홍보를 위한 패키지</p>
              <div className="mt-6">
                <motion.span 
                  className="text-4xl font-extrabold text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  200만원
                </motion.span>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "일일호프 내부 노출",
                  "포스터 노출",
                  "SNS 노출",
                  "에브리타임 노출",
                  "기본 스태프 지원"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  delay: 1
                }}
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
              >
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-500 text-white shadow-lg">
                  추천
                </span>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">종합 마케팅형</h3>
              <p className="mt-4 text-gray-600">전문적인 마케팅 솔루션을 위한 패키지</p>
              <div className="mt-6">
                <motion.span 
                  className="text-4xl font-extrabold text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  300만원
                </motion.span>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  "브랜드 노출형 패키지 전체 포함",
                  "행사 내부 부스",
                  "내부 이벤트 기획",
                  "전문 스태프 지원",
                  "결과 보고서 제공"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                문의하기
              </motion.a>
              <motion.a
                href="/docs/university-studio-proposal.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition-colors duration-300"
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