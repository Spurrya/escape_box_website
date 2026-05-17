import { CameraOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Camera = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center px-4 py-40">
                <Card className="max-w-xl w-full text-center bg-muted/10 border-muted p-8 shadow-lg">
                    <CardContent className="flex flex-col items-center space-y-12">
                        <div className="bg-muted p-4 rounded-full">
                            <CameraOff className="w-12 h-12 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">Nothing to See Here 👀</h2>
                        <p className="text-lg text-muted-foreground">
                            You won’t find what you’re looking for here because you’re using a <span className="font-semibold text-foreground">REAL</span> camera.
                            <br /><br />
                            Keep going — you’ll find the tool you need when the time is right.
                        </p>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default Camera;
