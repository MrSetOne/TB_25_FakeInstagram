import './NavbarSearch.css'

function NavbarSearch() {
  return (
    <div className="NavbarSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input className='Search__Input' type="text" name="Search" id="Search" placeholder='Buscar'/>
    </div>
  )
}

export default NavbarSearch