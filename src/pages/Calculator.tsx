import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const Calculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: "",
    volume: "",
    length: "",
    width: "",
    height: "",
    date: "",
    departure: "",
    destination: "",
    budget: "",
    packagingType: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { state: formData });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton />
      
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800">Калькулятор перевозки</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Информация о грузе</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="weight">Вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="volume">Объем (м³)</Label>
                  <Input
                    id="volume"
                    type="number"
                    placeholder="Введите объем"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="packagingType">Тип упаковки</Label>
                  <Select value={formData.packagingType} onValueChange={(value) => setFormData({ ...formData, packagingType: value })}>
                    <SelectTrigger className="focus:border-accent focus:ring-accent transition-all">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартная</SelectItem>
                      <SelectItem value="special">Специальная</SelectItem>
                      <SelectItem value="fragile">Хрупкая</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="length">Длина (м)</Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="Длина"
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width">Ширина (м)</Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="Ширина"
                    value={formData.width}
                    onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Высота (м)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Высота"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Маршрут и сроки</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="departure">Пункт отправления</Label>
                  <Input
                    id="departure"
                    placeholder="Город отправления"
                    value={formData.departure}
                    onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Пункт доставки</Label>
                  <Input
                    id="destination"
                    placeholder="Город доставки"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Дата отправки</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Дополнительная информация</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет (₽)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Ваш бюджет"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Дополнительные сведения</Label>
                  <Input
                    id="additionalInfo"
                    placeholder="Опционально"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="focus:border-accent focus:ring-accent transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg transition-all hover:scale-105"
              >
                Рассчитать маршрут
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;
