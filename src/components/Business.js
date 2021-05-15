import React , {useState,useEffect} from 'react';
import '../App.css';
import {Button} from "react-bootstrap"
import {Card,Container,Jumbotron,Spinner} from "react-bootstrap"



function Business (){

  const [data,setData] = useState([])
  
  useEffect(()=> {
    loadData()
  },[])
  
  const loadData= async() => {
    await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afa8dadd5ec040cfb75d780cce7c7fa8")
    .then(res=>res.json())
    .then((data)=>setData(data))
    .catch((err) => {
      console.log(err)
    })
  }
  const items=data.articles
  //console.log(data)
    let itemsToRender
    if(items){
      itemsToRender=
      items.map(item => {
        return(
          <div>
            <Jumbotron fluid>
              <Container style={{margin:'20px'}}>
                <Card key={item.publishedAt} style={{ width: '18rem',float:'right' }}>
                  <Card.Img variant="top" src={item.urlToImage} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.content}
                    </Card.Text>
                    <Button variant="primary" href={item.url}>Read More</Button>
                  </Card.Body>
                </Card>
              </Container>
            </Jumbotron>
          </div>
        )
    })
    }else{
      itemsToRender= <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                      </Spinner> 
    }
    return(
      <div>
        <h1>BUSINESS</h1>
        <div>{itemsToRender}</div>
      </div>
    )
}

export default Business;