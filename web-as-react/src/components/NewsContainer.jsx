import React from "react";
import NewsCard from "./NewsCard";

const dummyData = [
  {
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEoqBbiufFWZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1585566201800?e=1761782400&v=beta&t=eX-Bnf0S_Un2cfqThgWa9VhxeoUtwJDqmFFipB4Zbc0",
    category: "sociedad",
    title: "Mi profe favorito (súbeme la nota)",
    source: "AS ACTUALIDAD",
    featured: true
  },
  ...Array(8).fill({
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEoqBbiufFWZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1585566201800?e=1761782400&v=beta&t=eX-Bnf0S_Un2cfqThgWa9VhxeoUtwJDqmFFipB4Zbc0",
    category: "sociedad",
    title: "Mi profe favorito (súbeme la nota)",
    source: "AS ACTUALIDAD",
    featured: false
  })
];

export default function NewsContainer() {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-8 col-md-8">
          <div className="row">
            {dummyData.map((card, i) => (
              <div key={i} className={card.featured ? "col-12" : "col-6"}>
                <NewsCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
