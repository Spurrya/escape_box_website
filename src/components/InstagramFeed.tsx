import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Instagram, ExternalLink } from "lucide-react";
import { useEffect } from "react";

// Extend Window interface for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

const InstagramFeed = () => {
  // Real Instagram posts from @escapebox.ca
  const instagramPosts = [
    {
      id: 1,
      postUrl: "https://www.instagram.com/p/DIX1nqtuuqb/",
      embedUrl: "https://www.instagram.com/p/DIX1nqtuuqb/embed/?hidecaption=true&hidelikescount=true"
    },
    {
      id: 2,
      postUrl: "https://www.instagram.com/p/DKDQfnPvag9/",
      embedUrl: "https://www.instagram.com/p/DKDQfnPvag9/embed/?hidecaption=true&hidelikescount=true"
    },
    {
      id: 3,
      postUrl: "https://www.instagram.com/p/C_wAlQGPLdu/",
      embedUrl: "https://www.instagram.com/p/C_wAlQGPLdu/embed/?hidecaption=true&hidelikescount=true"
    }
  ];

  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== 'undefined' && !window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4 text-foreground">
            Join the Kiwi Kingdom Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Follow our adventures and see how other puzzle enthusiasts are conquering Toronto's mysteries. 
            Join thousands of adventurers sharing their experiences!
          </p>
          <Button 
            size="lg" 
            className="bg-kiwi-green hover:bg-kiwi-green/90 text-white gap-2"
            onClick={() => window.open('https://www.instagram.com/escapebox.ca/', '_blank')}
          >
            <Instagram className="w-5 h-5 text-icon" />
            Follow @escapebox.ca
            <ExternalLink className="w-4 h-4 text-icon" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-lg bg-white" style={{ height: '550px' }}>
              <iframe
                src={post.embedUrl}
                width="100%"
                height="550"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="border-0 w-full"
                title={`Instagram post ${post.id}`}
                style={{ overflow: 'hidden' }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Share your adventure with us using #KiwiKingdomTO
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
