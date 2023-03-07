import './style.scss'

const Pagination = ({ setPage }) => {
  return (
    <div className="pagination">
      <button className="pagination__button" onClick={() => setPage((page) => page + 1)}>
        next
      </button>

      <button className="pagination__button" onClick={() => setPage((page) => page - 1)}>
        prev
      </button>
    </div>
  )
}
export default Pagination
