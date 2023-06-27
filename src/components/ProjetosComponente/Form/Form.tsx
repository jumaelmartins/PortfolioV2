import Input from './Input/Input'

interface formTypes {
  icon: React.ReactNode,
  id: string,
  placeholder: string,
}

const Form = ({icon, id, placeholder}: formTypes) => {
  return (
    <form autoComplete='off' className={id} action="/">
        <label  htmlFor={id}>
            <i>{icon}</i>
        </label>
        <Input placeholder={placeholder} id={id}/>
    </form>
  )
}

export default Form