
import Header from './Header'
import useNowPlaying from './hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopular from './hooks/usePopular';
import useUpcoming from './hooks/useUpcoming';
import useTopRated from './hooks/useTopRated';



const Brouse = () => {
  useNowPlaying();
  usePopular();
  useUpcoming();
  useTopRated();

 
  return (
    <div>
      <Header/>
       <MainContainer/>
       <SecondContainer/>
          </div>
  )
}

export default Brouse
