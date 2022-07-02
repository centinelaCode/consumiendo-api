
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=d35d8e6c-cd01-43b9-a89c-0d006f547885';
const boton = document.querySelector('#btn');

boton.addEventListener('click', () =>{
  reload(API_URL);
})

const reload = async() => {
  // Fetch con async/await
  const res = await fetch(API_URL);
  const data = await res.json();

  // urlImage = data[0].url;
  console.log(res);
  console.log(data);
  
  // elementos HTML
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  const img3 = document.querySelector('#img3');
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;  
}

reload(API_URL);















// Fetch con promise
  // fetch(URL)
  //   .then(res => res.json())
  //   .then(data => {
  //     const img = document.querySelector('img');
  //     img.src = data[0].url;
  //   });