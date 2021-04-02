import './App.css';
// import { Mealsapp } from './meals/Mealsapp';
// import Menuapp from './menu/Menuapp';
// import Learning1 from './Learning1';
// import Sdata from './Sdata';
// import Learning2 from './learnings/learning2'
// import TourApp from './tour/TourApp'
// import Reviewsapp from './reviews/Reviewsapp'
// import Questionapp from './questions/Questionapp'
// import Tabsapp from './tabs/Tabsapp'
// import Todoapp from './todos/Todoapp';
import Form from './addcomp/form/Form'
function App() {
  return (
    <div className="App">
{/* 
learning1
{ Sdata.map(function ncard(value){
  return <Learning1
  key={value.id}
  imgsrc={value.imgsrc}
 category={value.category}
 sname={value.sname}
 link={value.link}/>
})} */}
{/* <Learning2/> */}
{/* <TourApp/> */}
{/* <Reviewsapp/> */}
{/* <Questionapp/> */}
{/* <Menuapp/> */}
{/* <Tabsapp/> */}
{/* <Todoapp/> */}
{/* <Mealsapp/> */}
<Form/>
    </div>
  );
}

export default App;
