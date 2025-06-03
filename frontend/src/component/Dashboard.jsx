import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        // Protect the dashboard route
        if (!user) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <nav className="bg-black p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-white">Welcome, {user?.name}</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto py-8 px-4">
                <h2 className="text-white text-3xl font-bold mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sample content cards */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="aspect-video bg-gray-700"></div>
                            <div className="p-4">
                                <h3 className="text-white text-xl font-semibold mb-2">Movie Title {item}</h3>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
