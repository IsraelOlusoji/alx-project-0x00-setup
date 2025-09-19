import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-center">Landing Page</h1>
      
      {/* Card Component */}
      <div className="mb-12">
        <Card />
      </div>

      {/* Button Examples Section */}
      <div className="space-y-8">
        <h2 className="mb-6 text-2xl font-semibold">Button Components</h2>
        
        {/* Size Variations */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Size Variations</h3>
          <div className="flex items-center gap-4">
            <Button 
              title="Small Button" 
              styles="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
              size="small" 
              shape="rounded-md" 
            />
            <Button 
              title="Medium Button" 
              styles="bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-colors"
              size="medium" 
              shape="rounded-md" 
            />
            <Button 
              title="Large Button" 
              styles="bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition-colors"
              size="large" 
              shape="rounded-md" 
            />
          </div>
        </div>

        {/* Shape Variations */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Shape Variations</h3>
          <div className="flex items-center gap-4">
            <Button 
              title="Rounded Small" 
              styles="bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-colors"
              size="medium" 
              shape="rounded-sm" 
            />
            <Button 
              title="Rounded Medium" 
              styles="bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-colors"
              size="medium" 
              shape="rounded-lg" 
            />
            <Button 
              title="Rounded Full" 
              styles="bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-colors"
              size="medium" 
              shape="rounded-full" 
            />
          </div>
        </div>

        {/* Combined Variations */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Combined Variations</h3>
          <div className="grid grid-cols-3 gap-4">
            <Button 
              title="Small + Rounded Full" 
              styles="bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transition-colors"
              size="small" 
              shape="rounded-full" 
            />
            <Button 
              title="Medium + Rounded Small" 
              styles="bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition-colors"
              size="medium" 
              shape="rounded-sm" 
            />
            <Button 
              title="Large + Rounded Full" 
              styles="bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-colors"
              size="large" 
              shape="rounded-full" 
            />
          </div>
        </div>

        {/* Additional Style Examples */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Additional Style Examples</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              title="Outline Style" 
              styles="border-2 border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-colors"
              size="medium" 
              shape="rounded-md" 
            />
            <Button 
              title="Gradient Style" 
              styles="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition-all"
              size="medium" 
              shape="rounded-full" 
            />
            <Button 
              title="Shadow Style" 
              styles="bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 shadow-lg hover:shadow-xl transition-all"
              size="large" 
              shape="rounded-md" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
