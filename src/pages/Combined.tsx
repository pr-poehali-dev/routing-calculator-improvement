import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Combined = () => {
  const combinedVariants = [
    {
      name: "Авто + ЖД",
      route: "Москва (авто) → Екатеринбург (ЖД) → Владивосток",
      price: "78,000 ₽",
      duration: "6-8 дней",
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Морская + Авто",
      route: "Владивосток (море) → Санкт-Петербург (авто) → Москва",
      price: "135,000 ₽",
      duration: "28-32 дня",
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      name: "ЖД + Морская",
      route: "Москва (ЖД) → Новороссийск (море) → Стамбул",
      price: "145,000 ₽",
      duration: "18-22 дня",
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Авто + Морская + Авто",
      route: "Москва (авто) → Новороссийск (море) → Констанца (авто) → Бухарест",
      price: "165,000 ₽",
      duration: "12-15 дней",
      color: "bg-orange-50 border-orange-200"
    },
    {
      name: "ЖД + Авто + ЖД",
      route: "Москва (ЖД) → Самара (авто) → Астана (ЖД) → Алматы",
      price: "92,000 ₽",
      duration: "9-12 дней",
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "Морская + ЖД + Авто",
      route: "Владивосток (море) → Санкт-Петербург (ЖД) → Минск (авто) → Варшава",
      price: "158,000 ₽",
      duration: "30-35 дней",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />
      
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800">Комбинированные маршруты</h2>
          <p className="text-gray-600 mt-2">Оптимальные варианты с использованием нескольких видов транспорта</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {combinedVariants.map((variant, index) => (
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
                    <p className="text-2xl font-bold text-primary">{variant.price}</p>
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
      </div>
    </div>
  );
};

export default Combined;
