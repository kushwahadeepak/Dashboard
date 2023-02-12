// import {useEffect} from 'react'
// import {  useNavigate} from "react-router-dom"
import Navbar from './Navbar'

const Home = () => {
  // const navigate = useNavigate();
  // useEffect(()=>{
  // let name =sessionStorage.getItem('name');
  // if(name === "" || name === null){
  //   navigate('/logauth');
  // }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
    <Navbar/>
    <h1>Home</h1>
    </>
  )
}

export default Home