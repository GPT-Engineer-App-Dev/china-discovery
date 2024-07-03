import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";

const Index = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/placeholder.svg?w=1920&h=1080)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Discover China</h1>
          <p className="mt-4 text-2xl">A Journey Through History and Culture</p>
          <Button className="mt-8" onClick={scrollToAbout}>Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="/placeholder.svg?w=600&h=400" alt="Chinese cultural element" className="mx-auto rounded-xl object-cover w-full h-[400px]" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold">About China</h2>
            <p className="mt-4 text-lg">
              China, one of the world's oldest civilizations, offers a rich tapestry of history, culture, and innovation. From ancient dynasties to modern metropolises, explore the wonders of this vast and diverse nation.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Highlights of China</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card>
              <img src="/placeholder.svg?w=400&h=300" alt="The Great Wall" className="mx-auto rounded-xl object-cover w-full h-[300px]" />
              <CardHeader>
                <CardTitle>The Great Wall</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A monumental feat of ancient engineering, the Great Wall of China stretches over 13,000 miles and is a symbol of China's historical strength and perseverance.</p>
              </CardContent>
            </Card>
            <Card>
              <img src="/placeholder.svg?w=400&h=300" alt="The Forbidden City" className="mx-auto rounded-xl object-cover w-full h-[300px]" />
              <CardHeader>
                <CardTitle>The Forbidden City</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Located in the heart of Beijing, the Forbidden City served as the imperial palace for 24 emperors during the Ming and Qing dynasties.</p>
              </CardContent>
            </Card>
            <Card>
              <img src="/placeholder.svg?w=400&h=300" alt="Terracotta Army" className="mx-auto rounded-xl object-cover w-full h-[300px]" />
              <CardHeader>
                <CardTitle>Terracotta Army</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discovered in 1974, the Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Discover China. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2">Facebook</a>
            <a href="#" className="mx-2">Twitter</a>
            <a href="#" className="mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;