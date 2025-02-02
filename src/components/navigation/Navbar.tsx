import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
                            University Studio
                        </Link>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/service" className="text-gray-600 hover:text-blue-600 transition-colors">
                            서비스
                        </Link>
                        <a 
                            href="https://sclu.io/share/bulk/file/82fc833911752e32"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            제안서
                        </a>
                        <motion.a
                            href="https://6nxuuec1a2p.typeform.com/to/V4bKkFYO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            상담 신청
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 