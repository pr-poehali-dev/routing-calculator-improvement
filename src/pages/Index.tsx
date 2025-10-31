import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Много хочешь —<br />много получишь
          </h1>
          
          <Button
            onClick={() => navigate("/calculator")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-12 py-8 text-xl font-semibold transition-all hover:scale-110 shadow-2xl"
          >
            Digital Manager
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
