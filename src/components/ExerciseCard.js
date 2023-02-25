import React from 'react'
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Typography,Chip,Gre} from '@mui/material'
import { red } from '@mui/material/colors'

const ExerciseCard = ({exercise}) => {
  return (
    <Card sx={{ maxWidth: 250 ,borderRadius:2,mt:2}} elevation={9} >
        <CardActionArea >
        <CardMedia
            component="img"
            image={exercise.gifUrl}
            alt="exercise"
            sx={{ maxWidth: "100%",
                height: "auto"}}
            loading="lazy"    
        />
        <CardContent >
            <Chip color="info" label={exercise.target} />
            <Chip color="warning" label={exercise.bodyPart} sx={{ml:"10px"}}/>
            <Typography sx={{fontWeight:'bold',textTransform:"capitalize",mt:"10px"}}>{exercise.name}</Typography>
            

        </CardContent>
        
        </CardActionArea>
    </Card>
    
  )
}

export default ExerciseCard