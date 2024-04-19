import Link from "next/link";
import Header from "../components/header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8 color-white">
          <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
          <p className="text-lg mb-4  text-black">
            Welcome to our website! We are a team of passionate food enthusiasts
            dedicated to exploring and sharing delicious recipes from around the
            world. Our mission is to inspire people to discover new flavors and
            culinary experiences.
          </p>
          <p className="text-lg mb-4  text-black">
            On this website, you'll find a wide range of recipes, from
            traditional dishes to modern creations. Whether you're a seasoned
            chef or just starting out in the kitchen, there's something here for
            everyone.
          </p>
          <p className="text-lg mb-8  text-black">
            Join us on a culinary journey and let's explore the wonderful world
            of food together!
          </p>
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
//hey
