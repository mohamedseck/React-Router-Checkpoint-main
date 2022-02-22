import React,{useState} from 'react'
import './App.css';
import MovieList from './Components/List/MovieList'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import TrailerMovie from './Components/TrailerMovie/TrailerMovie';

const App = () => {
  const [movie,setMovie]=useState([
                                  { id:Math.random(),
                                    title:'Les 4 fantastiques',
                                    description:"Les déjantés de la comédie débarquent pour vous faire pleurer de rire. Partis d'un plan pour faire le buzz, ils héritent d'aventures aux multiples péripéties qui les mèneront dans les situations les plus rocambolesques. Malcom : Le comédien Fred : L’escroc Samir : L’aristo Dudu : Le geek.",
                                    posterURL:'http://marodi.tv/vignettesseries/les-4-fantastiques-1.jpg',
                                    rating:1,
                                    trailerURL:'https://www.youtube.com/watch?v=dhfJ2DRxvyQ'
                                  },
                                  { id:Math.random(),
                                    title:'Arret Mere Thiaba',
                                    description:"Arrêt Mére Thiaba, une nouvelle production de Marodi Tv. A partir du 09 Mars sur la TFM et sur Marodi TV.",
                                    posterURL:'http://marodi.tv/vignettesseries/arret-mere-thiaba-1.jpg',
                                    rating:4,
                                    trailerURL:'https://www.youtube.com/watch?v=dhfJ2DRxvyQ'
                                  },
                                  { id:Math.random(),
                                    title:'Virginie',
                                    description:"Virginie est une série qui relate l’histoire d’une jeune fille du nom de Virginie. Elle a 16 ans et c’est la chouchou de ses parents. Très brillante a l’école elle a toujours eu d’excellentes notes. Lauréate du prix du meilleur roman dans son centre, elle rafle tous les honneurs. Sa beauté, sa simplicité et sa politesse font d’elle une personne appréciée. ",
                                    posterURL:'http://marodi.tv/vignettesseries/virginie-1.jpg',
                                    rating:5,
                                    trailerURL:'https://www.youtube.com/watch?v=dhfJ2DRxvyQ'
                                  },
                                  { id:Math.random(),
                                    title:'Emprises',
                                    description:"Le Texas vit sous la terreur d'un tueur en série qui se fait appeler . Un soir, un homme sans histoire, Fenton Meiks, se présente au QG du FBI et déclare connaître l'identité du coupable. Ce dangereux criminel ne serait autre que son frère, Adam, qui vient de se suicider.",
                                    posterURL:'http://marodi.tv/vignettesseries/emprises-1.jpg',
                                    rating:3,
                                    trailerURL:'https://www.youtube.com/watch?v=dhfJ2DRxvyQ'
                                  },                      
                              ])

const[titleMovie,setTitleMovie] = useState('');
const[rateMovie,setRateMovie] = useState('');
  return (
    <div className="app">
    <BrowserRouter>
    <NavBar/>
    <Switch>
    
      <Route exact path='/' component={Home}/>
    
      <Route path='/movie' render={(props)=>
              <MovieList{...props} 
                movie={movie} 
                setMovie={setMovie} 
                titleMovie={titleMovie} 
                rateMovie={rateMovie} 
                setTitleMovie={setTitleMovie} 
                setRateMovie={setRateMovie}/>}
              />
      
      {/* <Route path='/trailer/:ID'>
        <TrailerMovie movie={movie}/>
      </Route> */}

      <Route path='/trailer/:ID' render={(props)=>
        <TrailerMovie {...props} movie={movie}/>}
      />
    
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App;