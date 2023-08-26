import * as React from "react";
import { FiArrowUpRight, FiInstagram } from "react-icons/fi";
import { HeadFC, Link } from "gatsby";
import { Header, Main, Footer } from "../styles";

export default function HomePage() {
    return (
        <>
            <Header>
                <h3>Alpha.Digital</h3>
            </Header>

            <Main>
                <div className="phrase">
                    <p>Let's make an unforgettable project together right now.</p>
                    <p className="services">Websites, landpages, e-commerces, and more.</p>
                </div>

                <Link to="mailto:contact@thealpha.com.br">
                    <p>Start a project</p>

                    <FiArrowUpRight />
                </Link>

                <div></div>
            </Main>

            <Footer>
                <p className="email">contact@thealpha.com.br</p>

                <a href="#" className="instagram">
                    <FiInstagram className="icon" /> @Alpha.Digital
                </a>
            </Footer>
        </>
    );
}

export const Head: HeadFC = () => <title>Alpha.Digital</title>;
