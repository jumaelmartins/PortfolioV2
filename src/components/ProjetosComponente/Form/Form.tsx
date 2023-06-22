import React from 'react'

const Form = () => {
  return (
    <form action="/" method="post">
        <label htmlFor="search">
            <i></i>
        </label>
        <input id='search' type="text" placeholder='Busque, por nome, linguagem ou tecnologias' />
    </form>
  )
}

export default Form