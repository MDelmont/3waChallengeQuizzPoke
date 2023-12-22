export const QuizzPage = () => {
  return (
    <div>
      <div className="row text-center">
        <h2 className="text-primary">Quizz App!</h2>
      </div>

      <div className="row" style={{ height: 30 }}></div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
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
          <div id="question1" className="panel-body">
            <p>How many presidents were members of the Whig party?</p>
            <form id="myForm" className={'modal-body'}>
              <div className={'form-group'}>
                <label htmlFor="responseA">
                  <input id="responseA" name="quiz1" type="radio" value="0" />
                  One
                </label>
              </div>
              <div className={'form-group'}>
                <label htmlFor="responseB">
                  <input id="responseB" name="quiz1" type="radio" value="0" />
                  Two
                </label>
              </div>
              <div className={'form-group'}>
                <label htmlFor="responseC">
                  <input id="responseC" name="quiz1" type="radio" value="0" />
                  Three
                </label>
              </div>
            </form>
          </div>
          <div className="progress">
            <div
              id="progressBar1"
              className="progress-bar progress-bar-striped active"
              role="progressbar"
              style={{ minWidth: '3%', width: '0%' }}
            ></div>
          </div>

          <div id="buttons">
            <button id="prev1" className="btn">
              Back
            </button>
            <button id="next1" className="btn pull-right">
              Next
            </button>
            <br />
            <br />
            <button id="restart1" className="btn" style={{ display: 'none' }}>
              Start Over?
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};
