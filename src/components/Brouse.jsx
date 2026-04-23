
import Header from './Header'
import useNowPlaying from './hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopular from './hooks/usePopular';
import useUpcoming from './hooks/useUpcoming';
import useTopRated from './hooks/useTopRated';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Brouse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch) 
  useNowPlaying();
  usePopular();
  useUpcoming();
  useTopRated();

 
  return (
    <div>
      <Header/>{
        showGptSearch?(<GptSearch/>):<> 
          <MainContainer/>
       <SecondContainer/>
       </>
      }
      
    
          </div>
  )
}

export default Brouse
