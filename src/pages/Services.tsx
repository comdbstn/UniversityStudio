const Services = () => {
  const services = [
    {
      title: '디지털 마케팅',
      description: '온라인 채널을 통한 효과적인 마케팅 전략 수립 및 실행',
      features: [
        '소셜미디어 마케팅',
        '검색엔진 최적화(SEO)',
        '콘텐츠 마케팅',
        '퍼포먼스 마케팅'
      ],
      image: '/images/digital.jpg'
    },
    {
      title: '브랜드 마케팅',
      description: '강력한 브랜드 아이덴티티 구축 및 브랜딩 전략',
      features: [
        '브랜드 아이덴티티 개발',
        '브랜드 스토리텔링',
        '브랜드 경험 디자인',
        '브랜드 포지셔닝'
      ],
      image: '/images/brand.jpg'
    },
    {
      title: '통합 마케팅 솔루션',
      description: '온/오프라인을 아우르는 통합 마케팅 전략 및 실행',
      features: [
        '마케팅 전략 수립',
        '크리에이티브 제작',
        '미디어 플래닝',
        '성과 분석 및 최적화'
      ],
      image: '/images/integrated.jpg'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            전문적인 마케팅 서비스
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            UniversityStudio만의 차별화된 마케팅 솔루션을 경험해보세요
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-6 w-6 text-blue-500"
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
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 