import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">
        Landing Page
      <Card />
      <Button title="Click Me" size="large" shape="rounded-full" />
      </h1>
    </div>
  );
};

export default Landing;
