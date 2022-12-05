import React from 'react'
import Cards from '../components/Cards'
import NavBar from '../components/NavBar'
import SearchAppBar from '../components/SearchAppBar'

function Products() {
  return (
    <div>
        {/* <NavBar/> */}
        <SearchAppBar/>
        <Cards/>
    </div>
  )
}

export default Products