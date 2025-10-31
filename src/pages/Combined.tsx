import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SortType = 'profitability' | 'duration' | 'price' | 'risk' | 'distance' | 'scalability' | 'complexity';

interface RouteDetail {
  step: number;
  type: string;
  from: string;
  to: string;
  via: string[];
  description: string;
}

const Combined = () => {
  const [sortBy, setSortBy] = useState<SortType>('profitability');
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);

  const combinedVariants = [
    {
      name: "Авто + ЖД",
      route: "Москва (авто) → Екатеринбург (ЖД) → Владивосток",
      price: 78000,
      priceFormatted: "78,000 ₽",
      duration: "6-8 дней",
      durationDays: 7,
      color: "bg-blue-50 border-blue-200",
      profitability: 95,
      risk: 15,
      distance: 6200,
      scalability: 85,
      complexity: 20,
      details: [
        {
          step: 1,
          type: "Автомобильная доставка",
          from: "Москва",
          to: "Екатеринбург",
          via: ["М7 Волга", "Казань", "Пермь"],
          description: "Доставка по федеральной трассе М7, протяженность 1800 км"
        },
        {
          step: 2,
          type: "ЖД доставка",
          from: "Екатеринбург",
          to: "Владивосток",
          via: ["Станция Екатеринбург-Пассажирский", "Новосибирск-Главный", "Иркутск-Пассажирский", "Хабаровск-1", "Станция Владивосток"],
          description: "Транссибирская магистраль, 4400 км по железнодорожным путям"
        }
      ]
    },
    {
      name: "ЖД + Авто + ЖД",
      route: "Москва (ЖД) → Самара (авто) → Астана (ЖД) → Алматы",
      price: 92000,
      priceFormatted: "92,000 ₽",
      duration: "9-12 дней",
      durationDays: 10.5,
      color: "bg-purple-50 border-purple-200",
      profitability: 88,
      risk: 25,
      distance: 4800,
      scalability: 78,
      complexity: 35,
      details: [
        {
          step: 1,
          type: "ЖД доставка",
          from: "Москва",
          to: "Самара",
          via: ["Казанский вокзал", "Рязань", "Сызрань", "Самара-Пассажирская"],
          description: "1050 км по железной дороге через Приволжье"
        },
        {
          step: 2,
          type: "Автомобильная доставка",
          from: "Самара",
          to: "Астана",
          via: ["Оренбург", "Граница РФ-Казахстан", "Костанай"],
          description: "1800 км автотранспортом через Казахстан"
        },
        {
          step: 3,
          type: "ЖД доставка",
          from: "Астана",
          to: "Алматы",
          via: ["Станция Нур-Султан", "Караганда", "Балхаш", "Алматы-1"],
          description: "1950 км по казахстанским железным дорогам"
        }
      ]
    },
    {
      name: "Морская + Авто",
      route: "Владивосток (море) → Санкт-Петербург (авто) → Москва",
      price: 135000,
      priceFormatted: "135,000 ₽",
      duration: "28-32 дня",
      durationDays: 30,
      color: "bg-cyan-50 border-cyan-200",
      profitability: 72,
      risk: 45,
      distance: 18500,
      scalability: 92,
      complexity: 40,
      details: [
        {
          step: 1,
          type: "Морская доставка",
          from: "Владивосток",
          to: "Санкт-Петербург",
          via: ["Порт Владивосток", "Японское море", "Суэцкий канал", "Средиземное море", "Северное море", "Порт Санкт-Петербург"],
          description: "17800 км морским путем вокруг Евразии"
        },
        {
          step: 2,
          type: "Автомобильная доставка",
          from: "Санкт-Петербург",
          to: "Москва",
          via: ["М11 Нева", "Тверь"],
          description: "700 км по скоростной трассе М11"
        }
      ]
    },
    {
      name: "ЖД + Морская",
      route: "Москва (ЖД) → Новороссийск (море) → Стамбул",
      price: 145000,
      priceFormatted: "145,000 ₽",
      duration: "18-22 дня",
      durationDays: 20,
      color: "bg-green-50 border-green-200",
      profitability: 68,
      risk: 38,
      distance: 2800,
      scalability: 88,
      complexity: 32,
      details: [
        {
          step: 1,
          type: "ЖД доставка",
          from: "Москва",
          to: "Новороссийск",
          via: ["Павелецкий вокзал", "Воронеж", "Ростов-на-Дону", "Краснодар", "Станция Новороссийск"],
          description: "1500 км по южному направлению"
        },
        {
          step: 2,
          type: "Морская доставка",
          from: "Новороссийск",
          to: "Стамбул",
          via: ["Порт Новороссийск", "Черное море", "Босфор", "Порт Стамбул"],
          description: "1300 км через Черное море в Турцию"
        }
      ]
    },
    {
      name: "Морская + ЖД + Авто",
      route: "Владивосток (море) → Санкт-Петербург (ЖД) → Минск (авто) → Варшава",
      price: 158000,
      priceFormatted: "158,000 ₽",
      duration: "30-35 дней",
      durationDays: 32.5,
      color: "bg-pink-50 border-pink-200",
      profitability: 60,
      risk: 50,
      distance: 19500,
      scalability: 90,
      complexity: 55,
      details: [
        {
          step: 1,
          type: "Морская доставка",
          from: "Владивосток",
          to: "Санкт-Петербург",
          via: ["Порт Владивосток", "Японское море", "Индийский океан", "Суэцкий канал", "Балтийское море", "Порт Санкт-Петербург"],
          description: "17800 км морским путем"
        },
        {
          step: 2,
          type: "ЖД доставка",
          from: "Санкт-Петербург",
          to: "Минск",
          via: ["Витебский вокзал", "Псков", "Полоцк", "Минск-Пассажирский"],
          description: "850 км по белорусскому направлению"
        },
        {
          step: 3,
          type: "Автомобильная доставка",
          from: "Минск",
          to: "Варшава",
          via: ["М1/Е30", "Брест", "Граница Беларусь-Польша", "Тересполь"],
          description: "550 км до Польши"
        }
      ]
    },
    {
      name: "Авто + Морская + Авто",
      route: "Москва (авто) → Новороссийск (море) → Констанца (авто) → Бухарест",
      price: 165000,
      priceFormatted: "165,000 ₽",
      duration: "12-15 дней",
      durationDays: 13.5,
      color: "bg-orange-50 border-orange-200",
      profitability: 55,
      risk: 42,
      distance: 2900,
      scalability: 75,
      complexity: 48,
      details: [
        {
          step: 1,
          type: "Автомобильная доставка",
          from: "Москва",
          to: "Новороссийск",
          via: ["М4 Дон", "Воронеж", "Ростов-на-Дону", "Краснодар"],
          description: "1500 км по федеральной трассе М4"
        },
        {
          step: 2,
          type: "Морская доставка",
          from: "Новороссийск",
          to: "Констанца",
          via: ["Порт Новороссийск", "Черное море", "Порт Констанца"],
          description: "700 км через Черное море в Румынию"
        },
        {
          step: 3,
          type: "Автомобильная доставка",
          from: "Констанца",
          to: "Бухарест",
          via: ["A2", "Черноводэ", "Фетешть"],
          description: "225 км по румынской автомагистрали"
        }
      ]
    }
  ];

  const sortOptions = [
    { value: 'profitability' as SortType, label: 'По выгодности', icon: 'TrendingUp' },
    { value: 'duration' as SortType, label: 'По срокам', icon: 'Clock' },
    { value: 'price' as SortType, label: 'По наименьшей стоимости', icon: 'DollarSign' },
    { value: 'risk' as SortType, label: 'По рискам', icon: 'AlertTriangle' },
    { value: 'distance' as SortType, label: 'По продолжительности пути', icon: 'Navigation' },
    { value: 'scalability' as SortType, label: 'По масштабируемости', icon: 'Maximize2' },
    { value: 'complexity' as SortType, label: 'По сложности и затратам усилий', icon: 'Layers' }
  ];

  const getSortedVariants = () => {
    const sorted = [...combinedVariants];
    switch (sortBy) {
      case 'profitability':
        return sorted.sort((a, b) => b.profitability - a.profitability);
      case 'duration':
        return sorted.sort((a, b) => a.durationDays - b.durationDays);
      case 'price':
        return sorted.sort((a, b) => a.price - b.price);
      case 'risk':
        return sorted.sort((a, b) => a.risk - b.risk);
      case 'distance':
        return sorted.sort((a, b) => a.distance - b.distance);
      case 'scalability':
        return sorted.sort((a, b) => b.scalability - a.scalability);
      case 'complexity':
        return sorted.sort((a, b) => a.complexity - b.complexity);
      default:
        return sorted;
    }
  };

  const sortedVariants = getSortedVariants();
  const currentSortOption = sortOptions.find(opt => opt.value === sortBy);

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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="flex items-center gap-3 mb-6 bg-accent text-white hover:bg-accent/90">
                <Icon name="SlidersHorizontal" size={24} />
                <span className="text-lg font-medium">{currentSortOption?.label}</span>
                <Icon name="ChevronDown" size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[280px]">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className="flex items-center gap-3 cursor-pointer py-3"
                >
                  <Icon name={option.icon} size={18} />
                  <span>{option.label}</span>
                  {sortBy === option.value && <Icon name="Check" size={18} className="ml-auto text-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {sortedVariants.map((variant, index) => (
            <Card
              key={index}
              onClick={() => setSelectedRoute(index)}
              className={`p-6 ${variant.color} border-2 transition-all hover:shadow-lg hover:scale-105 animate-fade-in cursor-pointer`}
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

              <Button variant="outline" className="w-full mt-4" onClick={(e) => {
                e.stopPropagation();
                setSelectedRoute(index);
              }}>
                <Icon name="Info" size={18} className="mr-2" />
                Подробнее о маршруте
              </Button>
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

      <Dialog open={selectedRoute !== null} onOpenChange={() => setSelectedRoute(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedRoute !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <Icon name="Route" size={28} className="text-primary" />
                  {sortedVariants[selectedRoute].name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
                  <p className="text-lg font-semibold text-gray-800 mb-2">Общий маршрут:</p>
                  <p className="text-gray-700">{sortedVariants[selectedRoute].route}</p>
                </div>

                <div className="space-y-4">
                  {sortedVariants[selectedRoute].details.map((detail, idx) => (
                    <Card key={idx} className="p-5 border-2 border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                          {detail.step}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-gray-800 mb-2">{detail.type}</h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Icon name="MapPin" size={18} className="text-primary" />
                              <span className="text-gray-600">Откуда:</span>
                              <span className="font-medium text-gray-800">{detail.from}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Icon name="Flag" size={18} className="text-accent" />
                              <span className="text-gray-600">Куда:</span>
                              <span className="font-medium text-gray-800">{detail.to}</span>
                            </div>
                            
                            <div className="mt-3">
                              <div className="flex items-start gap-2 mb-2">
                                <Icon name="Navigation" size={18} className="text-gray-600 mt-0.5" />
                                <span className="text-gray-600 font-medium">Промежуточные пункты:</span>
                              </div>
                              <div className="pl-7 space-y-1">
                                {detail.via.map((point, pointIdx) => (
                                  <div key={pointIdx} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                                    <span className="text-gray-700">{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-3 p-3 bg-blue-50 rounded">
                              <p className="text-sm text-gray-700">{detail.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Combined;
