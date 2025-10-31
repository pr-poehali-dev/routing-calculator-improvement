import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  showBackButton?: boolean;
}

const Header = ({ showBackButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {showBackButton ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="text-primary hover:text-primary/80"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="ml-2">Назад</span>
          </Button>
        ) : (
          <div></div>
        )}
        
        <h1 className="text-2xl font-bold text-primary absolute left-1/2 transform -translate-x-1/2">
          ТРАНСКОНТЕЙНЕР
        </h1>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-gray-700 hover:text-primary">
            <Icon name="User" size={20} />
            <span className="ml-2 hidden sm:inline">Личный кабинет</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-primary">
            <Icon name="Search" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
