import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-black border-t border-purple-500/10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">University Studio</h3>
                        <p className="text-gray-400">
                            대학생 타겟 마케팅의<br />새로운 기준을 제시합니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">서비스</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/service" className="text-gray-400 hover:text-white transition-colors">
                                    서비스 소개
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="https://sclu.io/share/bulk/file/82fc833911752e32"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    제안서 다운로드
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">문의</h4>
                        <ul className="space-y-2">
                            <li>
                                <a 
                                    href="https://6nxuuec1a2p.typeform.com/to/V4bKkFYO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    상담 신청
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="tel:+821057000623"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Tel: +82 10-5700-0623
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:director@freeyourmind.corp"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Email: director@freeyourmind.corp
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">주소</h4>
                        <p className="text-gray-400">
                            서울 성동구 뚝섬로13길 38<br />
                            KT&G상상플래닛
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-purple-500/10 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} University Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 