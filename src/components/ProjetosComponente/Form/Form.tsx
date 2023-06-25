import Input from './Input/Input'

const Form = () => {
  return (
    <form action="/" method="post">
        <label htmlFor="search">
            <i></i>
        </label>
        <Input id='search'/>
    </form>
  )
}

export default Form