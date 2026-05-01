'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-amber-50/90 backdrop-blur-sm border-t border-sky-200 mt-auto">
            <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Contact Info Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-sky-600 mb-4 flex items-center gap-2">
                            <FaEnvelope className="text-amber-500" />
                            Contact Info
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-amber-800 hover:text-sky-500 transition group">
                                <FaEnvelope className="text-sky-500 group-hover:text-sky-600" />
                                <a href="mailto:info@suncart.com" className="hover:text-sky-500">
                                    info@suncart.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-amber-800 hover:text-sky-500 transition group">
                                <FaPhone className="text-sky-500 group-hover:text-sky-600" />
                                <a href="tel:+1234567890" className="hover:text-sky-500">
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-amber-800">
                                <FaMapMarkerAlt className="text-amber-500" />
                                <span>123 Shopping Street, NYC 10001</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-sky-600 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white p-3 rounded-full transition duration-200 hover:scale-110 shadow-md"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white p-3 rounded-full transition duration-200 hover:scale-110 shadow-md"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white p-3 rounded-full transition duration-200 hover:scale-110 shadow-md"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white p-3 rounded-full transition duration-200 hover:scale-110 shadow-md"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                        <div className="mt-6 space-y-2">
                            <p className="text-amber-800 flex items-center gap-2">
                                <span className="text-sky-500 font-bold">✓</span> Follow us for updates
                            </p>
                            <p className="text-amber-800 flex items-center gap-2">
                                <span className="text-amber-500 font-bold">✓</span> Get exclusive offers
                            </p>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-sky-600 mb-4">Legal</h3>
                        <div className="flex flex-col space-y-3">
                            <Link 
                                href="/privacy-policy" 
                                className="text-amber-800 hover:text-sky-500 transition flex items-center gap-2 group"
                            >
                                <span className="text-amber-500 group-hover:text-amber-600">→</span>
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/terms-of-service" 
                                className="text-amber-800 hover:text-sky-500 transition flex items-center gap-2 group"
                            >
                                <span className="text-amber-500 group-hover:text-amber-600">→</span>
                                Terms of Service
                            </Link>
                            <Link 
                                href="/return-policy" 
                                className="text-amber-800 hover:text-sky-500 transition flex items-center gap-2 group"
                            >
                                <span className="text-amber-500 group-hover:text-amber-600">→</span>
                                Return Policy
                            </Link>
                            <Link 
                                href="/shipping-info" 
                                className="text-amber-800 hover:text-sky-500 transition flex items-center gap-2 group"
                            >
                                <span className="text-amber-500 group-hover:text-amber-600">→</span>
                                Shipping Information
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-sky-200 mt-10 pt-6 text-center">
                    <p className="text-amber-700 text-sm">
                        © {new Date().getFullYear()} Suncart. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;