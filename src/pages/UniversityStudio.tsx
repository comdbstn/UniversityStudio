import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Target, BarChart3, MessageCircle } from "lucide-react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState, useRef } from "react";

const UniversityStudio = () => {
    // Motion hooks for gradient effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Initialize window dimensions safely
    const [windowDimensions, setWindowDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1920,
        height: typeof window !== 'undefined' ? window.innerHeight : 1080
    });

    // Update window dimensions on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    }, []);

    const gradientX = useTransform(mouseX, [0, windowDimensions.width], [0, 100]);
    const gradientY = useTransform(mouseY, [0, windowDimensions.height], [0, 100]);
    const background = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(59,130,246,0.2), rgba(250,204,21,0.1), transparent 70%)`;

    // Stats animation
    const [stats, setStats] = useState({
        years: 0,
        items: 0,
        revenue: 0
    });

    useEffect(() => {
        const animateStats = () => {
            const duration = 2000; // 2초 동안 애니메이션
            const startTime = Date.now();

            const animate = () => {
                const currentTime = Date.now();
                const progress = Math.min((currentTime - startTime) / duration, 1);

                setStats({
                    years: Math.floor(progress * 10),
                    items: Math.floor(progress * 50),
                    revenue: Math.floor(progress * 100000000)
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        animateStats();
    }, []);

    // Mouse move handler for gradient effect
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    // Portfolio scroll animation
    const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    // Portfolio images array (30 images)
    const portfolioImages = Array.from({ length: 30 }, (_, i) => `/images/${i + 1}${i < 10 ? '.png' : i < 15 ? '.jpg' : '.png'}`);
    const row1Images = portfolioImages.slice(0, 15);
    const row2Images = portfolioImages.slice(15);

    return (
        <>
            <Analytics />
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-yellow-50 text-gray-800" onMouseMove={handleMouseMove}>
                {/* 히어로 섹션 */}
                <section className="relative min-h-screen flex items-center pt-20">
                    <motion.div 
                        className="absolute inset-0" 
                        style={{ background }}
                    />
                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-yellow-400 text-white text-sm mb-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                University Studio
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-400 bg-clip-text text-transparent"
                            >
                                대학생 타겟 마케팅,<br />
                                "압도적 업계 1위"
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-600 mb-12"
                            >
                                어떤 상품이든 업계 최고의 KPI를 도출하는<br />
                                혁신적인 마케팅 솔루션을 제공합니다
                            </motion.p>

                            {/* 통계 섹션 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                                {[
                                    {
                                        value: stats.years,
                                        suffix: "+",
                                        label: "YEARS",
                                        sublabel: "마케팅 경력"
                                    },
                                    {
                                        value: stats.items,
                                        suffix: "+",
                                        label: "ITEMS",
                                        sublabel: "프로젝트 마케팅"
                                    },
                                    {
                                        value: stats.revenue.toLocaleString(),
                                        suffix: "+",
                                        label: "REVENUE",
                                        sublabel: "연 매출"
                                    }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.2 }}
                                        className="relative group"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-yellow-300/30 to-blue-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="relative p-8 rounded-2xl bg-white/80 border border-blue-200 shadow-lg backdrop-blur-sm transform transition-all duration-300 group-hover:shadow-xl">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                {stat.value}{stat.suffix}
                                            </div>
                                            <div className="text-lg text-gray-700">{stat.label}</div>
                                            <div className="text-sm text-gray-500">{stat.sublabel}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA 버튼 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            >
                                <motion.a
                                    href="https://sclu.io/share/bulk/file/82fc833911752e32"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        제안서 보기
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://6nxuuec1a2p.typeform.com/to/V4bKkFYO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        상담 신청
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 추천서 섹션 */}
                <section className="py-24 relative bg-gradient-to-b from-yellow-50 via-white to-blue-50">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
                        >
                            추천서
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    text: "올해도 뛰어난 마케팅과 실행력으로 자사에서 우수한 성과를 만들어낼 수 있게 도와주어서 협업을 희망합니다.",
                                    author: "S기업(마케팅 담당)"
                                },
                                {
                                    text: "신뢰성 있는 비지니스 파트너로, 성과 지향적인 협업을 하고 있어 상호 발전을 이루고있습니다.",
                                    author: "N기업(HR 담당)"
                                },
                                {
                                    text: "마케팅 역량개발에 지속적인 성과를 이루어내어, 향후 더 많은 프로젝트를 원합니다.",
                                    author: "K기업(대표이사)"
                                }
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative group"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-yellow-300/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-blue-100 backdrop-blur-sm">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-4">{testimonial.text}</p>
                                        <p className="text-blue-600 italic">- {testimonial.author}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 특징 섹션 */}
                <section className="py-24 relative bg-gradient-to-b from-blue-50 via-white to-yellow-50">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-16"
                        >
                            무엇이 다른가요?
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "MZ세대와의 긴밀한 관계",
                                    description: "브랜드 가치를 극대화하는 MZ세대 맞춤형 마케팅 전략",
                                    icon: <Users className="w-8 h-8" />
                                },
                                {
                                    title: "비즈니스 목표 달성",
                                    description: "고객이 추구하는 비즈니스 목표를 함께 달성하는 파트너십",
                                    icon: <Target className="w-8 h-8" />
                                },
                                {
                                    title: "정교한 타겟팅",
                                    description: "대학생+취준생 특화 타겟팅으로 높은 전환율 달성",
                                    icon: <BarChart3 className="w-8 h-8" />
                                },
                                {
                                    title: "높은 고객 만족도",
                                    description: "기존 고객들의 리뷰로 증명되는 브랜드 가치",
                                    icon: <MessageCircle className="w-8 h-8" />
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-yellow-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative p-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
                                        <div className="text-blue-400 mb-4">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 포트폴리오 섹션 */}
                <section className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 via-white to-blue-50">
                    <div className="container mx-auto px-4 mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
                        >
                            포트폴리오
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center text-gray-600 mb-12"
                        >
                            다양한 프로젝트의 성공 사례를 확인해보세요
                        </motion.p>
                    </div>

                    <div 
                        className="relative w-full overflow-hidden px-4"
                        onMouseEnter={() => setIsPortfolioHovered(true)}
                        onMouseLeave={() => setIsPortfolioHovered(false)}
                    >
                        {/* First Row */}
                        <motion.div
                            ref={row1Ref}
                            className="flex gap-6 mb-6"
                            animate={{
                                x: isPortfolioHovered ? [0, -2400] : [0, -2400],
                            }}
                            transition={{
                                x: {
                                    duration: isPortfolioHovered ? 20 : 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* First set of images */}
                            {row1Images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex-none w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Portfolio ${index + 1}`}
                                        className="w-full h-full object-contain bg-white"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-bold">Project {index + 1}</h3>
                                            <p className="text-sm">마케팅 캠페인</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {row1Images.map((src, index) => (
                                <motion.div
                                    key={`duplicate-${index}`}
                                    className="relative flex-none w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Portfolio ${index + 1}`}
                                        className="w-full h-full object-contain bg-white"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-bold">Project {index + 1}</h3>
                                            <p className="text-sm">마케팅 캠페인</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Second Row */}
                        <motion.div
                            ref={row2Ref}
                            className="flex gap-6"
                            animate={{
                                x: isPortfolioHovered ? [-2400, 0] : [-2400, 0],
                            }}
                            transition={{
                                x: {
                                    duration: isPortfolioHovered ? 20 : 40,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Second set of images */}
                            {row2Images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex-none w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Portfolio ${index + 16}`}
                                        className="w-full h-full object-contain bg-white"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-bold">Project {index + 16}</h3>
                                            <p className="text-sm">마케팅 캠페인</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {row2Images.map((src, index) => (
                                <motion.div
                                    key={`duplicate-${index}`}
                                    className="relative flex-none w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Portfolio ${index + 16}`}
                                        className="w-full h-full object-contain bg-white"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="text-lg font-bold">Project {index + 16}</h3>
                                            <p className="text-sm">마케팅 캠페인</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 연락처 섹션 */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold mb-8">고민해서 뭐하나요?</h2>
                            <p className="text-gray-400 mb-8">
                                아래 제안서 링크를 통해 저희 서비스를 확인해보세요
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <a
                                    href="https://sclu.io/share/bulk/file/82fc833911752e32"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-lg w-full max-w-md"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center justify-center">
                                        제안서 다운로드
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                                <div className="text-gray-400 space-y-2 mt-8">
                                    <p>Corp : 서울 성동구 뚝섬로13길 38 KT&G상상플래닛</p>
                                    <p>Tel : +82 10-5700-0623</p>
                                    <p>e-Mail : director@freeyourmind.corp</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default UniversityStudio; 
