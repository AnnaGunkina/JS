"use strict";

function getProductsList() {
  return JSON.parse(json).goods;
}

function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5000,
      "img": "/Shop/img/product1.jpg"
    },
    {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5100,
      "img": "/Shop/img/product2.jpg"
    },
    {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5200,
      "img": "/Shop/img/product3.jpg"
    },
    {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5300,
      "img": "/Shop/img/product4.jpg"
    },
    {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5400,
      "img": "/Shop/img/product5.jpg"
    },
    {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "name": "ELLERY X M'O CAPSULE",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": 5550,
      "img": "/Shop/img/product6.jpg"
    }
  ]
}`;
