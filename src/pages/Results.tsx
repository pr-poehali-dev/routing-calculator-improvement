import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const transportOptions = [
    {
      type: "Автотранспорт",
      icon: "Truck",
      price: "45,000 ₽",
      route: "М5 → М7 → А108",
      duration: "3-5 дней",
      color: "bg-blue-50 border-blue-200",
      clickable: true
    },
    {
      type: "Морская перевозка",
      icon: "Ship",
      price: "120,000 ₽",
      route: "Владивосток → Санкт-Петербург",
      duration: "25-30 дней",
      color: "bg-cyan-50 border-cyan-200",
      clickable: true
    },
    {
      type: "Ж/Д перевозка",
      icon: "Train",
      price: "65,000 ₽",
      route: "РЖД маршрут 1А",
      duration: "7-10 дней",
      color: "bg-green-50 border-green-200",
      clickable: true
    },
    {
      type: "Комбинированный",
      icon: "Boxes",
      price: "от 78,000 ₽",
      route: "Несколько видов транспорта",
      duration: "5-35 дней",
      variants: "6 вариантов",
      color: "bg-orange-50 border-orange-200",
      clickable: true,
      navigateTo: "/combined"
    }
  ];

  const handleCardClick = (option: any) => {
    if (option.navigateTo) {
      navigate(option.navigateTo);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />
      
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800">Результаты расчета</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {transportOptions.map((option, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(option)}
              className={`p-6 ${option.color} border-2 transition-all hover:shadow-lg hover:scale-105 animate-fade-in ${option.clickable ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Icon name={option.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{option.type}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="DollarSign" size={18} className="text-gray-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Стоимость</p>
                    <p className="text-2xl font-bold text-primary">{option.price}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={18} className="text-gray-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Маршрут</p>
                    <p className="font-medium text-gray-800">{option.route}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Icon name="Clock" size={18} className="text-gray-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Сроки доставки</p>
                    <p className="font-medium text-gray-800">{option.duration}</p>
                  </div>
                </div>

                {option.variants && (
                  <div className="flex items-start gap-2 pt-2 border-t">
                    <Icon name="Zap" size={18} className="text-orange-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Вариативность</p>
                      <p className="font-medium text-orange-600">{option.variants}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;