import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';
const FrontCard = (props) => {
    const { setSide } = props;
    const contentStyle = {
        // border: "1px solid black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
    const nextButton = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50px",
        backgroundColor: "grey",
        opacity: 0.2,
        position: "absolute",
        height: "10vh",
        width: "5vw",
        right: "15%",
        top: "45%"
    }
    return(
        <div style={contentStyle}>
            <h1>Hello,</h1>
            <h2>I'm KEVIN CHEN</h2>
            <h3>A Full-Stack Developer</h3>
            <div style={nextButton} onClick={() => setSide((prev) => !prev)} ><NavigateNextIcon /></div>
        </div>
    );
}
const BackCard = (props) => {
    const { setSide } = props;
    const nextButton = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50px",
        backgroundColor: "grey",
        opacity: 0.2,
        position: "absolute",
        height: "10vh",
        width: "5vw",
        left: "15%",
        top: "45%"
    }
    return(
        <div>
            <div style={nextButton} onClick={() => setSide((prev) => !prev)} ><NavigateBeforeIcon /></div>
        </div>
    );
}
const Home = () => {
    const [side, setSide] = useState(true);
    const outerLayer = {
        boxSizing: "border-box",
        padding: "10vh 10vw",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw"
    }
    const innerLayer = {
        boxSizing: "border-box",
        borderRadius: "50px",
        backgroundColor: "white",
        width: "80vw",
        height: "80vh",
        padding: "5%"
    }
    return(
        <div style={outerLayer}>
            <div style={innerLayer}>
                {side ? <FrontCard setSide={setSide} /> : <BackCard setSide={setSide} />}
            </div>
        </div>
    );
}

export default Home;
