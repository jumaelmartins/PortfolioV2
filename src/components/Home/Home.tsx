import Avatar from "./Avatar/Avatar";
import Title from "./Title/Title";

const Home = () => {
  return (
    <section id="inicio">
        <div>
            <Title/>
            <Avatar/>
        </div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>
  )
}

export default Home;