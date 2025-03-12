import { motion } from 'framer-motion';
import { Send, Download } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: '마케팅 솔루션',
      step: 'Step 01',
      description: '고객이 고민하는 근본적 문제 해결, 타겟의 관심사와 행동 패턴 기반의 맞춤형 마케팅 전략 설계 및 최적화',
      features: [
        '대학생 특화 마케팅 전략',
        '정교한 타겟팅과 높은 전환율',
        '낮은 CPC 단가로 효율적 운영',
        '브랜드 인지도 확보'
      ],
      image: '/images/university-promotion.jpg'
    },
    {
      title: '콘텐츠 솔루션',
      step: 'Step 02',
      description: '창의적이고 참신한 콘텐츠를 통해 코어 타겟에게 브랜드 임팩트 극대화, 타겟과 직접적인 상호작용 유도',
      features: [
        '창의적 콘텐츠 기획',
        '브랜드 스토리텔링',
        '높은 인게이지먼트 유도',
        '자발적 바이럴 확산'
      ],
      image: '/images/sampling-analysis.jpg'
    },
    {
      title: '미디어 솔루션',
      step: 'Step 03',
      description: 'MZ세대가 활발히 활용하는 미디어를 통해 브랜드 인지도 향상, 캠퍼스 내 이벤트·체험 마케팅으로 타겟과 직접 소통',
      features: [
        '대학생 커뮤니티 활용',
        '에브리타임 마케팅',
        'SNS 인플루언서 협업',
        '캠퍼스 내 직접 노출'
      ],
      image: '/images/experience-marketing.jpg'
    }
  ];

  const processSteps = [
    {
      title: 'D-30: 계약 & 기획',
      description: '전략적인 마케팅 계획 수립',
      items: [
        '일정/장소 확정',
        '컨셉 기획 회의',
        '예산 설정',
        '세부 프로그램 구성'
      ],
      image: '/images/planning.jpg'
    },
    {
      title: 'D-14: 제작 & 홍보',
      description: '효과적인 홍보물 제작',
      items: [
        '홍보물 디자인',
        'SNS 콘텐츠 제작',
        '현장 설치물 제작',
        '기념품 제작'
      ],
      image: '/images/promotion.jpg'
    },
    {
      title: 'D-Day: 실행 & 피드백',
      description: '현장 운영 및 관리',
      items: [
        '전문 인력 배치',
        '실시간 모니터링',
        '참가자 관리',
        '긴급 상황 대응'
      ],
      image: '/images/execution.jpg'
    },
    {
      title: 'D+7: 분석 & 보고',
      description: '성과 분석 및 보고서 작성',
      items: [
        'SNS 확산율 분석',
        '브랜드 노출 효과',
        '참가자 피드백 평가',
        '성과 리포트 제공'
      ],
      image: '/images/analysis.jpg'
    }
  ];

  const benefits = [
    {
      title: '브랜드 인지도와 체험 기회 확보',
      description: '일평균 800명의 대학생이 방문하는 공간에서 제품 및 서비스를 홍보하고 체험 기회 제공',
      icon: '🎯'
    },
    {
      title: '브랜드와의 상호작용 가능한 강력한 브랜드 경험',
      description: '단순 노출이 아닌 체험 기반 타겟팅으로 감각과 연결된 브랜드 경험 제공',
      icon: '✨'
    },
    {
      title: '자발적 바이럴 효과',
      description: '대학생 커뮤니티와 SNS를 통한 입소문 효과로 ROI 극대화',
      icon: '📱'
    },
    {
      title: '구매 전환율 증가',
      description: '브랜드 경험을 통해 구매 과정에서 해당 브랜드가 먼저 떠오르도록 만드는 Top of Mind 효과',
      icon: '💰'
    }
  ];

  const results = [
    { title: '직접 참여', value: '800+', description: '명' },
    { title: 'SNS 총 도달', value: '10,000+', description: '명' },
    { title: '해시태그 노출', value: '5,000+', description: '회' },
    { title: '브랜드 체험 시간', value: '15-20', description: '분' },
    { title: '콘텐츠 공유', value: '300+', description: '회' },
    { title: '구매 전환율', value: '25%+', description: '' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/university-promotion.jpg"
            alt="University Marketing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              유니버시티 스튜디오 서비스
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              MZ 세대, 특히 대학생을 타겟으로 한 종합 마케팅 솔루션
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              서비스 개요
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              유니버시티 스튜디오는 MZ 세대의 직접적인 접점을 제공하는 마케팅 솔루션으로, 비즈니스 목표와 브랜드 특성을 반영한 전략적인 접근으로 광고 목표를 달성합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              종합 마케팅 솔루션
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              비즈니스 목표와 브랜드 특성을 반영한 전략적 접근
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } gap-12`}
              >
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.step}
                    </div>
                  </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-4 text-lg text-gray-600"
                  >
                    {service.description}
                  </motion.p>
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-8 space-y-4"
                  >
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        whileHover={{ x: 10 }}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <svg
                          className="h-6 w-6 text-blue-500 flex-shrink-0"
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
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              기대 효과
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              일일호프 패키지를 통해 얻을 수 있는 정량적 성과
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center"
              >
                <h3 className="text-sm font-semibold text-gray-600">{result.title}</h3>
                <p className="mt-2 text-3xl font-extrabold text-blue-600">{result.value}</p>
                <p className="text-gray-500 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              진행 프로세스
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              체계적인 프로세스로 성공적인 마케팅을 지원합니다
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {step.items.map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{ x: 10 }}
                          className="flex items-center text-gray-600"
                        >
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
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
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
        className="relative bg-blue-600 py-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/experience-marketing.jpg"
            alt="Marketing Experience"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-blue-100 mb-8">
              상담을 통해 귀사에 맞는 최적의 마케팅 전략을 제안해드립니다
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services; 