import { motion } from 'framer-motion';
import { Send, Download } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: '대학생 타깃 제품 및 서비스 홍보',
      description: '정확한 MZ 대학생으로 필터링된 방문객과 프로모션에 반응도가 높은 타깃을 대상으로 효과적인 홍보를 진행합니다.',
      features: [
        '일평균 800명의 MZ 대학생 방문',
        '프로모션 및 이벤트 높은 반응도',
        '이벤트 병행을 통한 바이럴 확산',
        '브랜드 친숙도 형성'
      ],
      image: '/images/university-promotion.jpg'
    },
    {
      title: '실질적인 대규모 샘플링',
      description: '단순 방문객이 아닌, 제품 반응을 빠르게 검증할 수 있는 실험군을 통해 데이터를 수집하고 분석합니다.',
      features: [
        '제품 반응 실시간 검증',
        '측정적 데이터 수집',
        '마케팅 전략 수정 용이',
        '타깃 피드백 수집'
      ],
      image: '/images/sampling-analysis.jpg'
    },
    {
      title: '체험 기반 타깃팅',
      description: '음료, 주류, F&B, 뷰티, IT 등 다양한 제품을 자연스럽게 체험할 수 있는 환경을 제공합니다.',
      features: [
        '자연스러운 제품 체험',
        '브랜드 스토리텔링',
        '제품 사용 경험 제공',
        '구매 전환율 증가'
      ],
      image: '/images/experience-marketing.jpg'
    }
  ];

  const processSteps = [
    {
      title: 'D-30: 계약 & 기획',
      items: [
        '일정/장소 확정',
        '컨셉 기획 회의',
        '예산 설정',
        '세부 프로그램 구성'
      ]
    },
    {
      title: 'D-14: 제작 & 홍보',
      items: [
        '홍보물 디자인',
        'SNS 콘텐츠 제작',
        '현장 설치물 제작',
        '기념품 제작'
      ]
    },
    {
      title: 'D-Day: 실행 & 피드백',
      items: [
        '전문 인력 배치',
        '실시간 모니터링',
        '참가자 관리',
        '긴급 상황 대응'
      ]
    },
    {
      title: 'D+7: 분석 & 보고',
      items: [
        'SNS 확산율 분석',
        '브랜드 노출 효과',
        '참가자 피드백 평가',
        '성과 리포트 제공'
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
            일일호프 패키지 서비스
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            MZ 세대와의 직접적인 접점을 제공하는 효과적인 마케팅 솔루션
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              진행 프로세스
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              체계적인 프로세스로 성공적인 마케팅을 지원합니다
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-blue-600 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-blue-100 mb-8">
            상담을 통해 귀사에 맞는 최적의 마케팅 전략을 제안해드립니다
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition-colors duration-300"
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

export default Services; 