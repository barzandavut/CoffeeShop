const menu = {
    coffees: {
        hotCoffees: [
            {id: 1, name: "Caffè Americano", price: 120, stock: true},
            {id: 2, name: "Cortado", price: 120, stock: true},
            {id: 3, name: "Fresh Filter Coffee", price: 120, stock: true},
            {id: 4, name: "Caffè Misto", price: 120, stock: true},
            {id: 5, name: "Caffè Latte", price: 130, stock: true},
            {id: 6, name: "Cramel Latte", price: 140, stock: true},
            {id: 7, name: "Vanilla Latte", price: 140, stock: true},
            {id: 8, name: "Pumpkin Spice Latte", price: 140, stock: true},
            {id: 9, name: "Salted Caremel Latte", price: 140, stock: true},
            {id: 10, name: "Cramel Macchiato", price: 140, stock: true},
            {id: 11, name: "Cappuccino", price: 130, stock: true},
            {id: 12, name: "Flat White", price: 130, stock: true},
            {id: 13, name: "Espresso Macchiato", price: 130, stock: true},
            {id: 14, name: "Caffè Mocha", price: 140, stock: true},
            {id: 15, name: "White Chocolate Mocha", price: 140, stock: true},
            {id: 16, name: "Chai Tea Latte", price: 130, stock: true}
        ],
        coldCoffees: [
            {id: 17, name: "Iced Caffè Americano ", price: 120, stock: true},
            {id: 18, name: "Iced Coffee", price: 120, stock: true},
            {id: 19, name: "Iced Cofffee with Misto", price: 120, stock: true},
            {id: 20, name: "Cold Brew", price: 120, stock: true},
            {id: 21, name: "Iced Latte", price: 130, stock: true},
            {id: 22, name: "Iced Caremal Latte", price: 140, stock: true},
            {id: 23, name: "Iced Vanilla Latte", price: 140, stock: true},
            {id: 24, name: "Iced Pumpin Spice Latte", price: 140, stock: true},
            {id: 25, name: "Iced Salted Cramel Latte", price: 140, stock: true},
            {id: 26, name: "Iced Cramel Macchiato", price: 140, stock: true},
            {id: 27, name: "Iced Cappuccino", price: 130, stock: true},
            {id: 28, name: "Iced Flat Wahite", price: 130, stock: true},
            {id: 29, name: "Iced Espresso Macchiato", price: 130, stock: true},
            {id: 30, name: "Iced Caffe Mocha", price: 140, stock: true},
            {id: 31, name: "Iced White Chocolate Mocha", price: 140, stock: true},
            {id: 32, name: "Iced Chai Tea Latte", price: 130, stock: true},
            {id: 33, name: "Java Chip Frappuccino", price: 150, stock: true},
            {id: 34, name: "Cramel Frappuccino", price: 150, stock: true},
            {id: 35, name: "Whiite Chocolate Frappuccino", price: 150, stock: true},
            {id: 36, name: "Strawberries Cream Frappuccino", price: 150, stock: true},
            {id: 37, name: "Cramel Cream Frappuccino", price: 150, stock: true},
        ]
    },
    Refresha: [
        {id: 38, name: "Berry Hibiscus Refresha", price: 140, stock: true},
        {id: 39, name: "Orange Mango Refresha", price: 140, stock: true},
        {id: 40, name: "Cool Lime Refresha", price: 140, stock: true},
        {id: 41, name: "Mango Dragonfruit Refresha", price: 140, stock: true},
        {id: 42, name: "Frozen Mango Dragon Latte", price: 140, stock: true},
    ]
};

let siparisler = [];
// Sipariş Ekleme
function siparisEkle (id) {
    const coffee = 
    menu.coffees.coldCoffees.find(coffee => coffee.id === id) ||
    menu.coffees.hotCoffees.find(coffee => coffee.id === id) ||
    menu.Refresha.find(refresha => refresha.id === id);
    if(coffee) {
        siparisler.push(coffee);
    }
}
// Fiş oluşturma
function fisOlusturma() {
    let toplam = 0;
    let fisMetni = "";

    siparisler.forEach(siparis => {
        fisMetni += `<u>Ürün adı:</u> ${siparis.name} - Fiyatı: ${siparis.price} ₺<br>`;
        toplam += siparis.price;
    });

    fisMetni += `<strong> <u>Toplam:</u> ${toplam} ₺ </strong>`;
    document.getElementById("goster").innerHTML = fisMetni;
}

// Id arama
function arama() {
    const id = parseInt(document.getElementById("search").value);
    siparisEkle(id);
    fisOlusturma();
};

    // Tüm ürünleri birleştir (sadece id, name, price)
    const tumUrunler = [
        ...menu.coffees.hotCoffees,
        ...menu.coffees.coldCoffees,
        ...menu.Refresha
    ].map(({id, name, price}) => ({id, name, price}));

    const menuList = document.getElementById("menuList");

    // İki sütun
    const col1 = document.createElement("div");
    col1.className = "col-4";

    const col2 = document.createElement("div");
    col2.className = "col-4";

    const col3 = document.createElement("div");
    col3.className = "col-4";

    // Ortadan böl
    const middle = Math.ceil(tumUrunler.length / 3);

    tumUrunler.forEach((item, index) => {
        const p = document.createElement("p");
        p.textContent = `${item.id} - ${item.name} (${item.price} ₺)`;
        if (index < middle) {
            col1.appendChild(p);
        } else if (index < middle * 2) {
            col2.appendChild(p);
        } else  {
            col3.appendChild(p);
        }
    });

    // Row
    menuList.appendChild(col1);
    menuList.appendChild(col2);
    menuList.appendChild(col3);

