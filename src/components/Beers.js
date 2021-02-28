import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [color, setColor] = useState("red");

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
    .then((res) => res.json())
    .then((beers) => setBeers(beers))
  }, [])


  return (
    <div className="beerList">
        {beers.map((beer) => {
          return (
            <div className="beerCard" key={beer.id}>
                <FaHeart 
                  className="heart"
                  onClick={() => setColor(!color)}
                  color={color ? '#d8d8d8' : '#CA5900'}
                />
                <h1 className="name">{beer.name}</h1>
                <h5 className="abv">ABV: {beer.abv}</h5>
                <h4 className="tagline">{beer.tagline}</h4>
                <p className="descr">{beer.description}</p>
                <img className="img" src={beer.image_url}></img>
            </div>
          )
        })}
    </div>

  )
}

export default Beers

