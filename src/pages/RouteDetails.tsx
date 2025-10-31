import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RouteStep {
  step: number;
  type: string;
  from: string;
  to: string;
  cost: number;
  duration: string;
}

interface Risk {
  title: string;
  probability: string;
  cost: number;
  description: string;
}

const RouteDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { routeName, routeSteps } = location.state || {};

  if (!routeName || !routeSteps) {
    navigate('/combined');
    return null;
  }

  const stepsData: RouteStep[] = [
    {
      step: 1,
      type: "Автомобильная доставка",
      from: "Москва",
      to: "Екатеринбург",
      cost: 45000,
      duration: "2-3 дня"
    },
    {
      step: 2,
      type: "ЖД доставка",
      from: "Екатеринбург",
      to: "Владивосток",
      cost: 33000,
      duration: "4-5 дней"
    }
  ];

  const risks: Risk[] = [
    {
      title: "Задержка на таможне",
      probability: "15%",
      cost: 8500,
      description: "Возможная задержка при прохождении таможенного контроля"
    },
    {
      title: "Погодные условия",
      probability: "10%",
      cost: 5000,
      description: "Задержка из-за неблагоприятных погодных условий на участке маршрута"
    },
    {
      title: "Простой на ЖД станции",
      probability: "8%",
      cost: 3500,
      description: "Ожидание свободного пути или вагона на железнодорожной станции"
    },
    {
      title: "Поломка транспорта",
      probability: "5%",
      cost: 12000,
      description: "Техническая неисправность транспортного средства"
    }
  ];

  const additionalCosts = [
    { name: "Страхование груза (ФСС)", cost: 4200, location: "По всему маршруту" },
    { name: "НДС (20%)", cost: 15600, location: "Общая сумма" },
    { name: "Погрузочно-разгрузочные работы", cost: 6500, location: "Москва, Екатеринбург, Владивосток" },
    { name: "Хранение на складе", cost: 2800, location: "Екатеринбург (1 день)" },
    { name: "Оформление документов", cost: 3500, location: "Москва" },
    { name: "Экспедирование", cost: 5400, location: "По всему маршруту" }
  ];

  const totalTransportCost = stepsData.reduce((sum, step) => sum + step.cost, 0);
  const totalAdditionalCost = additionalCosts.reduce((sum, item) => sum + item.cost, 0);
  const totalRisksCost = risks.reduce((sum, risk) => sum + risk.cost, 0);
  const grandTotal = totalTransportCost + totalAdditionalCost;

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />
      
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Icon name="FileText" size={32} className="text-primary" />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">Детальная смета маршрута</h2>
              <p className="text-gray-600 mt-1">{routeName}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          
          {/* Стоимость каждого этапа */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="TrendingUp" size={28} className="text-white" />
              <h3 className="text-2xl font-semibold text-white">Стоимость по этапам перевозки</h3>
            </div>
            <Separator className="mb-6 bg-white/20" />
            
            <div className="grid gap-4">
              {stepsData.map((step, idx) => (
                <Card key={idx} className="p-6 bg-white border-2 border-primary/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800">{step.type}</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-13">
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={18} className="text-primary" />
                          <div>
                            <p className="text-xs text-gray-600">Откуда</p>
                            <p className="font-medium text-gray-800">{step.from}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Icon name="Flag" size={18} className="text-accent" />
                          <div>
                            <p className="text-xs text-gray-600">Куда</p>
                            <p className="font-medium text-gray-800">{step.to}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={18} className="text-gray-600" />
                          <div>
                            <p className="text-xs text-gray-600">Время</p>
                            <p className="font-medium text-gray-800">{step.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-6">
                      <p className="text-sm text-gray-600 mb-1">Стоимость этапа</p>
                      <p className="text-3xl font-bold text-primary">{step.cost.toLocaleString('ru-RU')} ₽</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="Package" size={24} className="text-primary" />
                    <span className="text-xl font-semibold text-gray-800">Итого за перевозку</span>
                  </div>
                  <p className="text-3xl font-bold text-primary">{totalTransportCost.toLocaleString('ru-RU')} ₽</p>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-8 bg-white/20" />

          {/* Риски и возможные задержки */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="AlertTriangle" size={28} className="text-white" />
              <h3 className="text-2xl font-semibold text-white">Риски и возможные задержки</h3>
            </div>
            <Separator className="mb-6 bg-white/20" />
            
            <div className="grid gap-4">
              {risks.map((risk, idx) => (
                <Card key={idx} className="p-5 bg-white border-l-4 border-l-orange-500">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="AlertCircle" size={20} className="text-orange-500" />
                        <h4 className="text-lg font-semibold text-gray-800">{risk.title}</h4>
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-300">
                          Вероятность: {risk.probability}
                        </Badge>
                      </div>
                      <p className="text-gray-600 ml-8">{risk.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <p className="text-sm text-gray-600 mb-1">Потенциальные расходы</p>
                      <p className="text-2xl font-bold text-orange-600">+{risk.cost.toLocaleString('ru-RU')} ₽</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={24} className="text-orange-600" />
                    <span className="text-xl font-semibold text-gray-800">Резерв на риски (максимум)</span>
                  </div>
                  <p className="text-3xl font-bold text-orange-600">+{totalRisksCost.toLocaleString('ru-RU')} ₽</p>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-8 bg-white/20" />

          {/* Дополнительные расходы */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Calculator" size={28} className="text-white" />
              <h3 className="text-2xl font-semibold text-white">Дополнительные расходы</h3>
            </div>
            <Separator className="mb-6 bg-white/20" />
            
            <div className="grid gap-3">
              {additionalCosts.map((item, idx) => (
                <Card key={idx} className="p-4 bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Receipt" size={18} className="text-gray-600" />
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      </div>
                      <div className="flex items-center gap-2 ml-6">
                        <Icon name="MapPin" size={14} className="text-gray-500" />
                        <p className="text-sm text-gray-600">{item.location}</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-gray-800">{item.cost.toLocaleString('ru-RU')} ₽</p>
                  </div>
                </Card>
              ))}
              
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="FileStack" size={24} className="text-blue-600" />
                    <span className="text-xl font-semibold text-gray-800">Итого дополнительные расходы</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">{totalAdditionalCost.toLocaleString('ru-RU')} ₽</p>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-8 bg-white/20" />

          {/* Итоговая стоимость */}
          <section>
            <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/30">
                  <span className="text-lg">Стоимость перевозки</span>
                  <span className="text-2xl font-semibold">{totalTransportCost.toLocaleString('ru-RU')} ₽</span>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b border-white/30">
                  <span className="text-lg">Дополнительные расходы</span>
                  <span className="text-2xl font-semibold">{totalAdditionalCost.toLocaleString('ru-RU')} ₽</span>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <Icon name="Wallet" size={32} />
                    <span className="text-2xl font-bold">ИТОГО К ОПЛАТЕ</span>
                  </div>
                  <span className="text-4xl font-bold">{grandTotal.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Неактивная кнопка */}
          <div className="flex justify-center pt-6">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6" 
              disabled
            >
              <Icon name="Lock" size={20} className="mr-2" />
              Оформить заказ (недоступно)
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
