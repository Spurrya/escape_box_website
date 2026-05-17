
import { Card, CardContent } from "@/components/ui/card";
import { asset } from '@/lib/asset';
import { CheckCircle, Smartphone, ArrowRight } from "lucide-react";

const WhatToBring = () => {
  return (
    <div className="mt-20 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground drop-shadow-lg">What to bring</h2>
      <Card className="bg-primary/10 border-primary/20 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent" />
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Text content and transformation visual side by side */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8 flex-1">
              <div className="flex-1">
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500" />
                    <span>Comfortable walking shoes for exploring the park</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500" />
                    <span>Weather-appropriate clothing</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Smartphone className="w-6 h-6 text-red-500" />
                    <span>Fully charged smartphone</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500" />
                    <span>An open mind ready for reality to bend</span>
                  </li>
                </ul>
              </div>
              
              {/* Transformation Visual */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 flex-shrink-0">
                {/* First silhouette */}
                <div className="w-20 h-28 sm:w-24 sm:h-36 relative">
                  <img 
                    src={asset("/lovable-uploads/60751422-8481-405f-96f9-d55d8e389fbc.png")}
                    alt="Person before transformation"
                    className="w-full h-full object-contain filter brightness-0 invert opacity-90"
                  />
                </div>
                
                {/* Arrow */}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-70" />
                
                {/* Second silhouette */}
                <div className="w-20 h-28 sm:w-24 sm:h-36 relative">
                  <img 
                    src={asset("/lovable-uploads/87eab1de-0e4c-4f77-9464-ea634af7460d.png")}
                    alt="Person after mind training"
                    className="w-full h-full object-contain filter brightness-0 invert opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatToBring;
