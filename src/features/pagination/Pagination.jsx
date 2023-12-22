export const Pagination = () => {
  return (
    <div className="button-container">
      <button
        id="left-btn"
        className="d-flex align-items-center justify-content-center"
      >
        {'<'}
      </button>
      <div className="pagination current-page">1</div>
      <div className="pagination">2</div>
      <div className="pagination">3</div>
      <div className="pagination">4</div>
      <div className="pagination">5</div>
      <button
        id="right-btn"
        className="d-flex align-items-center justify-content-center"
      >
        {'>'}
      </button>
    </div>
  );
};
