const Menu = ({ createNewTodo, setTitle }) => {
  return (
    <div className="menu">
      <div className="menu__controll">
        <h1>Введите новоую тудушку</h1>

        <input type="text" placeholder="тудушка" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={createNewTodo}>Давай</button>
      </div>

      <div className="menu__buttons">
        <button>сортировать по имени</button>

        <button>сортировать по сделанным тудушкам</button>
      </div>
    </div>
  )
}

export default Menu
