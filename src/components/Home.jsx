import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="container">
                <h2>Welcome to the (Insert name here)!</h2>
                <p>
                    Insert descrptive paragraph about what the blogs about
                </p>
                <Link role="button" to="/posts">View the latest posts &nbsp;&#10140;</Link>
            </section>
        </>
    );
};

export default Home;