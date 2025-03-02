import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">비즈니스 성장의 파트너</span>
              <span className="block text-blue-200">UniversityStudio</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              전략적인 마케팅 솔루션으로 당신의 브랜드를 성장시켜 드립니다
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  서비스 알아보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              최고의 마케팅 솔루션
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              데이터 기반의 전략적인 마케팅으로 귀사의 성공을 이끌어냅니다
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                1
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">맞춤형 전략 수립</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                브랜드 분석과 시장 조사를 통한 최적화된 마케팅 전략을 제공합니다
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                2
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">통합 마케팅 서비스</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                온/오프라인을 아우르는 통합 마케팅 솔루션을 제공합니다
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                3
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">성과 분석</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                실시간 데이터 분석으로 마케팅 효과를 극대화합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 