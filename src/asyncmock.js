const products = [
    {
        id: "14",
        name : "Remera AntiSocial negra",
        description : "Remera Anti Social social club basica con estampa",
        color: "Negro",
        categoria: "Indumentaria",
        price : 3000,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/753/709/products/0c5f30e0ddbeadb58086e269bab9b2471-4e39b2928beef5a89416311245108561-1024-1024.jpg",
        

    },
    {
        id: "15",
        name : "Remera AntiSocial blanca",
        description : "Remera Anti Social social club basica con estampa",
        color: "blanco",
        categoria: "Indumentaria",
        price: 3000,
        img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/090/276/products/remera-anti-social-social-club-assc-aesthetic-tumblr-edgy-d_nq_np_688761-mla32203914944_092019-f1-824cd933d6a20a41c315888100293773-1024-1024.jpg",
    },
    {
        id: "24",
        name : "Nike Joran 1 mid",
        description : "Zapatillas nike Jordan 1 mid",
        color: "blanco y rojo",
        categoria: "Zapatillas",
        price: 34000,
        img: "https://media.restocks.net/products/554724-122/air-jordan-1-mid-gym-red-black-white-1-1000.png",
    },
    {
        id: "25",
        name : "Nike Joran 1 low",
        description : "Zapatillas nike Jordan 1 low",
        color: "blanco y gris",
        categoria: "Zapatillas",
        price: 29000,
        img: "https://m.media-amazon.com/images/I/51pbXeoxqzL._AC_UY395_.jpg",
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            resolve(products)
        },2000)
    })
}



