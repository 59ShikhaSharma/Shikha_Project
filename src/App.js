// // import FoodPreview from "./components/FoodPreview";

// // function App() {

// //   return (
// //     <>
// //       {/* <FoodPreview data={data} itemsPerPage={5}/> */}


// //     </>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import MealList from './components/MealList';
// import TagFilter from './components/TagFilter';
// import PersonList from './components/PersonList';
// import TotalPrice from './components/TotalPrice';
// import data from './data'; // Mock data

// function App() {

//   const [filteredMeals, setFilteredMeals] = useState(data.meals);
//   const [selectedMeals, setSelectedMeals] = useState({});
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Filter meals based on selected tags
//   const filterMeals = (selectedTags) => {

//     if (selectedTags.length === 0) {
//       setFilteredMeals(data.meals);
//     }
//     else {
//       const filtered = data.meals.filter((meal) =>
//         meal.labels.some((label) => selectedTags.includes(label))
//       );
//       setFilteredMeals(filtered);
//     }

//   };

//   // Handle meal selection for each person
//   const selectMeal = (personId, mealId) => {
//     const updatedSelection = { ...selectedMeals };
//     updatedSelection[personId] = mealId;
//     setSelectedMeals(updatedSelection);

//     // Calculate total price
//     const newTotalPrice = Object.values(updatedSelection)
//       .map((mealId) => data.meals.find((meal) => meal.id === mealId).price)
//       .reduce((acc, val) => acc + val, 0);
//     setTotalPrice(newTotalPrice);
//   };

//   return (
//     <div >
      
//       <h1>Food and Drink Ordering App</h1>
      
//       <div className="filters" style={{display: 'flex',justifyContent:'space-around'}}>
        
        

//         <div ><MealList meals={filteredMeals} /></div>
//         <div><TagFilter tags={data.labels} filterMeals={filterMeals} /></div>



//         {/* <PersonList people={data.people} meals={filteredMeals} selectMeal={selectMeal} /> */}
//       </div>

//       {/* <TotalPrice totalPrice={totalPrice} /> */}

//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import MealList from './components/MealList';
import TagFilter from './components/TagFilter';
import PersonList from './components/PersonList';
import TotalPrice from './components/TotalPrice';
import data from './data'; // Mock data
import './App.css'; // Import your CSS file

function App() {
  // Your existing code...


  const [filteredMeals, setFilteredMeals] = useState(data.meals);
  const [selectedMeals, setSelectedMeals] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Filter meals based on selected tags
  const filterMeals = (selectedTags) => {

    if (selectedTags.length === 0) {
      setFilteredMeals(data.meals);
    }
    else {
      const filtered = data.meals.filter((meal) =>
        meal.labels.some((label) => selectedTags.includes(label))
      );
      setFilteredMeals(filtered);
    }

  };

  // Handle meal selection for each person
  const selectMeal = (personId, mealId) => {
    const updatedSelection = { ...selectedMeals };
    updatedSelection[personId] = mealId;
    setSelectedMeals(updatedSelection);

    // Calculate total price
    const newTotalPrice = Object.values(updatedSelection)
      .map((mealId) => data.meals.find((meal) => meal.id === mealId).price)
      .reduce((acc, val) => acc + val, 0);
    setTotalPrice(newTotalPrice);
  };


  return (
    <div>
      <h1>Food and Drink Ordering App</h1>
      <div className="filters">
        <div><TagFilter tags={data.labels} filterMeals={filterMeals} /></div>
      </div>
      <br /><br />
      <div><MealList meals={filteredMeals} /></div>

      
    </div>
  );
}

export default App;
