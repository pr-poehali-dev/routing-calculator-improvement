import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Combined = () => {
  const combinedVariants = [
    {
      name: "Авто + ЖД",
      route: "Москва (авто) → Екатеринбург (ЖД) → Владивосток",
      price: 78000,
      priceFormatted: "78,000 ₽",
      duration: "6-8 дней",
      color: "bg-blue-50 border-blue-200",
      profitability: 95
    },
    {
      name: "ЖД + Авто + ЖД",
      route: "Москва (ЖД) → Самара (авто) → Астана (ЖД) → Алматы",
      price: 92000,
      priceFormatted: "92,000 ₽",
      duration: "9-12 дней",
      color: "bg-purple-50 border-purple-200",
      profitability: 88
    },
    {
      name: "Морская + Авто",
      route: "Владивосток (море) → Санкт-Петербург (авто) → Москва",
      price: 135000,
      priceFormatted: "135,000 ₽",
      duration: "28-32 дня",
      color: "bg-cyan-50 border-cyan-200",
      profitability: 72
    },
    {
      name: "ЖД + Морская",
      route: "Москва (ЖД) → Новороссийск (море) → Стамбул",
      price: 145000,
      priceFormatted: "145,000 ₽",
      duration: "18-22 дня",
      color: "bg-green-50 border-green-200",
      profitability: 68
    },
    {
      name: "Морская + ЖД + Авто",
      route: "Владивосток (море) → Санкт-Петербург (ЖД) → Минск (авто) → Варшава",
      price: 158000,
      priceFormatted: "158,000 ₽",
      duration: "30-35 дней",
      color: "bg-pink-50 border-pink-200",
      profitability: 60
    },
    {
      name: "Авто + Морская + Авто",
      route: "Москва (авто) → Новороссийск (море) → Констанца (авто) → Бухарест",
      price: 165000,
      priceFormatted: "165,000 ₽",
      duration: "12-15 дней",
      color: "bg-orange-50 border-orange-200",
      profitability: 55
    }
  ];

  const sortedVariants = [...combinedVariants].sort((a, b) => b.profitability - a.profitability);

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />
      
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800">Комбинированные маршруты</h2>
          <p className="text-gray-600 mt-2">Оптимальные варианты с использованием нескольких видов транспорта</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Сортировка</h3>
          <Separator className="mb-6 bg-white/20" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent rounded-lg">
              <Icon name="SlidersHorizontal" size={24} className="text-white" />
            </div>
            <span className="text-lg text-white font-medium">По выгодности</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {sortedVariants.map((variant, index) => (
            <Card
              key={index}
              className={`p-6 ${variant.color} border-2 transition-all hover:shadow-lg hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Route" size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold text-gray-800">{variant.name}</h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={18} className="text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Маршрут</p>
                    <p className="font-medium text-gray-800 text-sm leading-relaxed">{variant.route}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Icon name="DollarSign" size={18} className="text-gray-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Стоимость</p>
                    <p className="text-2xl font-bold text-primary">{variant.priceFormatted}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Icon name="Clock" size={18} className="text-gray-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Сроки доставки</p>
                    <p className="font-medium text-gray-800">{variant.duration}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Карта маршрутов</h3>
          <Card className="p-4 bg-white">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ocean" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#E0F2FE', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#BAE6FD', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                <rect width="1000" height="500" fill="url(#ocean)" />
                
                <path d="M 50,150 Q 200,100 350,120 T 650,150 L 680,180 L 620,200 L 580,190 L 500,180 Q 300,160 150,200 Z" 
                      fill="#D4E9D7" stroke="#86A789" strokeWidth="2" opacity="0.8" />
                
                <path d="M 200,250 Q 280,220 360,240 L 400,280 L 350,300 L 250,290 Z" 
                      fill="#E8D5C4" stroke="#B8956A" strokeWidth="1.5" opacity="0.7" />
                
                <path d="M 450,180 Q 550,160 650,180 L 700,220 L 680,260 L 600,250 L 500,240 Z" 
                      fill="#F5E6D3" stroke="#D4A574" strokeWidth="1.5" opacity="0.7" />
                
                <line x1="100" y1="180" x2="300" y2="260" stroke="#0EA5E9" strokeWidth="3" strokeDasharray="5,5" opacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                
                <line x1="300" y1="260" x2="550" y2="200" stroke="#22C55E" strokeWidth="3" strokeDasharray="5,5" opacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </line>
                
                <path d="M 150,300 Q 400,350 650,280" stroke="#06B6D4" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="12" dur="2s" repeatCount="indefinite" />
                </path>
                
                <path d="M 200,200 Q 350,150 500,190 T 700,240" stroke="#F97316" strokeWidth="3" fill="none" strokeDasharray="6,3" opacity="0.8">
                  <animate attributeName="stroke-dashoffset" from="0" to="9" dur="1.5s" repeatCount="indefinite" />
                </path>
                
                <circle cx="100" cy="180" r="8" fill="#0EA5E9" stroke="white" strokeWidth="2">
                  <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="260" r="8" fill="#22C55E" stroke="white" strokeWidth="2">
                  <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="550" cy="200" r="8" fill="#A855F7" stroke="white" strokeWidth="2">
                  <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="240" r="8" fill="#F97316" stroke="white" strokeWidth="2">
                  <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                </circle>
                
                <text x="100" y="165" fill="#1E40AF" fontSize="14" fontWeight="bold" textAnchor="middle">Москва</text>
                <text x="300" y="245" fill="#15803D" fontSize="14" fontWeight="bold" textAnchor="middle">Самара</text>
                <text x="550" y="185" fill="#7C3AED" fontSize="14" fontWeight="bold" textAnchor="middle">Екатеринбург</text>
                <text x="700" y="225" fill="#C2410C" fontSize="14" fontWeight="bold" textAnchor="middle">Владивосток</text>
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Combined;