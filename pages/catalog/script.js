// let response = await fetch("./books.json");
// let books = await response.json();

// console.log(books[0])

fetch("./books.json", { mode: "no-cors" }) //path to the file with json data
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    poehaliNahui(data);
  });

function poehaliNahui(books) {
  // console.log(books)
  const body = document.querySelector("body");
  const booksMap = books.reduce((acc, book) => ({...acc, [book.itemId]: book}) , {})
  console.log(booksMap);
  let cartBookIDs = [];

  body.insertAdjacentHTML("afterbegin", createUI());

  function createUI() {
    return `<header class="header_sticky">
    <div class="header_sticky__container">
        <a class="header__logo logo" href="#">
            <div class="logo__img"></div>
            <div class="logo__title"></div>
        </a>
        <nav class="header__nav nav">
            <a class="nav__link current" href="#">Catalog</a>
            <a class="nav__link" href="#">Categories</a>
            <a class="nav__link" href="#">Special Offers</a>
            <a class="nav__link" href="#">Delivery</a>
            <a class="nav__link" href="#">Random Book</a>
            <div class="nav__link nav__link_cart-icon" >
                Cart
                <div class="cart-icon">
                    <div class="cart__value">0</div>
                </div>
            </div>
            </div>
        </nav>
    </div>
</header>
<main>
<div class="cart__menu">
    <div class="cart__container">
        <h2 class="cart__title">Your cart:</h2>
        <div class="cart__cards_container"></div>
        <h3 class="cart__total">Total price:</h3>
        <a class="card__button button_confirm" href="../order/">Confirm order</a>
    </div>
</div>
<div class="page__header">
    <div class="page__header__container">
        <h1 class="header__title">Catalog</h1>
        <div class="header__switch-tabs">
            <div class="switch-tab tab_active">
                <div class="all-icon"></div>
                All items</div>
            <div class="switch-tab">
                <div class="sale-icon"></div>
                Sale</div>
        </div>
    </div>
</div>
<section class="catalog">
<div class="catalog__container"></div>
</section>
<div class="popup__container">
<div class="popup__card">
<div class="card__text">
    <div class="card__top">
        <h2 class="card__title"></h2>
        <h3 class="card__author"></h3>
        <div class="card__img__container">
            <img class="card__img" src="">
        </div>
    </div>
    <div class="card__bottom">
        <div class="card__bottom_right">
            <h4 class="card__price popup__price"></h4>
            <button class="card__button">Add to cart</button>
        </div>
    </div>
</div>
<div class="card__aside">
    <div class="popup__close card__button"><img class="close-icon" src="../../assets/icons/close_white.png"></div>
    <div class="card__description"></div>
</div>
</div>
</div>
<div class="cart__img__container">
    <img class="card__img" src="">
</div>
</div>
</div>
</main>
<footer class="footer">
    <div class="footer__container">
        <nav class="footer__nav nav">
            <a class="nav__link" href="#">Contact us</a>
            <a class="nav__link" href="#">Categories</a>
            <a class="nav__link" href="#">Special Offers</a>
            <a class="nav__link" href="#">Delivery</a>
            <a class="nav__link" href="#">How to order</a>
            <a class="nav__link" href="#">FAQ</a>
        </nav> 
        <div class="footer__contacts">
            <a class="footer__logo logo" href="#">
                <div class="logo__img"></div>
            </a>
            <div class="footer__socials">
                <a class="social__link"><img class="social__img" src="../../assets/icons/instagram.svg"/>Instagram</a>
                <a class="social__link"><img class="social__img" src="../../assets/icons/youtube.svg"/>YouTube</a>
                <a class="social__link"><img class="social__img" src="../../assets/icons/twitter.svg"/>Twitter</a>
                <a class="social__link"><img class="social__img" src="../../assets/icons/git_hub.svg"/>GitHub</a>
            </div>
        </div>
        <div class="footer__coryright">
            <div class="copyright">Copyright © 2022-2023</div>
            <a class="developed" href="https://github.com/olyalass">Designed and Developed by Olya Lass</a>
        </div>
    </div>
</footer>`;
  }

  const catalogContainer = document.querySelector(".catalog__container");

  function createBookCard({ title, imageLink, author, price, itemId }) {
    return ` <div class="catalog__card" data-id="${itemId}">
    <div class="card__img__container">
        <img class="card__img" src="${imageLink}">
    </div>
    <div class="card__text">
        <div class="card__top">
            <h2 class="card__title">${title}</h2>
            <h3 class="card__author">by ${author}</h3>
        </div>
        <div class="card__bottom">
            <div class="card__extra">Show more +</div>
            <div class="card__bottom_right">
                <h4 class="card__price">Price: ${price}$</h4>
                <button class="card__button add_button" data-id="${itemId}" ><img class="button__icon" src="../../assets/icons/add_cart.svg"><p>Add to cart</p></button>
            </div>
        </div>
    </div>
</div>`;
  }

  function createBookPopup({ title, imageLink, author, price, description }){
    return`<div class="popup__card">
                <div class="card__text">
                    <div class="card__top">
                        <h2 class="card__title">${title}</h2>
                        <h3 class="card__author">by ${author}</h3>
                        <div class="card__img__container">
                            <img class="card__img" src="${imageLink}">
                        </div>
                    </div>
                    <div class="card__bottom">
                        <div class="card__bottom_right">
                            <h4 class="card__price popup__price">Price: ${price}$</h4>
                            <button class="card__button">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="card__aside">
                    <div class="popup__close card__button"><img class="close-icon" src="../../assets/icons/close_white.png"></div>
                    <div class="card__description">${description}</div>
                </div>
            </div>`;
  };

  const cartButton = document.querySelector(".nav__link_cart-icon");
  const cartElement = document.querySelector(".cart__menu");
  

  cartButton.addEventListener("click", (e) => {
    e.stopPropagation();
    cartElement.classList.toggle("cart_open");
  });

  document.addEventListener("click", (e) => {
    console.log(e)
    if (cartElement.classList.contains("cart_open")) {
      const openedCartElement = e.target.closest(".cart__menu");
      console.log(openedCartElement)

      if (!openedCartElement && !e.target.classList.contains("add_button")) {
        cartElement.classList.remove("cart_open");
      }
    }
  });

  const booksCardsElements = books.map(createBookCard);

  function createAllBookCards(booksCardsElements) {
    booksCardsElements.forEach((book) => {
      catalogContainer.insertAdjacentHTML("beforeend", book);
    });
  };

  createAllBookCards(booksCardsElements);

  function createCartBookCard({ title, imageLink, author, price}) {
    return `<div class="cart__card">
      <div class="card__text">
          <div class="card__top">
              <h3 class="card__title">${title}</h3>
              <h4 class="card__author">${author}</h4>

          </div>
          <h4 class="card__price cart__price">Price: ${price}$</h4>
          <button class="card__button button_remove"><img class="button__icon" src="../../assets/icons/remove.svg"><p>Remove</p></button>
      </div>
      <div class="cart__img__container">
          <img class="card__img" src="${imageLink}">
      </div>
    </div>`
  }

  

  const addButtons = document.querySelectorAll(".add_button");
  const cartContainer = document.querySelector(".cart__cards_container");

  for (let button of addButtons) {
    button.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const bookId = button.dataset["id"]
      addBookToCard(bookId)
    })
  };

  function updateCartCount() {
    const cartValueNode = document.querySelector(".cart__value");
    cartValueNode.textContent = cartBookIDs.length;
  }

  function addBookToCard(bookId) {
    cartBookIDs.push(bookId);
    const container = document.createElement("div");
    container.insertAdjacentHTML("beforeend", createCartBookCard(booksMap[bookId]))
    const cartBookNode = container.firstChild;
    updateCartCount()

    cartBookNode.querySelector(".button_remove").addEventListener("click", (e) => {
      e.stopPropagation();
      cartBookNode.remove();
      const firstBookIdIndex = cartBookIDs.indexOf(bookId);
      cartBookIDs = [...cartBookIDs.slice(0, firstBookIdIndex), ...cartBookIDs.slice(firstBookIdIndex+1)]
      updateCartCount()
    })
    cartContainer.appendChild(cartBookNode)
  }

  const detailsButtons = document.querySelectorAll(".card__extra");
  const popupContainer = document.querySelector(".popup__container");

  popupContainer.querySelector(".popup__close").addEventListener("click", () => {
    popupContainer.style.display = "none";
  })

  function openPopup(book) {
    popupContainer.style.display = "block";
    popupContainer.querySelector(".card__title").textContent = book.title
    popupContainer.querySelector(".card__author").textContent = `by ${book.author}`
    popupContainer.querySelector(".popup__price").textContent = `Price: ${book.price}$`
    popupContainer.querySelector(".card__img").src = book.imageLink
    popupContainer.querySelector(".card__description").textContent = book.description
  }
 
  

  for (let book of document.querySelectorAll(".catalog__card")) {
    const bookId = book.dataset["id"]

    book.querySelector(".card__extra").addEventListener("click", () => {
      openPopup(booksMap[bookId])
    })
  }

}
