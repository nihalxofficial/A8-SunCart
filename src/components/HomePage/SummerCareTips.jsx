import React from 'react';
import Link from 'next/link';
import {
    Droplet,
    Sun,
    Shield,
    Heart,
    Coffee,
    Apple,
    Battery,
    ArrowRight,
    Sparkles,
    Thermometer,
    Wind,
    Clock
} from 'lucide-react';

const SummerCareTips = () => {
    const tips = [
        {
            id: 1,
            title: "Stay Hydrated",
            description: "Drink at least 8-10 glasses of water daily to keep your body cool and skin glowing.",
            icon: Droplet,
            tip: "Pro tip: Add lemon or mint for extra refreshment!",
            color: "from-sky-500 to-cyan-400",
            bgColor: "bg-sky-50",
            borderColor: "border-sky-200"
        },
        {
            id: 2,
            title: "Sun Protection",
            description: "Apply SPF 30+ sunscreen 15 minutes before going out. Reapply every 2 hours.",
            icon: Sun,
            tip: "Don't forget your ears, neck, and hands!",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200"
        },
        {
            id: 3,
            title: "Skincare Routine",
            description: "Use lightweight, water-based products. Cleanse twice daily and exfoliate weekly.",
            icon: Sparkles,
            tip: "Switch to gel-based moisturizers in summer",
            color: "from-rose-500 to-pink-500",
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200"
        },
        {
            id: 4,
            title: "Cool Showers",
            description: "Take lukewarm showers to prevent skin dryness and maintain natural oils.",
            icon: Thermometer,
            tip: "Avoid hot water - it strips natural oils",
            color: "from-blue-500 to-sky-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            id: 5,
            title: "Eat Light",
            description: "Include water-rich fruits like watermelon, cucumber, and oranges in your diet.",
            icon: Apple,
            tip: "Seasonal fruits are best for hydration",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-200"
        },
        {
            id: 6,
            title: "Rest Well",
            description: "Get 7-8 hours of sleep. Use breathable cotton sheets and keep room cool.",
            icon: Battery,
            tip: "A cool shower before bed helps sleep better",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        }
    ];

    const quickTips = [
        { icon: Wind, text: "Wear light-colored, breathable fabrics", color: "text-sky-600" },
        { icon: Clock, text: "Avoid going out between 12 PM - 4 PM", color: "text-amber-600" },
        { icon: Shield, text: "Wear sunglasses & a wide hat", color: "text-emerald-600" },
        { icon: Heart, text: "Take breaks in shaded areas", color: "text-rose-600" }
    ];

    return (
        <section className="py-12 md:py-16 bg-linear-to-b from-amber-50/30 to-white">
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
                        <Heart size={16} className="fill-white" />
                        <span>Summer Wellness</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-sky-600">Summer</span>
                        <span className="text-amber-600"> Care Tips</span>
                    </h2>
                    <p className="text-stone-600 mt-3 max-w-2xl mx-auto">
                        Stay healthy, hydrated, and glowing with these essential summer care tips
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {tips.map((tip) => {
                        const IconComponent = tip.icon;
                        return (
                            <div
                                key={tip.id}
                                className={`${tip.bgColor} border ${tip.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-full bg-linear-to-r ${tip.color} flex items-center justify-center shadow-md group-hover:scale-110 transition`}>
                                        <IconComponent size={22} className="text-white" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-stone-800 mb-2">
                                    {tip.title}
                                </h3>

                                <p className="text-stone-600 text-sm mb-3">
                                    {tip.description}
                                </p>

                                {/* Pro Tip */}
                                <div className="mt-4 pt-3 border-t border-dashed border-stone-200">
                                    <p className="text-xs font-semibold text-amber-600 mb-1">💡 Pro Tip</p>
                                    <p className="text-stone-500 text-xs">
                                        {tip.tip}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-linear-to-r from-sky-600 to-cyan-500 rounded-2xl p-6 md:p-8 mb-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                <Sun size={28} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Quick Summer Tips</h3>
                                <p className="text-white/80 text-sm">Essential reminders for hot days</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                            {quickTips.map((qTip, index) => {
                                const IconComponent = qTip.icon;
                                return (
                                    <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                                        <IconComponent size={16} className="text-white" />
                                        <span className="text-white text-sm">{qTip.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-md border border-sky-100 flex items-center gap-3">
                        <div className="bg-sky-100 rounded-full p-2">
                            <Droplet size={24} className="text-sky-600" />
                        </div>
                        <div>
                            <p className="text-xs text-stone-500">Daily Water Goal</p>
                            <p className="text-lg font-bold text-sky-600">2-3 Liters</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-md border border-amber-100 flex items-center gap-3">
                        <div className="bg-amber-100 rounded-full p-2">
                            <Coffee size={24} className="text-amber-600" />
                        </div>
                        <div>
                            <p className="text-xs text-stone-500">Limit Caffeine</p>
                            <p className="text-lg font-bold text-amber-600">Max 1-2 cups/day</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-md border border-emerald-100 flex items-center gap-3">
                        <div className="bg-emerald-100 rounded-full p-2">
                            <Apple size={24} className="text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-xs text-stone-500">Water-Rich Foods</p>
                            <p className="text-lg font-bold text-emerald-600">5+ servings/day</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/products?category=skincare"
                        className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl group"
                    >
                        Shop Summer Essentials
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SummerCareTips;