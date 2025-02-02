import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowRight, Star, Users, Target, BarChart3, MessageCircle } from "lucide-react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

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
    const background = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(59,130,246,0.15), transparent 70%)`;

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

    return (
        <>
            <Analytics />
            <Navbar />
            <main className="min-h-screen bg-black text-white" onMouseMove={handleMouseMove}>
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
                                className="inline-block px-6 py-3 bg-blue-500/10 rounded-full text-blue-400 text-sm mb-8 border border-blue-500/20 backdrop-blur-sm"
                            >
                                University Studio
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-500 to-yellow-500 bg-clip-text text-transparent"
                            >
                                대학생 타겟 마케팅,<br />
                                "압도적 업계 1위"
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-400 mb-12"
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
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-yellow-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="relative p-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
                                            <div className="text-3xl font-bold text-blue-400 mb-2">
                                                {stat.value}{stat.suffix}
                                            </div>
                                            <div className="text-lg text-gray-400">{stat.label}</div>
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
                                <a
                                    href="https://sclu.io/share/bulk/file/82fc833911752e32"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white rounded-xl font-bold text-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        제안서 보기
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                                <a
                                    href="https://6nxuuec1a2p.typeform.com/to/V4bKkFYO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 border-2 border-blue-600/50 text-blue-400 rounded-xl font-bold text-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        상담 신청
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 추천서 섹션 */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-center mb-16"
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
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-yellow-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative p-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-4">{testimonial.text}</p>
                                        <p className="text-blue-400 italic">- {testimonial.author}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 특징 섹션 */}
                <section className="py-24 relative">
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
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white rounded-xl font-bold text-lg w-full max-w-md"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
