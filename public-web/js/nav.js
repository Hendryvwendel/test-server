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
                <a href="#"><img src="img/cart.png" alt=""></a>
                <a href="signup.html"><img src="img/user.png" alt=""></a>
            </div>
        </div>
        
        <ul class="links-container">
            <li class="link-item"><a href="./index.html" class="link">Home</a></li>
            <li class="link-item"><a href="./prodpage.html" class="link">Kabels</a></li>
            <li class="link-item"><a href="#" class="link">Adapters</a></li>
            <li class="link-item"><a href="#" class="link">Draadloos</a></li>
            <li class="link-item"><a href="#" class="link">Stekkerdozen</a></li>
        </ul>
        
        <ul class="mobile-container">
            <li class="menu-icon"><a href="./img/menu-icon.svg"></a></li>
                <li class="mobile-link-item"><a href="./index.html" class="link">Home</a></li>
                <li class="mobile-link-item"><a href="./prodpage.html" class="link">Kabels</a></li>
                <li class="mobile-link-item"><a href="#" class="link">Adapters</a></li>
                <li class="mobile-link-item"><a href="#" class="link">Draadloos</a></li>
                <li class="mobile-link-item"><a href="#" class="link">Stekkerdozen</a></li>
        </ul>
    `;
}

createNav();
