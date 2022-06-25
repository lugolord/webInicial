export function buildCard(obj, node) { // obj: object, node: DOM node

  const card = document.createElement('div');

  card.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'card');

  card.innerHTML = `

    <img src=${obj.img} class="card-img-top" alt=${obj.name}>

    <div class="card-body">
      <p class="card-text">${obj.name}</p>
      <p class="card-text">price: ${obj.price}</p>
      <p class="card-text">stock: ${obj.stock}</p>
      <button class="btn btn-primary">buy</button>
    </div>
  
  `;

  node.append(card);

}

