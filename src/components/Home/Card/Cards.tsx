interface CardTypes {
  icon: React.ReactNode,
  title: string,
  content: string
  variant?:string
}

const Card = ({icon, title, content, variant}: CardTypes) => {
  return (
    <div className={`card ${variant}`}>
      {icon}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Card