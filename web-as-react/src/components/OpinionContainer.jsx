import React from "react";
import OpinionCard from "./OpinionCard";

const opinions = [
  {
    title: "Ingenuo Huijsen, pletórico Militao",
    author: "Santiago Segurola",
    image: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true"
  },
  {
    title: "Ingenuo Huijsen, pletórico Militao",
    author: "Santiago Segurola",
    image: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true"
  },
  {
    title: "Ingenuo Huijsen, pletórico Militao",
    author: "Santiago Segurola",
    image: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true"
  }
];

export default function OpinionContainer() {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12 opinion-container">
          <div className="row">
            <div className="col-12 opinion-title">
              <a href="#">
                <h3>OPINIÓN</h3>
                <hr />
              </a>
            </div>
          </div>

          <div className="row">
            {opinions.map((op, i) => (
              <div key={i} className="col-12 col-md-4">
                <OpinionCard {...op} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
