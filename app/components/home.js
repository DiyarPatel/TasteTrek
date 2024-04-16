"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Home = () => {
  const [featuredDishes, setFeaturedDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedDishes = async () => {
      try {
        const response = await fetch(
          "http://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFeaturedDishes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured dishes:", error);
        setLoading(false);
      }
    };

    fetchFeaturedDishes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="TasteTrek Logo" width={40} height={40} />
          <h1 className="text-xl font-bold ml-2">TasteTrek</h1>
        </div>
        {/* Navigation */}
        <nav>
          {/* Menu items */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Discover Delicious Food Adventures
          </h2>
          <p className="text-gray-600">
            Explore the world of flavors with TasteTrek
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Featured dishes */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Dishes</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {featuredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="border border-gray-300 rounded-md p-4"
                >
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © 2024 TasteTrek. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
