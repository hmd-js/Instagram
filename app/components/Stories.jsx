"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Story } from "./Story";
export const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(100)].map((i) => ({
      avatar: faker.image.urlPicsumPhotos(),
      name: faker.person.firstName(),
      fullname : faker.person.fullName(),
      username: faker.person.faker.internet.username(),
      phone: faker.phone.number(),
      id : i,
      company: faker.company.buzzNoun(),
      email: faker.person.faker.internet.email(),
    }));

    setSuggestions(suggestions);
  }, []);

  console.log( faker.image.avatar());

  return <div className="flex overflow-x-scroll border rounded-sm space-x-2  border-1 p-3 scrollbar-thin scrollbar-thumb-black       " >
        {suggestions.map(profile => (
                <Story key={profile.id} img = {profile.avatar}  username= {profile.username} />
        ) )}
  </div>;
};
