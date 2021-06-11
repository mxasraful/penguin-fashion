window.onload = () => {

    const homeProductItems = document.getElementById("homeProductItems")

    const womanJacketProducts = [
        {
            title: "Yellow Coat Jacket",
            price: 234,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            id: "CX8UKUDHSF348753H4CVJ38475Y3C8753538757FHJ",
            url: "yellow-coat-woman-jacket",
            img: "yellow-coat-woman-jacket.png"
        },
        {
            title: "Ladies Jacket",
            price: 234,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            id: "JJV459U6V4VOU698454I586Y7V44VLIJI5649V646",
            url: "ladies-woman-jacket",
            img: "ladies-woman-jacket.png"
        },
        {
            title: "Woman Leather Jacket",
            price: 234,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            id: "VB94I5V9045V6450C94I5790V64JTG984F0U6YJ4546",
            url: "woman-leather-woman-jacket",
            img: "woman-leather-woman-jacket.png"
        }
    ]

    const manJacketProducts = [
        {
            title: "Snowboard Jacket Mens",
            price: 234,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            id: "C24532CXU395838C9U534987DFC5384C75C34553C54",
            url: "snowboard-jacket-mens",
            img: "snowboard-jacket-mens.png"
        },
        {
            title: "Man Leather Jackets",
            price: 234,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            id: "3C563V645632C45I86N959O578I7J56H78O67ION768",
            url: "man-leather-jacket",
            img: "man-leather-jacket.png"
        },
        {
            title: "Man Casual Jacket",
            price: 234,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            id: "C34598763495C634986FUCRJTGV48936UY43UV89634U",
            url: "man-casual-jacket",
            img: "man-casual-jacket.png"
        }
    ]

    // homeProductItems.innerHTML = manJacketProducts.map(element =>
    //     `<div class="col-sm-4 home-product-item mb-5">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <div class="product-item-img text-center">
    //                             <img class="card-img img-fluid" alt="product img" src="./products-images/${element.img}">
    //                         </div>
    //                         <div class="product-item-content">
    //                             <h4 class="product-item-title title-color text-bold mt-3 mb-4"><strong>${element.title}</strong></h4>
    //                             <span class="text-secendery">${element.description}</span>
    //                             <div class="product-item-price-and-buy-now-btn d-flex mt-4">
    //                                 <h2 class="product-item-price color me-auto"><strong>$${element.price}</strong> </h2>
    //                                 <a href="./../product/${element.url}" class="btn main-btn">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    //                                         fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
    //                                         <path
    //                                             d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    //                                     </svg>
    //                                     <span>BUY NOW</span>
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>`
    // )

    // const productItem = (dt) => {
    //     `<div class="col-sm-4 home-product-item mb-5">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <div class="product-item-img text-center">
    //                             <img class="card-img img-fluid" alt="product img" src="./products-images/${dt.img}">
    //                         </div>
    //                         <div class="product-item-content">
    //                             <h4 class="product-item-title title-color text-bold mt-3 mb-4"><strong>${dt.title}</strong></h4>
    //                             <span class="text-secendery">${dt.description}</span>
    //                             <div class="product-item-price-and-buy-now-btn d-flex mt-4">
    //                                 <h2 class="product-item-price color me-auto"><strong>$${dt.price}</strong> </h2>
    //                                 <a href="./../product/${dt.url}" class="btn main-btn">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    //                                         fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
    //                                         <path
    //                                             d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    //                                     </svg>
    //                                     <span>BUY NOW</span>
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>`
    // }


}