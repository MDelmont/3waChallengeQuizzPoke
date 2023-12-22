import { Pagination } from '../features/pagination/Pagination';

export const LearnPage = () => {
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
        <input type="text" className="search-box" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
      <Pagination />
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
            <div className="card_back"></div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};
