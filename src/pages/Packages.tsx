const Packages = () => {
  const packages = [
    {
      name: '스타터 패키지',
      price: '1,500,000원/월',
      description: '성장하는 스타트업을 위한 기본 마케팅 패키지',
      features: [
        '소셜미디어 마케팅 운영',
        '기본 SEO 최적화',
        '월간 리포트 제공',
        '기본 콘텐츠 제작 (월 4회)'
      ],
      recommended: false
    },
    {
      name: '비즈니스 패키지',
      price: '3,000,000원/월',
      description: '비즈니스 성장을 위한 통합 마케팅 솔루션',
      features: [
        '소셜미디어 마케팅 운영',
        '심화 SEO 최적화',
        '퍼포먼스 마케팅 운영',
        '콘텐츠 제작 (월 8회)',
        '브랜드 컨설팅',
        '주간 리포트 제공'
      ],
      recommended: true
    },
    {
      name: '엔터프라이즈 패키지',
      price: '5,000,000원/월',
      description: '대규모 기업을 위한 프리미엄 마케팅 솔루션',
      features: [
        '통합 마케팅 전략 수립',
        '소셜미디어 마케팅 운영',
        '프리미엄 SEO 최적화',
        '퍼포먼스 마케팅 운영',
        '프리미엄 콘텐츠 제작 (무제한)',
        '브랜드 컨설팅',
        '실시간 데이터 대시보드'
      ],
      recommended: false
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            마케팅 패키지 상품
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            비즈니스 규모와 목표에 맞는 최적의 패키지를 선택하세요
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                pkg.recommended
                  ? 'border-2 border-blue-500 transform scale-105'
                  : 'border border-gray-200'
              }`}
            >
              <div className="px-6 py-8 bg-white">
                {pkg.recommended && (
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                    추천
                  </span>
                )}
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 text-gray-600">{pkg.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {pkg.price}
                    </span>
                  </p>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  포함 사항
                </h4>
                <ul className="mt-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
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
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                    상담 신청하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages; 