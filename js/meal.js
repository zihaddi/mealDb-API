

function loadMeal(named)
{
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${named}`)
  .then(res => res.json()) //json() ta hocche JSON.parse er moto kaj kore
  .then(datas => showMeals(datas.meals))
}



const showMeals = (meals) =>
{
  if(meals == null)
  {
    Swal.fire('Given Wrong Input')
  }
  else
  {
     const listSection =  document.getElementById('listSection')
     listSection.innerHTML = ''
     meals.forEach(meal => {
     const divl = document.createElement('div')
     divl.classList.add('col-4')
     divl.innerHTML = 
     `
     <div class="card">
     <img src=${meal.strMealThumb} class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0,200)}...</p>
     </div>
     </div>
     `
     listSection.appendChild(divl)
   });
  }
  
}



  const srcBtn = document.getElementById('src-button')
  srcBtn.addEventListener('click',function()
  {
    const innerTxt = document.getElementById('inputs')
    const submitValue = innerTxt.value;
    loadMeal(submitValue)
  })
