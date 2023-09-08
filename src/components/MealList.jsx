import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardImage, CCardBody, CButton, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';

import React, { useState } from 'react';

function MealList({ meals }) {
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddMeal = (mealId, price) => {
    const mealIndex = selectedMeals.findIndex((meal) => meal.id === mealId);

    if (mealIndex !== -1) {
      const updatedMeals = [...selectedMeals];
      updatedMeals[mealIndex].quantity++;
      setSelectedMeals(updatedMeals);
    } else {
      setSelectedMeals([...selectedMeals, { id: mealId, price, quantity: 1 }]);
    }

    updateTotalPrice(); // Update total price here
  };

  const handleRemoveMeal = (mealId) => {
    const mealIndex = selectedMeals.findIndex((meal) => meal.id === mealId);

    if (mealIndex !== -1) {
      const updatedMeals = [...selectedMeals];
      if (updatedMeals[mealIndex].quantity > 1) {
        updatedMeals[mealIndex].quantity--;
      } else {
        updatedMeals.splice(mealIndex, 1);
      }
      setSelectedMeals(updatedMeals);
      updateTotalPrice(); // Update total price here
    }
  };

  const updateTotalPrice = () => {
    const newTotalPrice = selectedMeals.reduce((acc, meal) => acc + meal.price * meal.quantity, 0);
    setTotalPrice(newTotalPrice);
  };

  return (
    <>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}>

        {
          meals.map((meal) => (

            <div key={meal.id} style={{
              display: 'flex'
            }}>

              <CCard className="mb-3" style={{ maxWidth: '540px' }}>
                <CRow className="g-0">
                  <CCol md={4} style={{ objectFit: 'cover' }}>
                    <CCardImage src={meal.img} />
                  </CCol>
                  <CCol md={8}>
                    <CCardBody>
                      <CCardTitle>{meal.title}</CCardTitle>
                      <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.

                        {/* {
                        meal.drinks.map((drink) => (
                          <>
                            <CCardTitle>{drink.title}</CCardTitle>
                            <p>{drink.price}</p>
                          </>
                        ))
                      } */}
                        <p>Price: ${meal.price}</p>
                      </CCardText>

                      <CButton onClick={() => handleRemoveMeal(meal.id)}>-</CButton>

                      <CCardText>

                        {
                          selectedMeals.map((selectedMeal) =>
                            selectedMeal.id === meal.id ? (
                              <div key={selectedMeal.id}>
                                <p>Selected: ${selectedMeal.price} (Quantity: {selectedMeal.quantity})</p>
                                {/* <button onClick={() => handleRemoveMeal(meal.id)}>-</button> */}
                              </div>
                            ) : null
                          )
                        }
                      </CCardText>



                      <CButton onClick={() => handleAddMeal(meal.id, meal.price)}>+</CButton>

                    </CCardBody>
                  </CCol>
                </CRow>
              </CCard>

            </div>

          ))
        }


        {/* <div>
        <h3>Total Price: ${totalPrice}</h3>
      </div> */}

      </div>
      <br />
      <div>
        <h3>Total Price: ${totalPrice}</h3>
      </div>

    </>

  );
}

export default MealList;

