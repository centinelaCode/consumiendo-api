
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=d35d8e6c-cd01-43b9-a89c-0d006f547885';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=d35d8e6c-cd01-43b9-a89c-0d006f547885';
const boton = document.querySelector('#btn');
const spanError = document.querySelector('#error');

boton.addEventListener('click', () =>{
  loadRandomMichis(API_URL_RANDOM);
})

const loadRandomMichis = async() => {
  // Fetch con async/await
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();

  // urlImage = data[0].url;
  // console.log(res);
  console.log('Random')
  console.log(res);
  console.log(data);
  console.log('=================================================')
  
  if( res.status !== 200) {
    spanError.innerHTML = 'Error: ' + res.status;
  } else {    
    // elementos HTML
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
  
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

const loadFavoritesMichis = async() => {
  // Fetch con async/await
  const res = await fetch(API_URL_FAVORITES);
  const data = await res.json();

  console.log('Favorite')
  console.log(res)
  console.log(data)
  console.log('=================================================')
  
  
  if( res.status !== 200) {
    spanError.innerHTML = 'Error: ' + res.status + data.message;
  } else {
    // console.log('Favorite')
    // console.log(data)
  }
}

const saveFavoritesMichis = async () => {

  const res = await fetch(API_URL_FAVORITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'      
    },
    body: JSON.stringify({
      image_id: '6rk'
    })
  });

  const data = await res.json();

  console.log('Save')
  console.log(res);

  if( res.status !== 200) {
    spanError.innerHTML = 'Error: ' + res.status + data.message;
  } 

}

loadRandomMichis();
loadFavoritesMichis()









