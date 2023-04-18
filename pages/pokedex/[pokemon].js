import { ClassNames } from "@emotion/react";
import { Card } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../../styles/DetailsPage.module.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import { Row,Col, Label } from "react-bootstrap";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {GET_PROPERTIES}  from "../graphql/fetchPokemon";
import css from "../../styles/Home.module.css"




function Profile() {
    const router = useRouter();
    const { pokemon } = router.query;
    const data = useQuery(GET_PROPERTIES,{variables : {name : `${pokemon}`}})



    if(!data || !data.data) return <div>Loading...</div>
    const result = data.data.pokemon

     const weaknessList =  result.weaknesses.map((weakness) =><span>{weakness}</span>);
     const resistanceList =  result.resistant.map((resistant) =><span>{resistant}</span>);
    
    return (<><Card sx={{ maxWidth: 850 }} id={styles.card} className={styles.container}>
        <h1 style={{padding:"5px"}} >{result.name}</h1>
        <Row>
            <Col>
                        <Card  sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                image= {result.image}
                                alt= "name"
                                className={styles.containerImg}
                            />
                            <CardContent>
                                <p className={styles.containerName}  variant="h6" component="div">
                                </p>
                                
                            
                            </CardContent>
                          </CardActionArea>
                       </Card>
            </Col>
            <Col>
        
        <div  className={css.containerType} variant="body2" color="text.secondary"> 
        
        {weaknessList}
        </div>
        <div  className={css.containerType} variant="body2" color="text.secondary">
            {resistanceList}
        </div>
        <div  className={css.containerType} variant="body2" color="text.secondary"> 
        <span >{result.weight.maximum}</span>
        </div>
        <div  className={css.containerType} variant="body2" color="text.secondary"> 
        <span >{result.height.maximum}</span>
        </div>
    
            </Col>
        </Row>
        <Button >Evalution INFO</Button>
    </Card>
        
     </>
    )};
export default Profile;