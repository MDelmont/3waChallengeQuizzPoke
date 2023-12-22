export const LeaderBoard = () => {
  return (
    <div id="contain-all" className="slideout-panel page-leaderboard">
      <header className="header">
        <div className="header__navbar"></div>
      </header>
      <section className="hero hero--inverse"></section>
      <section className="leaderboard-progress">
        <div className="contain text-center">
          <img
            alt="Android Basics Leaderboard"
            className="mb-2"
            src="https://d125fmws0bore1.cloudfront.net/assets/svgs/icon_trophy_leaderboard-3442a4b2312e6cdd02aa9870e636dc082890277a6267c4ed986a750fef7cbb35.svg"
          />
          <h2>PokeQuizz Leaderboard</h2>
          <p className="lead">
            "Behold the Leaderboard Section – where champions rise, and triumphs
            are celebrated! This is the arena where the best and brightest
            showcase their skills, competing for glory and recognition. Whether
            you're a seasoned pro or a rising star, the Leaderboard Section is
            the stage where your accomplishments take center stage. Climb the
            ranks, outsmart your peers, and leave your mark as you compete in
            thrilling challenges and activities.
          </p>
        </div>
      </section>
      <section className="ranking">
        <div className="contain">
          <div className="ranking-table">
            <div className="ranking-table-row-leader-1">
              <div className="ranking-table-data-leader-1">
                <div className="medal-gold"></div>
              </div>
              <div className="ranking-table-data">Steven A</div>
              <div className="ranking-table-data">
                <div className="complete"></div>
              </div>
            </div>
            <div className="ranking-table-row-leader-2">
              <div className="ranking-table-data-leader-2">
                <div className="medal-silver"></div>
              </div>
              <div className="ranking-table-data">Raghav M</div>
              <div className="ranking-table-data">
                <div className="complete"></div>
              </div>
            </div>
            <div className="ranking-table-row-leader-3">
              <div className="ranking-table-data-leader-3">
                <div className="medal-bronze"></div>
              </div>
              <div className="ranking-table-data">Ryan Z</div>
              <div className="ranking-table-data">
                <div className="complete"></div>
              </div>
            </div>
            <div className="ranking-table-body">
              <div className="ranking-table-row">
                <div className="ranking-table-data">4</div>
                <div className="ranking-table-data">Joseph R</div>
                <div className="ranking-table-data">
                  <div className="complete"></div>
                </div>
              </div>
              <div className="ranking-table-row">
                <div className="ranking-table-data">5</div>
                <div className="ranking-table-data">Muwaffaq I</div>
                <div className="ranking-table-data">
                  <div className="complete"></div>
                </div>
              </div>
              <div className="ranking-table-row">
                <div className="ranking-table-data">6</div>
                <div className="ranking-table-data">Joshua L</div>
                <div className="ranking-table-data">
                  <div className="complete"></div>
                </div>
              </div>
              <div className="ranking-table-row">
                <div className="ranking-table-data">7</div>
                <div className="ranking-table-data">Nick M</div>
                <div className="ranking-table-data">
                  <div className="complete"></div>
                </div>
              </div>
              <div className="ranking-table-row">
                <div className="ranking-table-data">8</div>
                <div className="ranking-table-data">Ravindra R</div>
                <div className="ranking-table-data">
                  <div className="complete"></div>
                </div>
              </div>
              <div className="ranking-table-row">
                <div className="ranking-table-data">9</div>
                <div className="ranking-table-data">Ricardo M</div>
                <div className="ranking-table-data">
                  <div className="complete"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
