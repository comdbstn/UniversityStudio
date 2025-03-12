import { motion } from 'framer-motion';
import { Download, Send, Plus } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: '패키지 A',
      price: '300만원',
      description: '현장 프로모션 중심의 기본 패키지',
      features: [
        '브랜딩 요소 (배너, 포스터, 메뉴판 등)',
        '공간 활용 (테이블 세팅, 부스 등)',
        '운영 지원 (스태프, 이벤트 진행)',
        '기본 SNS 홍보',
        '결과 보고서 제공'
      ],
      recommended: false,
      icon: '🎯'
    },
    {
      name: '패키지 B',
      price: '500만원',
      description: '현장 프로모션 + 디지털 마케팅 통합 패키지',
      features: [
        '패키지 A의 모든 혜택 포함',
        'SNS 마케팅 (인스타그램, 페이스북)',
        '콘텐츠 마케팅 (영상, 사진 제작)',
        '인플루언서 협업',
        '대학생 커뮤니티 홍보'
      ],
      recommended: true,
      icon: '💎'
    }
  ];

  const additionalOptions = [
    {
      name: '디지털 캠페인 강화',
      price: '100만원',
      features: [
        '에브리타임 마케팅',
        '트래픽 확대',
        '맷돌 관리',
        '실시간 모니터링'
      ]
    },
    {
      name: '대학교 인플루언서 마케팅',
      price: '협의',
      features: [
        '대학교 인플루언서 섭외',
        '콘텐츠 기획 및 제작',
        '인스타그램 스토리/피드 포스팅',
        '결과 리포트'
      ]
    },
    {
      name: '대학교 축제 마케팅',
      price: '협의',
      features: [
        '축제 부스 운영',
        '이벤트 기획 및 진행',
        '샘플링 및 체험 마케팅',
        '현장 스태프 지원'
      ]
    },
    {
      name: '푸드트럭 마케팅',
      price: '협의',
      features: [
        '푸드트럭 디자인 및 운영',
        '메뉴 개발 및 제공',
        '브랜드 체험 공간 구성',
        '현장 이벤트 진행'
      ]
    }
  ];

  const differentiationPoints = [
    {
      title: '전략적 기획과 데이터 기반 운영',
      description: '단순 공간 제공이 아닌 브랜드의 타겟 소비층에 최적화된 맞춤형 기획 진행',
      icon: '📊'
    },
    {
      title: '대학교 커뮤니티 기반 온·오프라인 확산',
      description: '자발적 확산 구조 설계로 효과적인 바이럴 마케팅 실현',
      icon: '🌐'
    },
    {
      title: '전문 운영팀과 즉각적 위기 대응 시스템',
      description: '10년 이상 경력의 대학생 타겟 전문 마케터들이 안전한 마케팅 환경 제공',
      icon: '🛡️'
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

        {/* Differentiation Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">차별화 포인트</h2>
            <p className="mt-4 text-gray-600">
              유니버시티 스튜디오만의 특별한 강점
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {differentiationPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4 mx-auto">{point.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
                <p className="mt-2 text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

        {/* Target Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">타겟 분석</h2>
            <p className="mt-4 text-gray-600">
              대학생 타겟의 특성과 소비 행태
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">인구통계학적 특성</h3>
              <ul className="space-y-3">
                {[
                  '대학교 1~4학년 재학생',
                  '2025 MZ세대가 주요 소비층',
                  '남녀 비율은 남자 55% / 여자 45%'
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">소비 행태</h3>
              <ul className="space-y-3">
                {[
                  '가성비 추구',
                  'SNS 인플루언서 영향력',
                  '트렌드 민감성',
                  '체험형 마케팅 선호',
                  'SNS 공유 욕구',
                  '온오프라인 채널 동시 활용'
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="http://pf.kakao.com/_DxnAZG/chat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              상담 문의하기
            </motion.a>
            <motion.a
              href="/docs/university-studio-proposal.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
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