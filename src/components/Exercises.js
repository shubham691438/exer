import React,{ useState }from 'react'
import {Box,Stack,Typography,Pagination} from '@mui/material'
import ExerciseCard from './ExerciseCard'

const Exercises = ({setExercise,exercises,BodyPart}) => {

  
  const exercisePerPage=15
  const pageCount=Math.ceil(exercises.length/exercisePerPage);
  let currPageExercises=exercises.slice(0,exercisePerPage)

  const [page,setPage]=useState(1)

  const StartExerciseNo=(page-1)*exercisePerPage;
  const endExerciseNo=page*exercisePerPage
  currPageExercises=exercises.slice(StartExerciseNo,endExerciseNo)
  const paginate=(e,value)=>{
    
    setPage(value); 
    window.scrollTo({top:"1600",behavior:"smooth"})
  }
  
  return (
    <Box  sx={{ml:{xs:"50px"},mr:{xs:"50px"}}}>
      <Typography variant="h2" sx={{color:"rgb(255, 38, 37)"}}>Showing Results</Typography>
      <Stack justifyContent="space-between" direction="row" flexWrap="wrap">
      {
        currPageExercises.map((exercise)=>(
          <ExerciseCard key={exercise.id} exercise={exercise}/>
        ))
      }
      </Stack>
      {
        exercises.length>exercisePerPage && (  <Stack mt={5} alignItems="center" >
        <Pagination count={pageCount} page={page} color="primary" defaultPage={1} onChange={paginate} size="large"/>
        </Stack>)
      }
     
     
    </Box>
  )
}

export default Exercises
