import React from 'react';
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

import Movies from "../components/Movies/Movies"
import SearchAndQuery from "../components/SearchAndQuery"
import Footer from "../components/Footer/Footer"
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
    const input = useSelector((state) => state.navigationBarReducer.input)
    const handleCreate = () => {
        navigate("/janky-Signin", {
            state: {
                message: input,
            }
        });
      };


    return (
        <>
            <Helmet>
                <meta name="description" content="Discover your favorite movies. The site provides important details such as the story, director, budget, featured cast, images, recommendations and trailers." />
            </Helmet>
            {input == "" ? <Movies /> : <SearchAndQuery />}
            <Footer />
        </>
    )
}

export default Home