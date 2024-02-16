import Project from "./Project"
import OnlineCalculator from "../assets/online-calculator.png"
import CodingQuiz from "../assets/coding-quiz.png"
import EtchASketch from "../assets/etch-a-sketch.png"
import PasswordGenerator from "../assets/password-generator.png"
import LastMinuteHoliday from "../assets/last-minute-holiday.jpg"
import WeatherApp from "../assets/weather-app.png"

export default function Projects() {

    return (
        <>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-text">Here you'll find a list of my projects, visit the GitHub link for more info or visit the deployed link to see it in action!</p>
        <div className="project-card-container">
        <Project name="Odin Calculator" github="https://github.com/tg-ivy/odin-calculator" deployed="https://tg-ivy.github.io/odin-calculator/" screenshot={OnlineCalculator}></Project>

        <Project name="Password Generator" github="https://github.com/tg-ivy/toms-password-generator" deployed="https://tg-ivy.github.io/toms-password-generator/" screenshot={PasswordGenerator}></Project>

        <Project name="Last Minute Holiday" github="https://github.com/tg-ivy/same-day-holiday" deployed="https://tg-ivy.github.io/same-day-holiday/" screenshot={LastMinuteHoliday}></Project>

        <Project name="Coding Quiz" github="https://github.com/tg-ivy/toms-coding-quiz" deployed="https://tg-ivy.github.io/toms-coding-quiz/" screenshot={CodingQuiz}></Project>

        <Project name="Etch-A-Sketch" github="https://github.com/tg-ivy/etch-a-sketch" deployed="https://tg-ivy.github.io/etch-a-sketch/" screenshot={EtchASketch}></Project>

        <Project name="Weather App" github="https://github.com/tg-ivy/toms-weather-app" deployed="https://tg-ivy.github.io/toms-weather-app/" screenshot={WeatherApp}></Project>
        </div>
        </>
    )
}
