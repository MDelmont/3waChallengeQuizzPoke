export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5; 
    
    // Calcul des pages à afficher dans la pagination
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (totalPages > visiblePages) {
      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
      } else if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + visiblePages - 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`pagination ${currentPage === i ? 'current-page' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="button-container">
      <button
        id="left-btn"
        className="d-flex align-items-center justify-content-center"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      {currentPage > 1 && (
        <>
          <div className="pagination" onClick={() => onPageChange(1)}>
            {1}
          </div>
          {currentPage > 2 && <div className="pagination">...</div>}
        </>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <>
          {currentPage < totalPages - 1 && <div className="pagination">...</div>}
          <div className="pagination" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </div>
        </>
      )}
      <button
        id="right-btn"
        className="d-flex align-items-center justify-content-center"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};
