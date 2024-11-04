import List from './List.js';
import './index.css';
function App() {
  const fruits = [
    { id:1,name: 'apple', calories: 100 },
    { id:2,name: 'banana', calories: 200 },
    { id:3,name: 'orange', calories: 10220 },
    { id:4,name: 'kiwi', calories: 111100 },
    { id:5,name: 'watermelon', calories: 1010 }
  ];
  const vegetables = [
    { id:6,name: 'potatoes', calories: 100 },
    { id:7,name: 'celery', calories: 200 },
    { id:8,name: 'carrots', calories: 10220 },
    { id:9,name: 'corn', calories: 111100 },
    { id:10,name: 'broccoli', calories: 1010 }
 
  ];

  return (<>
  {fruits.length >0  &&  <List items = {fruits} category = 'Fruits'/> 
  }
    {vegetables.length >0 &&  
     <List items = {vegetables} category = 'Vegetables'/>}
  </>
 
  )
};

export default App;
