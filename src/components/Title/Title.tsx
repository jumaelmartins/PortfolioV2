interface TitleTypes {
    content: string
}


const Title = ({content}: TitleTypes) => {
  return (
    <h2>{content}</h2>
  )
}

export default Title