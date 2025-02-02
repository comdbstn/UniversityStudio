import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="text-2xl font-bold text-white">
                        University Studio
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link to="/service" className="text-gray-300 hover:text-white transition-colors">
                            서비스
                        </Link>
                        <a 
                            href="https://sclu.io/share/bulk/file/82fc833911752e32"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            제안서
                        </a>
                        <a
                            href="https://6nxuuec1a2p.typeform.com/to/V4bKkFYO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            상담 신청
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 