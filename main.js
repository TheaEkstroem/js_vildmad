//https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg





const urlParams = new URLSearchParams(window.location.search);
//
const productsURL = `https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg`;

/* fetch(productsURL)
.then(res =>res.json())
.then(showData)

 */

fetch(productsURL)
    .then((response) => response.json())
    .then(showProducts);


function showProducts(products) {
  // Looper og kalder funktionen showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // Fang element
  productTemplate = document.querySelector(".productTemplate").content;

  // Lav en kopi
  productClone = productTemplate.cloneNode(true);

// 
productClone.querySelector(".title").textContent = product.title;
productClone.querySelector(".sankelandskab").textContent = product.sankelandskab_title;
productClone.querySelector(".seasons").textContent = product.seasons;
productClone.querySelector(
    ".img"
  ).src = `https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg/${product.img}.webp`;


 // Appende
 productList = document.querySelector(".productList");
 productList.appendChild(productClone);

}


/* 
function showData(data){
    console.log(data);
    data.forEach(item=>{


        
        klon.querySelector(".title").textContent = item.title;
        klon.querySelector(".sankelandskab").textContent = item.sankelandskab_title;
        klon.querySelector(".seasons").textContent = item.seasons;

        productClone.querySelector(
            ".img"
          ).src = `https://qmsbtkywuyypiccoicuh.supabase.co/rest/v1/vildmadData?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtc2J0a3l3dXl5cGljY29pY3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTIwNjIsImV4cCI6MjAyMzM4ODA2Mn0.ruBzrTmBPlUx5T2mRJdyOT7s0dFnzWJ2DGvaUyf8dQg/${data.id}.webp`;
        
    })
}
function showProduct(items) {
    console.log(product);
    // Fang element
    productTemplate = document.querySelector(".productTemplate").content;
  
    // Lav en kopi
    productClone = productTemplate.cloneNode(true);
} */