const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="./img/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Zoek Merk, Product">
                    <button class="search-btn">Zoek</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Link2</a></li>
            <li class="link-item"><a href="#" class="link">Link_test</a></li>
            <li class="link-item"><a href="#" class="link">Link4</a></li>
        </ul>
    `;
}

createNav();
