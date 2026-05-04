'use client';

import React from 'react';
import Marquee from "react-fast-marquee";
import { Star, User, Quote } from 'lucide-react';

const CustomerReview = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            review: "Amazing quality products! The summer collection is absolutely gorgeous. Fast shipping too!",
            date: "2 days ago",
            avatar: "SJ"
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 5,
            review: "Best online shopping experience. Customer service is super helpful and responsive.",
            date: "3 days ago",
            avatar: "MC"
        },
        {
            id: 3,
            name: "Emma Watson",
            rating: 4,
            review: "Great prices and excellent quality. Will definitely shop here again!",
            date: "5 days ago",
            avatar: "EW"
        },
        {
            id: 4,
            name: "David Kim",
            rating: 5,
            review: "The flash sale deals are incredible! Got my order within 2 days.",
            date: "1 week ago",
            avatar: "DK"
        },
        {
            id: 5,
            name: "Lisa Anderson",
            rating: 5,
            review: "Love the secure payment options. Felt very safe shopping here.",
            date: "1 week ago",
            avatar: "LA"
        },
        {
            id: 6,
            name: "James Wilson",
            rating: 4,
            review: "Good product range and reasonable prices. The buy 1 get 1 offer was great!",
            date: "2 weeks ago",
            avatar: "JW"
        }
    ];

    return (
        <section className="w-10/12 mx-auto py-12 md:py-16 bg-linear-to-b from-white to-amber-50/20 overflow-hidden">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
                    <Star size={16} className="fill-white" />
                    <span>Customer Reviews</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    <span className="text-sky-600">What Our</span>
                    <span className="text-amber-600"> Customers Say</span>
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-sky-500 to-amber-500 mx-auto mt-3 rounded-full"></div>
                <p className="text-stone-500 mt-3 max-w-2xl mx-auto">
                    Join thousands of happy customers who trust SunCart for their shopping needs
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
                <Marquee speed={50} pauseOnHover gradient={false} direction="right" className="py-4">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="mx-4 w-80 bg-white rounded-xl shadow-md p-5 border border-sky-100 hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-linear-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-white font-semibold">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-800">{review.name}</h4>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={12}
                                                className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Quote size={14} className="text-sky-400 mb-1" />
                            <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">{review.review}</p>
                            <p className="text-stone-400 text-xs mt-2">{review.date}</p>
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
                <Marquee speed={50} gradient={false} pauseOnHover className="py-4">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="mx-4 w-80 bg-white rounded-xl shadow-md p-5 border border-amber-100 hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-linear-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white font-semibold">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-800">{review.name}</h4>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={12}
                                                className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Quote size={14} className="text-amber-400 mb-1" />
                            <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">{review.review}</p>
                            <p className="text-stone-400 text-xs mt-2">{review.date}</p>
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-10 px-4">
                <div className="flex items-center gap-2 text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                        <Star size={14} className="text-sky-500" />
                    </div>
                    <span className="text-sm">4.8/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <User size={14} className="text-amber-500" />
                    </div>
                    <span className="text-sm">10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                        <Quote size={14} className="text-sky-500" />
                    </div>
                    <span className="text-sm">Verified Reviews</span>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;