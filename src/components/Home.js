import React from 'react'
import {Jumbotron,Container} from "react-bootstrap"

function Home ()  {
    return (
        <div>
            <h1 style={{marginTop:'30px'}}>HOME PAGE</h1>
            <Jumbotron fluid>
                <Container>
                    <h3 style={{marginTop:'100px'}}>Hi everyone...</h3>
                    <p>
                   <h3> This is a sample backend project. This is a news app which uses the data from various apis to provide you with 
                    daily news from various categories. I have used react to integrate backend and the frontend. 
                    All the apis used are available at newsapi.org. This is just a simple project for the diversification of my 
                    portfolio. 
                    The site is deployed on a heroku server.
                    </h3>
                    <h3>Thanks :)</h3>
                    </p>
                    <div style={{margin:'60px'}}>
                   <h4> Developer: Aditya Bajpai </h4>
                    <h4>Email: adityabajpai21901@gmail.com</h4>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;