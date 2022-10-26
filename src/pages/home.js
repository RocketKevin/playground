const Home = () => {
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
    const contentStyle = {
        border: "1px solid black",
        width: "100%",
        height: "100%"
    }
    return(
        <div style={outerLayer}>
            <div style={innerLayer}>
                <div style={contentStyle}></div>
            </div>
        </div>
    );
}

export default Home;
