import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import styles from "../../styles/Home.module.css"

function Cards(props)
{
   
    
    return(<>
          <div className={styles.body}>
            <a className={styles.link} target='_self' href={"/pokedex/" + props.pokemon.name}>
          <Card  sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="250"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            image={props.pokemon.image}
            alt={props.pokemon.name}
            className={styles.containerImg}
        />
        <CardContent>
            <Typography className={styles.containerName}  variant="h6" component="div">
            {props.pokemon.name}
            </Typography>
            <Typography  className={styles.containerType} variant="body2" color="text.secondary">
            {props.pokemon.types.slice(0,2).map(type =>(<div className={styles.typeStyle} style={{paddingLeft:"2.5rem" ,color: "#ffffff"}}>{type}</div>))}
           </Typography>
        
            
        </CardContent>
        </CardActionArea>
        </Card></a>
            
   </div>   

         
    </>
    );
}

export default Cards;
