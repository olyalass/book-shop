const body = document.querySelector("body");

body.insertAdjacentHTML("afterbegin", createUI());

function createUI() {
    return `<header class="header_sticky">
    <div class="header_sticky__container">
        <a class="header__logo logo" href="#">
            <div class="logo__img"></div>
            <div class="logo__title"></div>
        </a>
        <nav class="header__nav nav">
            <a class="nav__link" href="../catalog/">Catalog</a>
            <a class="nav__link" href="#">Categories</a>
            <a class="nav__link" href="#">Special Offers</a>
            <a class="nav__link" href="#">Delivery</a>
            <a class="nav__link" href="#">Random Book</a>
            <a class="nav__link nav__link_cart-icon" href="#">
                Cart
                <div class="cart-icon">
                    <div class="cart__value">0</div>
                </div>
            </a>
        </nav>
    </div>
</header>
<main>
    <div class="page__header">
        <div class="page__header__container">
            <h1 class="header__title">Complete your order</h1>
        </div>
    </div>
    <section class="info">
        <div class="info__container">
        <div class="customer-info">
            <form class="customer-info__container">
                <h2>Customer information</h2>
                <div class="info__item">Order is for: 
                    <div class="radio__item">
                        <input class="radio__input" type="radio" name="reciever" checked="checked" id="radio-me">
                        <label class="radio__label" for="radio-someone"><img class="label__img" src="../../assets/icons/me.svg"> me </label>
                    </div>
                    <div class="radio__item">
                        <input class="radio__input" type="radio" name="reciever" id="radio-someone">
                        <label class="radio__label" for="radio-someone"><img class="label__img" src="../../assets/icons/gift.svg"> someone else </label>
                    </div>
                </div>
                <div class="info__item info__item__container">
                    <label class="input__box__label" for="input-name"><img class="label__img" src="../../assets/icons/name.svg">Name: </label>
                    <div class="info__item_box">
                        <input id="input-name" name="name" class="input_long input__box" type="text" pattern="\\S{4,}" required>
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>
                <div class="info__item info__item__container">
                    <label  class="input__box__label"for="input-surname"><img class="label__img" src="../../assets/icons/name.svg">Surname: </label>
                    <div class="info__item_box">
                        <input id="input-surname" name="surname" class="input_long input__box" type="text" pattern="\\S{5,}" required>
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>
                <div class="info__item info__item__container">
                    <label class="input__box__label" for="input-street"><img class="label__img" src="../../assets/icons/street.svg">Street: </label>
                    <div class="info__item_box">
                        <input id="input-street" name="street" class="input_long input__box" type="text" pattern="[\\sa-zA-Z0-9_-]{5,}$" required></label>
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>
                <div class="info__item info__item__container">
                    <label class="input__box__label" for="input-house"><img class="label__img" src="../../assets/icons/building.svg">House number: </label>
                    <div class="info__item_box">
                        <input id="input-house" name="house" class="input_short input__box input_number" type="text" pattern="[1-9]+[0-9]*$" required>
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>
                <div class="info__item info__item__container">
                    <label class="input__box__label" for="input-block"><img class="label__img" src="../../assets/icons/block.svg">Block (if any): </label>
                    <div class="info__item_box">
                        <input id="input-block" name="block" class="input_short input__box" type="text" pattern="[A-Za-z]{1}$|[1-9]{1}[0-9]?$">
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>
                <div class="info__item info__item__container">
                    <label class="input__box__label" for="input-apprt"><img class="label__img" src="../../assets/icons/appartment.svg">Apartment: </label>
                    <div class="info__item_box">
                        <input id="input-apprt" name="apprt" class="input_short input__box input_number" type="text" pattern="[1-9]+[0-9-]*$" required>
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>
        
                <div class="info__item info__item__container">
                    <label class="input__box__label" for="input-date"><img class="label__img" src="../../assets/icons/delivery.svg">Delivery Date: </label>
                    <div class="info__item_box">
                        <input id="input-date" name="date" class="input_long input__box" type="date" required>
                        <img class="valid-icon" src="../../assets/icons/valid.svg">
                        <img class="invalid-icon" src="../../assets/icons/invalid.svg">
                    </div>
                </div>

                <div class="info__item">Payment method: 
                    <div class="radio__item">
                        <input class="radio__input" type="radio" name="payment" id="radio-cash">
                        <label class="radio__label" for="radio-cash">
                            <img class="label__img" src="../../assets/icons/cash.svg">
                        Cash 
                        </label>
                    </div>
                    <div class="radio__item">
                        <input class="radio__input" type="radio" name="payment" checked="checked" id="radio-card">
                        <label class="radio__label" for="radio-card">
                            <img class="label__img" src="../../assets/icons/card.svg">
                        Card 
                        </label>
                    </div>
                </div>
                <div class="info__item">Choose up to 2 free options:
                    <div class="checkbox__item"><input class="checkbox__input" type="checkbox" id="gift"><label for="gift" class="checkbox__label"><img class="label__img" src="../../assets/icons/gift.svg">Pack as a gift</label></div>
                    <div class="checkbox__item"><input class="checkbox__input" type="checkbox" id="postcard"><label for="postcard" class="checkbox__label"><img class="label__img" src="../../assets/icons/postcard.svg">Add a postcard</label></div>
                    <div class="checkbox__item"><input class="checkbox__input" type="checkbox" id="discount"><label for="discount" class="checkbox__label"><img class="label__img" src="../../assets/icons/discount.svg">2% discount for next order</label></div>
                    <div class="checkbox__item"><input class="checkbox__input" type="checkbox" id="pencil"><label for="pencil" class="checkbox__label"><img class="label__img" src="../../assets/icons/pencil.svg">Branded pen or pencil</label></div>
                </div>
                <input class="card__button" type="submit" value="Complete" disabled>
            </form>   
        </div>
        <div class="order-info">
            <h2>Order information</h2>
            <div class="order-info__container">
                <div class="order-info__list">
                    <ol class="order-info__items">
                        <li>JavaScript: The Good Parts by Douglas Crockford</li>
                        <li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li>
                        <li>Delivery</li>
                    </ol>
                    <ul class="order-info__prices">
                        <li>30$</li>
                        <li>22$</li>
                        <li>10$</li>
                    </ul>
                </div>
                <h3>Total: 62$</h3>
            </div>
        </div>
        </div>
    </section>
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
</footer>`
};

