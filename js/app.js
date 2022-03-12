const loadMeals = () => {
    const searchInput = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals));
    
};

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    for(const meal of meals){
        console.log(meal);
        const mealDiv = document.createElement('div');
        const strInstructions = meal.strInstructions;
        console.log(strInstructions);
        mealDiv.innerHTML = `
        <div class="col" ">
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)} 
                        <p onclick="loadDetail(${meal.idMeal})" class="fw-bold text-decoration-none text-danger" id="detail-button"> ...See More </p>
                    </p>
                </div>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    }
   
};

 

function loadDetail(mealData) {
    // console.log(mealData);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealData}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetails(data.meals[0].strInstructions));
}


function displayMealDetails(data){
    console.log(data);
    const mealDetail = document.getElementById('2');
    mealDetail.innerHTML = data;
}