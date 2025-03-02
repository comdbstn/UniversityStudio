import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">UniversityStudio</h3>
            <p className="text-gray-400 mb-4">
              대학생 마케팅의 새로운 기준을 제시합니다
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#E1306C' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#4267B2' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  서비스
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-white transition-colors">
                  패키지
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>010-1234-5678</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@universitystudio.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>서울특별시 강남구</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
            <p className="text-gray-400 mb-4">
              최신 소식과 프로모션 정보를 받아보세요
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                구독하기
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2024 UniversityStudio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 