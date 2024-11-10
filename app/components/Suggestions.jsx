"use client";
import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

export const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((i) => ({
      avatar: faker.image.urlPicsumPhotos(),
      name: faker.person.firstName(),
      fullname: faker.person.fullName(),
      username: faker.person.faker.internet.username(),
      phone: faker.phone.number(),
      id: i,
      company: faker.company.buzzNoun(),
      email: faker.person.faker.internet.email(),
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10 h-screen border rounded p-3 overflow-y-scroll ">
      <div className="flex items-center justify-between text-sm mb-5 border rounded p-2">
        <h3 className="text-gray-400 text-sm font-bold">Suggestions for you</h3>
        <button className="text-sm font-semibold text-gray-700">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between  mt-3  "
        >
          <img
            className="w-12 h-12 rounded-full border-2 p-[2px] border-red-600"
            src={suggestion.avatar}
            alt="seggestion"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm  ">{suggestion.username}</h2>
            <h3 className="text-xs text-gray-400  truncate ">
              Work at: {suggestion.company}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};
