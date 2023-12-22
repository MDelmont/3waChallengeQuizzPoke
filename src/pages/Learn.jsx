import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Pagination } from '../features/pagination/Pagination';
import { PokemonDetails } from './PokemonDetails';

export const LearnPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (newPage) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(newPage - 1) * 10}`);
      setPokemonData(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  useEffect(() => {
    fetchData(page || 1);
    setCurrentPage(parseInt(page, 10) || 1);
  }, [page]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/LearnPage/${newPage}`);
  };
  const getPokemonImage = (pokemonNumber) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`;
  };
  const getPokemonId = (index) => {
    return (currentPage - 1) * 10 + index + 1;
  };
  return (
    <div>
      <p>
        "Welcome to the Learn Section – your gateway to knowledge and
        skill-building! Here, we embark on a journey of discovery, providing you
        with insightful content and resources to expand your understanding
        across a spectrum of topics. Whether you're a curious learner or a
        seasoned enthusiast, our Learn Section is designed to ignite your
        passion for knowledge and empower you on your quest for intellectual
        growth. Dive into a world of information, explore new horizons, and
        unlock the doors to a wealth of learning opportunities. Let the pursuit
        of wisdom begin!"
      </p>
      <div className="search-box-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <i className="fas fa-search"></i>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <div className="pokemon-container">
        <div className="pc-container">
          <div className="pokemon-card">
            <div
              className="card_front"
              style={{
                background:
                  'linear-gradient(150deg, rgb(210, 242, 194) 50%, rgb(247, 205, 247) 50%)',
              }}
            >
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
              <div className="circle"></div>
              <h5 className="poke-id"> #1 </h5>
              <h5 className="poke-name"> Bulbasaur </h5>
              <h5> Grass / Poison</h5>
            </div>
            <div className="card_back"></div>
          </div>
        </div>
        <div className="pc-container">
          <div className="pokemon-card">
            <div
              className="card_front"
              style={{ background: 'rgb(255, 201, 218)' }}
            >
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" />
              <div className="circle"></div>
              <h5 className="poke-id"> #150 </h5>
              <h5 className="poke-name"> Mewtwo </h5>
              <h5> Psychic</h5>
            </div>
          </div>
        ))}
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};
