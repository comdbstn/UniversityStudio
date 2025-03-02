import { motion } from 'framer-motion';
import { Download, Send, Plus } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: '브랜드 노출형',
      price: '200만원',
      description: '기본적인 브랜드 노출과 홍보를 위한 패키지',
      features: [
        '일일호프 내부 노출',
        '포스터 노출',
        'SNS 노출',
        '에브리타임 노출',
        '기본 스태프 지원'
      ],
      recommended: false,
      icon: '🎯'
    },
    {
      name: '종합 마케팅형',
      price: '300만원',
      description: '전문적인 마케팅 솔루션을 위한 패키지',
      features: [
        '브랜드 노출형 패키지 전체 포함',
        '행사 내부 부스',
        '내부 이벤트 기획',
        '전문 스태프 지원',
        '결과 보고서 제공'
      ],
      recommended: true,
      icon: '💎'
    }
  ];

  const additionalOptions = [
    {
      name: '디지털 마케팅 강화',
      price: '30만원',
      features: [
        '에브리타임 홍보 추가 집행',
        '30개교 게시글 집행',
        '실시간 모니터링',
        '댓글 관리'
      ]
    },
    {
      name: 'SNS 이벤트 패키지',
      price: '50만원',
      features: [
        '스토리 릴플링 제작',
        '해시태그 이벤트',
        '인플루언서 섭외 (선택)',
        '라이브 방송 (선택)'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            일일호프 패키지 요금제
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            비즈니스 목표에 맞는 최적의 패키지를 선택하세요
          </p>
        </motion.div>

        {/* Main Packages */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ${
                pkg.recommended
                  ? 'border-2 border-blue-500 relative bg-white'
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-500 text-white shadow-lg">
                    추천
                  </span>
                </div>
              )}
              <div className="px-6 py-8">
                <div className="text-center">
                  <span className="text-5xl mb-4 block">{pkg.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase mb-4">
                  포함 사항
                </h4>
                <ul className="mt-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <motion.li
                      key={feature}
                      whileHover={{ x: 10 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 space-y-4">
                  <motion.a
                    href="http://pf.kakao.com/_DxnAZG/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>상담 신청하기</span>
                  </motion.a>
                  <motion.a
                    href="/docs/university-studio-proposal.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-100 text-gray-700 rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Download className="w-5 h-5" />
                    <span>제안서 다운로드</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">추가 옵션</h2>
            <p className="mt-4 text-gray-600">
              더 강력한 마케팅 효과를 위한 추가 옵션을 선택하세요
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {additionalOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{option.name}</h3>
                  <span className="text-lg font-semibold text-blue-600">{option.price}</span>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Plus className="h-5 w-5 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">
            맞춤형 패키지가 필요하신가요?
          </h2>
          <p className="text-blue-100 mb-8">
            귀사의 요구사항에 맞는 커스텀 패키지를 구성해드립니다
          </p>
          <div className="flex justify-center gap-4">
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
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-600 transition-colors duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              제안서 다운로드
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages; 