const checkboxInputElements = document.querySelectorAll(".checkbox__input");

let checkboxCounter = 0
for (const checkbox of checkboxInputElements) {
    checkbox.addEventListener("click", (e) => {
        if (checkboxCounter >= 2 && e.target.checked) {
            e.preventDefault();
            return
        }
        checkboxCounter = e.target.checked ? checkboxCounter + 1 : checkboxCounter - 1;
    })
}
let dateValidity = false;

function enableSubmit(){
    
    isValid=true;
    for (let inputElement of inputElements) {
        if(!inputElement.checkValidity()) isValid = false;
    }
    console.log(isValid, dateValidity)
    if (isValid && dateValidity) {
        submitElement.disabled = false
    }
};

const dateInputElement = document.getElementById("input-date");

dateInputElement.addEventListener("input", () => {
    const dateInputValue = dateInputElement.value;
    const now = new Date();
    const nowDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
    if( dateInputValue > nowDate) {
        console.log("valid");
        dateInputElement.classList.remove("invalid_box");
        dateInputElement.classList.add("valid_box");
        dateValidity = true;
    } else {
        console.log ("invalid");
        dateInputElement.classList.remove("valid_box");
        dateInputElement.classList.add("invalid_box");
        dateValidity = false;
    }
})

const submitElement = document.querySelector(".card__button");
let inputElements = document.querySelectorAll("input");

for (let elem of inputElements) {
    elem.addEventListener("change", () => {
        enableSubmit();
    })
}



const form = document.querySelector("form.customer-info__container");
const nameInput = document.getElementById("input-name");
const surnameInput = document.getElementById("input-surname");
const streetInput = document.getElementById("input-street");
const houseInput = document.getElementById("input-house");
const blockInput = document.getElementById("input-block");
const apprtInput = document.getElementById("input-apprt");
const dateInput = document.getElementById("input-date");


form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(nameInput.value)
    console.log(surnameInput.value)
    console.log(streetInput.value)
    console.log(houseInput.value)
    console.log(blockInput.value)
    console.log(apprtInput.value)
    console.log(dateInput.value)
    alert (`Thank you for the order! It will be delivered to ${nameInput.value} ${surnameInput.value} at ${streetInput.value} ${houseInput.value} ${blockInput.value}, aprt. ${apprtInput.value} on ${dateInput.value}`)
})