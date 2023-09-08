import React, { useState } from 'react';

function PersonList({ people, meals, selectMeal }) {
  const [selectedMeals, setSelectedMeals] = useState({});

  const handleMealSelection = (personId, mealId) => {
    const updatedSelection = { ...selectedMeals };
    updatedSelection[personId] = mealId;
    setSelectedMeals(updatedSelection);
    selectMeal(personId, mealId);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <select
            onChange={(e) => handleMealSelection(person.id, e.target.value)}
            value={selectedMeals[person.id] || ''}
          >
            <option value="">Select a meal</option>
            {meals.map((meal) => (
              <option key={meal.id} value={meal.id}>
                {meal.title}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
