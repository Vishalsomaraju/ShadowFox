import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "On orders over $100" },
  { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
  { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
];

export default function Features() {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 hover:scale-105 rounded-lg p-4 transition"
            >
              <feature.icon
                className="h-10 w-10 text-gray-600"
                aria-hidden="true"
              />
              <div>
                <p className="text-base font-medium text-gray-900">
                  {feature.text}
                </p>
                <p className="mt-1 text-sm text-gray-500">{feature.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
