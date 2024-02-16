import Image from "../assets/MyPhoto.jpg"

export default function Home() {
    return (
    <div className="personal-container">
    <img className="personal-photo" src={Image} alt="Photo of me" />
    <div className="personal-info">
        <h1 className="personal-title">Welcome to my Portfolio...</h1>
        <p className="personal-text">Hi, my name is Tom. Welcome to my portfolio. I'm a 24 year old aspiring front-end web developer. I have a passion for coding and love to design and bring websites to life. Have a browse of my projects, and feel free to get into contact with me!</p>
    </div>
    </div>
    )
}