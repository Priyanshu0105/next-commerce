const products = [
    {
        "_id": "ObjectId('67b1a0010001')",
        "name": "Amul Taaza Toned Milk 1L",
        "slug": "amul-taaza-toned-milk-1l",
        "description": "Fresh toned milk, rich in calcium and vitamins",
        "price": 68,
        "mrp": 72,
        "discount": {
            "type": "percentage",
            "value": 5
        },
        "categories": [
            "groceries",
            "Dairy & Bakery",
            "Milk & Milk Products"
        ],
        "categoryIds": [
            "5",
            "5001"
        ],
        "attributes": {
            "brand": "Amul",
            "fat": "3%",
            "volume": "1L",
            "type": "Toned"
        },
        "variants": [],
        "ratings": {
            "average": 4.6,
            "count": 8450
        },
        "seller": {
            "sellerId": "SELLER2001",
            "name": "Amul Official"
        },
        "stock": 300,
        "isActive": true,
        "isReturnable": true,
        "shipping": {
            "weight": "1050g",
            "freeShipping": true,
            "estimatedDeliveryDays": 1
        },
        "seo": {
            "title": "Amul Taaza Toned Milk 1L",
            "keywords": [
                "amul milk",
                "toned milk",
                "fresh milk"
            ]
        },
        "createdAt": "2025-11-15T10:00:00Z",
        "updatedAt": "2026-01-09T10:00:00Z"
    },
    {
        "_id": "ObjectId('67b1a0010002')",
        "name": "Parle-G Original Glucose Biscuits 800g",
        "slug": "parle-g-glucose-biscuits-800g",
        "description": "Classic glucose biscuits - perfect tea-time snack",
        "price": 90,
        "mrp": 100,
        "discount": {
            "type": "percentage",
            "value": 10
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Biscuits & Cookies"
        ],
        "categoryIds": [
            "1",
            "1001"
        ],
        "attributes": {
            "brand": "Parle",
            "weight": "800g",
            "flavour": "Glucose"
        },
        "variants": [],
        "ratings": {
            "average": 4.8,
            "count": 15200
        },
        "seller": {
            "sellerId": "SELLER2002",
            "name": "Parle Products"
        },
        "stock": 800,
        "isActive": true,
        "isReturnable": true,
        "shipping": {
            "weight": "850g",
            "freeShipping": true,
            "estimatedDeliveryDays": 1
        },
        "seo": {
            "title": "Parle-G 800g Pack",
            "keywords": [
                "parle g",
                "glucose biscuits"
            ]
        }
    },
    {
        "_id": "ObjectId('67b1a0010003')",
        "name": "Fortune Sunflower Oil 5L",
        "slug": "fortune-sunflower-oil-5l",
        "description": "Light & healthy cooking oil, rich in Vitamin E",
        "price": 595,
        "mrp": 680,
        "discount": {
            "type": "percentage",
            "value": 12
        },
        "categories": [
            "groceries",
            "Cooking Essentials",
            "Edible Oils"
        ],
        "categoryIds": [
            "3",
            "3005"
        ],
        "attributes": {
            "brand": "Fortune",
            "volume": "5L",
            "type": "Refined Sunflower"
        },
        "variants": [],
        "ratings": {
            "average": 4.5,
            "count": 6700
        },
        "seller": {
            "sellerId": "SELLER2003",
            "name": "Adani Wilmar"
        },
        "stock": 120,
        "isActive": true,
        "isReturnable": true,
        "shipping": {
            "weight": "4600g",
            "freeShipping": true,
            "estimatedDeliveryDays": 2
        }
    },
    {
        "_id": "ObjectId('67b1a0010004')",
        "name": "Samsung Galaxy S24 256GB (Graphite)",
        "slug": "samsung-galaxy-s24-256gb-graphite",
        "description": "Flagship smartphone with Galaxy AI, 50MP camera & 120Hz display",
        "price": 74999,
        "mrp": 79999,
        "discount": {
            "type": "percentage",
            "value": 6
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ],
        "attributes": {
            "brand": "Samsung",
            "ram": "8GB",
            "storage": "256GB",
            "color": "Graphite"
        },
        "variants": [
            {
                "sku": "S24-GRP-256",
                "color": "Graphite",
                "price": 74999,
                "stock": 40
            }
        ],
        "ratings": {
            "average": 4.6,
            "count": 9200
        },
        "seller": {
            "sellerId": "SELLER1001",
            "name": "Samsung Official"
        },
        "stock": 65,
        "isActive": true,
        "isReturnable": true,
        "shipping": {
            "weight": "180g",
            "freeShipping": true,
            "estimatedDeliveryDays": 2
        }
    },
    {
        "_id": "ObjectId('67b1a0010005')",
        "name": "Nike Air Zoom Pegasus 40 Men's Running Shoes",
        "slug": "nike-air-zoom-pegasus-40-mens",
        "description": "Responsive running shoes with Zoom Air cushioning",
        "price": 11999,
        "mrp": 13999,
        "discount": {
            "type": "percentage",
            "value": 14
        },
        "categories": [
            "fashion",
            "Men",
            "Footwear"
        ],
        "categoryIds": [
            "20",
            "2004"
        ],
        "attributes": {
            "brand": "Nike",
            "type": "Running",
            "gender": "Men"
        },
        "variants": [
            {
                "sku": "NK-P40-BLK-9",
                "color": "Black",
                "size": "UK 9",
                "price": 11999,
                "stock": 18
            },
            {
                "sku": "NK-P40-BLU-10",
                "color": "Blue",
                "size": "UK 10",
                "price": 11999,
                "stock": 12
            }
        ],
        "ratings": {
            "average": 4.7,
            "count": 4100
        }
    },
    {
        "_id": "ObjectId('67b1a0010006')",
        "name": "Godrej Interio Engineered Wood Queen Size Bed",
        "slug": "godrej-engineered-wood-queen-bed",
        "description": "Stylish queen size bed with hydraulic storage",
        "price": 24999,
        "mrp": 31999,
        "discount": {
            "type": "percentage",
            "value": 22
        },
        "categories": [
            "furniture",
            "Bedroom",
            "Beds"
        ],
        "categoryIds": [
            "80",
            "8002"
        ],
        "attributes": {
            "brand": "Godrej",
            "size": "Queen",
            "material": "Engineered Wood"
        },
        "variants": [],
        "ratings": {
            "average": 4.4,
            "count": 890
        }
    },
    {
        "_id": "ObjectId('67b1a0010007')",
        "name": "Dettol Original Hand Wash 200ml Pump",
        "slug": "dettol-hand-wash-200ml",
        "description": "Germ protection hand wash with moisturizing agents",
        "price": 78,
        "mrp": 85,
        "discount": {
            "type": "percentage",
            "value": 8
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Bath & Hand Wash"
        ],
        "categoryIds": [
            "6",
            "6002"
        ],
        "attributes": {
            "brand": "Dettol",
            "volume": "200ml",
            "type": "Pump"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010008')",
        "name": "Tata Salt 1kg Pack",
        "slug": "tata-salt-1kg",
        "description": "Iodized vacuum evaporated salt",
        "price": 24,
        "mrp": 25,
        "discount": {
            "type": "percentage",
            "value": 4
        },
        "categories": [
            "groceries",
            "Cooking Essentials",
            "Salt, Sugar & Jaggery"
        ],
        "categoryIds": [
            "3",
            "3007"
        ],
        "attributes": {
            "brand": "Tata",
            "weight": "1kg",
            "type": "Iodized"
        }
    },
    {
        "_id": "ObjectId('67b1a0010009')",
        "name": "Boat Airdopes 141 Bluetooth Earbuds",
        "slug": "boat-airdopes-141",
        "description": "Wireless earbuds with 42H playtime & ENx Tech",
        "price": 1499,
        "mrp": 4499,
        "discount": {
            "type": "percentage",
            "value": 67
        },
        "categories": [
            "electronics",
            "Audio & Smart Home",
            "Headphones & Earbuds"
        ],
        "categoryIds": [
            "32",
            "3201"
        ],
        "attributes": {
            "brand": "Boat",
            "color": "Cider Cyan"
        },
        "variants": [
            {
                "sku": "BT-141-CYAN",
                "color": "Cider Cyan",
                "price": 1499,
                "stock": 120
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010010')",
        "name": "Biba Anarkali Kurta Set for Women",
        "slug": "biba-anarkali-kurta-set",
        "description": "Festive printed Anarkali with dupatta",
        "price": 1799,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 28
        },
        "categories": [
            "fashion",
            "Women",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "21",
            "2101"
        ],
        "attributes": {
            "brand": "Biba",
            "size": "M",
            "color": "Maroon"
        },
        "variants": [
            {
                "sku": "BBA-ANK-MRN-M",
                "size": "M",
                "price": 1799,
                "stock": 35
            },
            {
                "sku": "BBA-ANK-MRN-L",
                "size": "L",
                "price": 1799,
                "stock": 28
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010011')",
        "name": "Aashirvaad Superior MP Atta 10kg",
        "slug": "aashirvaad-superior-mp-atta-10kg",
        "description": "100% whole wheat atta for soft rotis",
        "price": 498,
        "mrp": 550,
        "discount": {
            "type": "percentage",
            "value": 9
        },
        "categories": [
            "groceries",
            "Cooking Essentials",
            "Atta, Flours & Sooji"
        ],
        "categoryIds": [
            "3",
            "3001"
        ],
        "attributes": {
            "brand": "Aashirvaad",
            "weight": "10kg",
            "type": "Whole Wheat"
        },
        "variants": [],
        "ratings": {
            "average": 4.6,
            "count": 11200
        },
        "seller": {
            "sellerId": "SELLER2004",
            "name": "ITC Foods"
        },
        "stock": 200,
        "isActive": true,
        "isReturnable": true,
        "shipping": {
            "weight": "10200g",
            "freeShipping": true,
            "estimatedDeliveryDays": 2
        }
    },
    {
        "_id": "ObjectId('67b1a0010012')",
        "name": "Haldiram's Bhujia Sev 1kg",
        "slug": "haldirams-bhujia-sev-1kg",
        "description": "Crispy and spicy traditional namkeen",
        "price": 298,
        "mrp": 350,
        "discount": {
            "type": "percentage",
            "value": 15
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ],
        "attributes": {
            "brand": "Haldiram's",
            "weight": "1kg",
            "flavour": "Bhujia"
        },
        "variants": [],
        "ratings": {
            "average": 4.7,
            "count": 8900
        }
    },
    {
        "_id": "ObjectId('67b1a0010013')",
        "name": "Red Label Tea 1kg",
        "slug": "red-label-tea-1kg",
        "description": "Strong and flavorful Brooke Bond tea",
        "price": 548,
        "mrp": 600,
        "discount": {
            "type": "percentage",
            "value": 9
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Tea & Coffee"
        ],
        "categoryIds": [
            "1",
            "1011"
        ],
        "attributes": {
            "brand": "Brooke Bond",
            "weight": "1kg",
            "type": "Black Tea"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010014')",
        "name": "Apple iPhone 15 128GB (Black)",
        "slug": "apple-iphone-15-128gb-black",
        "description": "Dynamic Island, 48MP camera, USB-C",
        "price": 65999,
        "mrp": 79900,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ],
        "attributes": {
            "brand": "Apple",
            "storage": "128GB",
            "color": "Black"
        },
        "variants": [
            {
                "sku": "IPH15-BLK-128",
                "color": "Black",
                "price": 65999,
                "stock": 50
            }
        ],
        "ratings": {
            "average": 4.8,
            "count": 15200
        }
    },
    {
        "_id": "ObjectId('67b1a0010015')",
        "name": "Puma RS-X3 Men's Sneakers",
        "slug": "puma-rs-x3-mens-sneakers",
        "description": "Bold and comfortable casual sneakers",
        "price": 5499,
        "mrp": 7999,
        "discount": {
            "type": "percentage",
            "value": 31
        },
        "categories": [
            "fashion",
            "Men",
            "Footwear"
        ],
        "categoryIds": [
            "20",
            "2004"
        ],
        "attributes": {
            "brand": "Puma",
            "gender": "Men",
            "type": "Casual"
        },
        "variants": [
            {
                "sku": "PMA-RSX-WHT-9",
                "color": "White",
                "size": "UK 9",
                "price": 5499,
                "stock": 30
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010016')",
        "name": "Wakefit Orthopaedic Memory Foam Mattress (Queen)",
        "slug": "wakefit-orthopaedic-mattress-queen",
        "description": "7-zone support, 10-year warranty",
        "price": 12999,
        "mrp": 18999,
        "discount": {
            "type": "percentage",
            "value": 32
        },
        "categories": [
            "furniture",
            "Bedroom",
            "Mattresses"
        ],
        "categoryIds": [
            "80",
            "8004"
        ],
        "attributes": {
            "brand": "Wakefit",
            "size": "Queen",
            "thickness": "8 inch"
        },
        "variants": [],
        "ratings": {
            "average": 4.5,
            "count": 21000
        }
    },
    {
        "_id": "ObjectId('67b1a0010017')",
        "name": "Colgate Strong Teeth Toothpaste 500g",
        "slug": "colgate-strong-teeth-500g",
        "description": "India's No.1 toothpaste with calcium boost",
        "price": 198,
        "mrp": 230,
        "discount": {
            "type": "percentage",
            "value": 14
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Oral Care"
        ],
        "categoryIds": [
            "6",
            "6003"
        ],
        "attributes": {
            "brand": "Colgate",
            "weight": "500g"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010018')",
        "name": "Daawat Rozana Gold Basmati Rice 5kg",
        "slug": "daawat-rozana-gold-basmati-5kg",
        "description": "Everyday basmati rice for aromatic biryani",
        "price": 448,
        "mrp": 520,
        "discount": {
            "type": "percentage",
            "value": 14
        },
        "categories": [
            "groceries",
            "Cooking Essentials",
            "Rice"
        ],
        "categoryIds": [
            "3",
            "3003"
        ],
        "attributes": {
            "brand": "Daawat",
            "weight": "5kg"
        }
    },
    {
        "_id": "ObjectId('67b1a0010019')",
        "name": "Sony WH-1000XM5 Wireless Headphones",
        "slug": "sony-wh-1000xm5-headphones",
        "description": "Industry-leading noise cancellation",
        "price": 29990,
        "mrp": 39990,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "electronics",
            "Audio & Smart Home",
            "Headphones & Earbuds"
        ],
        "categoryIds": [
            "32",
            "3201"
        ],
        "attributes": {
            "brand": "Sony",
            "type": "Over-ear",
            "color": "Black"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010020')",
        "name": "FabIndia Cotton Kurta Pajama Set (Men)",
        "slug": "fabindia-cotton-kurta-pajama-men",
        "description": "Comfortable handcrafted ethnic wear",
        "price": 2199,
        "mrp": 2999,
        "discount": {
            "type": "percentage",
            "value": 27
        },
        "categories": [
            "fashion",
            "Men",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "20",
            "2003"
        ],
        "attributes": {
            "brand": "FabIndia",
            "size": "L",
            "material": "Cotton"
        },
        "variants": [
            {
                "sku": "FBI-KP-WHT-L",
                "color": "White",
                "size": "L",
                "price": 2199,
                "stock": 40
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010021')",
        "name": "Bombay Dyeing Double Bedsheet with 2 Pillow Covers",
        "slug": "bombay-dyeing-double-bedsheet-set",
        "description": "100% cotton floral printed bedsheet",
        "price": 899,
        "mrp": 1499,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ],
        "attributes": {
            "brand": "Bombay Dyeing",
            "size": "Double",
            "material": "Cotton"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010022')",
        "name": "Philips Air Fryer HD9252/90",
        "slug": "philips-air-fryer-hd9252",
        "description": "Rapid Air technology, 4.1L capacity",
        "price": 7499,
        "mrp": 10995,
        "discount": {
            "type": "percentage",
            "value": 32
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Cooking Appliances"
        ],
        "categoryIds": [
            "34",
            "3402"
        ],
        "attributes": {
            "brand": "Philips",
            "capacity": "4.1L"
        }
    },
    {
        "_id": "ObjectId('67b1a0010023')",
        "name": "Wipro Garnet 20W LED Batten Light",
        "slug": "wipro-garnet-20w-led-batten",
        "description": "Cool daylight, 4ft tube light",
        "price": 499,
        "mrp": 799,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "home-lifestyle",
            "Home Decor",
            "Lights"
        ],
        "categoryIds": [
            "55",
            "5501"
        ],
        "attributes": {
            "brand": "Wipro",
            "wattage": "20W",
            "color": "Cool White"
        }
    },
    {
        "_id": "ObjectId('67b1a0010024')",
        "name": "Bosch 7kg Front Load Washing Machine",
        "slug": "bosch-7kg-front-load-washing-machine",
        "description": "EcoSilence Drive, Anti-Vibration",
        "price": 32999,
        "mrp": 44999,
        "discount": {
            "type": "percentage",
            "value": 27
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Washing Machines"
        ],
        "categoryIds": [
            "40",
            "4003"
        ],
        "attributes": {
            "brand": "Bosch",
            "capacity": "7kg",
            "type": "Front Load"
        }
    },
    {
        "_id": "ObjectId('67b1a0010025')",
        "name": "Pedigree Adult Dry Dog Food Chicken 10kg",
        "slug": "pedigree-adult-dog-food-10kg",
        "description": "Complete nutrition for adult dogs",
        "price": 2899,
        "mrp": 3499,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "home-lifestyle",
            "Pet Care",
            "Dogs"
        ],
        "categoryIds": [
            "69",
            "6903"
        ],
        "attributes": {
            "brand": "Pedigree",
            "weight": "10kg",
            "flavour": "Chicken"
        }
    },
    {
        "_id": "ObjectId('67b1a0010026')",
        "name": "Nilkamal Plastic Chair (Red)",
        "slug": "nilkamal-plastic-chair-red",
        "description": "Durable monsoon chair for indoor/outdoor",
        "price": 799,
        "mrp": 1199,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "furniture",
            "Living Room",
            "Seating"
        ],
        "categoryIds": [
            "83",
            "8303"
        ],
        "attributes": {
            "brand": "Nilkamal",
            "material": "Plastic",
            "color": "Red"
        }
    },
    {
        "_id": "ObjectId('67b1a0010027')",
        "name": "Eveready Ultima Rechargeable Torch",
        "slug": "eveready-ultima-torch",
        "description": "1000m range, 3000mAh battery",
        "price": 1499,
        "mrp": 2199,
        "discount": {
            "type": "percentage",
            "value": 32
        },
        "categories": [
            "home-lifestyle",
            "Home Decor",
            "Lights"
        ],
        "categoryIds": [
            "55",
            "5501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010028')",
        "name": "Classmate Long Notebook 300 Pages (Pack of 4)",
        "slug": "classmate-long-notebook-300-pages-pack4",
        "description": "Single line ruled notebooks",
        "price": 399,
        "mrp": 480,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "school-office-stationery",
            "Notebooks & Paper Products"
        ],
        "categoryIds": [
            "14",
            "14001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010029')",
        "name": "LG 1.5 Ton 5 Star Inverter Split AC",
        "slug": "lg-1-5-ton-5-star-ac",
        "description": "Dual inverter, AI convertible 6-in-1",
        "price": 48990,
        "mrp": 75990,
        "discount": {
            "type": "percentage",
            "value": 36
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Air Conditioners"
        ],
        "categoryIds": [
            "40",
            "4001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010030')",
        "name": "Manyavar Sherwani for Men",
        "slug": "manyavar-sherwani-men",
        "description": "Premium wedding sherwani with embroidery",
        "price": 14999,
        "mrp": 21999,
        "discount": {
            "type": "percentage",
            "value": 32
        },
        "categories": [
            "fashion",
            "Men",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "20",
            "2003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010031')",
        "name": "Saffola Gold Refined Oil 5L",
        "slug": "saffola-gold-refined-oil-5l",
        "description": "Blended rice bran & sunflower oil with LOSORB technology",
        "price": 799,
        "mrp": 950,
        "discount": {
            "type": "percentage",
            "value": 16
        },
        "categories": [
            "groceries",
            "Cooking Essentials",
            "Edible Oils"
        ],
        "categoryIds": [
            "3",
            "3005"
        ],
        "attributes": {
            "brand": "Saffola",
            "volume": "5L",
            "type": "Blended"
        },
        "variants": [],
        "ratings": {
            "average": 4.5,
            "count": 9800
        },
        "seller": {
            "sellerId": "SELLER2005",
            "name": "Marico Limited"
        },
        "stock": 180,
        "isActive": true,
        "isReturnable": true,
        "shipping": {
            "weight": "4700g",
            "freeShipping": true,
            "estimatedDeliveryDays": 2
        }
    },
    {
        "_id": "ObjectId('67b1a0010032')",
        "name": "Lays American Style Cream & Onion Chips 52g (Pack of 6)",
        "slug": "lays-cream-onion-chips-pack6",
        "description": "Crunchy potato chips with classic flavour",
        "price": 110,
        "mrp": 120,
        "discount": {
            "type": "percentage",
            "value": 8
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ],
        "attributes": {
            "brand": "Lay's",
            "pack": "6 x 52g",
            "flavour": "Cream & Onion"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010033')",
        "name": "Nestle Everyday Dairy Whitener 1kg",
        "slug": "nestle-everyday-dairy-whitener-1kg",
        "description": "Milk powder for tea and coffee",
        "price": 398,
        "mrp": 450,
        "discount": {
            "type": "percentage",
            "value": 12
        },
        "categories": [
            "groceries",
            "Dairy & Bakery",
            "Milk & Milk Products"
        ],
        "categoryIds": [
            "5",
            "5001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010034')",
        "name": "Mi Power Bank 20000mAh 50W",
        "slug": "mi-power-bank-20000mah-50w",
        "description": "Fast charging power bank with triple output",
        "price": 2999,
        "mrp": 3999,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Charger & Powerbanks"
        ],
        "categoryIds": [
            "30",
            "3003"
        ],
        "attributes": {
            "brand": "Xiaomi",
            "capacity": "20000mAh",
            "output": "50W"
        }
    },
    {
        "_id": "ObjectId('67b1a0010035')",
        "name": "Allen Solly Men's Formal Shirt",
        "slug": "allen-solly-mens-formal-shirt",
        "description": "Slim fit cotton shirt with spread collar",
        "price": 1299,
        "mrp": 2299,
        "discount": {
            "type": "percentage",
            "value": 43
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ],
        "attributes": {
            "brand": "Allen Solly",
            "size": "40",
            "color": "White"
        },
        "variants": [
            {
                "sku": "AS-FS-WHT-40",
                "size": "40",
                "price": 1299,
                "stock": 60
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010036')",
        "name": "Prestige Omega Deluxe Granite Dosa Tawa 30cm",
        "slug": "prestige-omega-deluxe-dosa-tawa-30cm",
        "description": "Non-stick tawa with induction base",
        "price": 999,
        "mrp": 1495,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Cookware"
        ],
        "categoryIds": [
            "50",
            "5001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010037')",
        "name": "Pampers Active Baby Diapers Large (Pack of 64)",
        "slug": "pampers-active-baby-diapers-large-64",
        "description": "Up to 12 hours absorption, extra dry layer",
        "price": 1099,
        "mrp": 1499,
        "discount": {
            "type": "percentage",
            "value": 27
        },
        "categories": [
            "groceries",
            "Mom & Baby Care",
            "Diapers & Wipes"
        ],
        "categoryIds": [
            "8",
            "8001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010038')",
        "name": "Whisper Ultra Clean Sanitary Pads XL+ (44 pads)",
        "slug": "whisper-ultra-clean-xl-plus-44",
        "description": "Long lasting protection with wings",
        "price": 399,
        "mrp": 475,
        "discount": {
            "type": "percentage",
            "value": 16
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Feminine Hygiene"
        ],
        "categoryIds": [
            "6",
            "6005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010039')",
        "name": "Dell Inspiron 14 Laptop (i5 13th Gen, 16GB, 512GB SSD)",
        "slug": "dell-inspiron-14-i5-13thgen",
        "description": "Lightweight laptop with FHD display",
        "price": 62990,
        "mrp": 79990,
        "discount": {
            "type": "percentage",
            "value": 21
        },
        "categories": [
            "electronics",
            "Computers & Accessories",
            "Laptops & Desktops"
        ],
        "categoryIds": [
            "33",
            "3301"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010040')",
        "name": "W Women's Rayon Kurti with Palazzos",
        "slug": "w-women-rayon-kurti-palazzo-set",
        "description": "Printed ethnic co-ord set",
        "price": 1199,
        "mrp": 2999,
        "discount": {
            "type": "percentage",
            "value": 60
        },
        "categories": [
            "fashion",
            "Women",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "21",
            "2101"
        ],
        "attributes": {
            "brand": "W",
            "size": "M"
        },
        "variants": [
            {
                "sku": "W-KP-BLU-M",
                "color": "Blue",
                "size": "M",
                "price": 1199,
                "stock": 80
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010041')",
        "name": "Bombay Shaving Company Beard Trimmer",
        "slug": "bombay-shaving-beard-trimmer",
        "description": "40 length settings, 90 min runtime",
        "price": 1299,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 48
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Men's Grooming"
        ],
        "categoryIds": [
            "6",
            "6006"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010042')",
        "name": "Milton Thermosteel Duo DLX 1000ml Flask",
        "slug": "milton-thermosteel-duo-1000ml",
        "description": "Double walled vacuum insulated flask",
        "price": 899,
        "mrp": 1195,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Flask, Bottle & Tiffin Boxes"
        ],
        "categoryIds": [
            "50",
            "5005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010043')",
        "name": "Samsung 32 inch HD Ready Smart LED TV",
        "slug": "samsung-32-inch-hd-smart-tv",
        "description": "Tizen OS, PurColor, HDR support",
        "price": 14990,
        "mrp": 22900,
        "discount": {
            "type": "percentage",
            "value": 35
        },
        "categories": [
            "electronics",
            "TV & Home Entertainment",
            "Televisions"
        ],
        "categoryIds": [
            "35",
            "3501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010044')",
        "name": "Sparx Men's Sports Shoes",
        "slug": "sparx-mens-sports-shoes",
        "description": "Lightweight running shoes with EVA sole",
        "price": 899,
        "mrp": 1299,
        "discount": {
            "type": "percentage",
            "value": 31
        },
        "categories": [
            "fashion",
            "Men",
            "Footwear"
        ],
        "categoryIds": [
            "20",
            "2004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010045')",
        "name": "Home Centre Printed Cushion Cover 40x40cm (Set of 5)",
        "slug": "home-centre-cushion-cover-set5",
        "description": "Polyester printed decorative covers",
        "price": 699,
        "mrp": 1199,
        "discount": {
            "type": "percentage",
            "value": 42
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Cushions & Cushion Covers"
        ],
        "categoryIds": [
            "51",
            "5105"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010046')",
        "name": "Britannia NutriChoice Digestive Biscuits 1kg",
        "slug": "britannia-nutrichoice-digestive-1kg",
        "description": "High fibre zero added sugar biscuits",
        "price": 249,
        "mrp": 300,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Biscuits & Cookies"
        ],
        "categoryIds": [
            "1",
            "1001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010047')",
        "name": "Godrej No.1 Lime & Aloe Vera Soap 150g (Pack of 5)",
        "slug": "godrej-no1-soap-pack5",
        "description": "Grade 1 soap with natural ingredients",
        "price": 149,
        "mrp": 185,
        "discount": {
            "type": "percentage",
            "value": 19
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Bath & Hand Wash"
        ],
        "categoryIds": [
            "6",
            "6002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010048')",
        "name": "Pigeon Favourite Induction Cooktop",
        "slug": "pigeon-favourite-induction-cooktop",
        "description": "1800W with 7 preset menus",
        "price": 1999,
        "mrp": 3495,
        "discount": {
            "type": "percentage",
            "value": 43
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Cooking Appliances"
        ],
        "categoryIds": [
            "34",
            "3402"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010049')",
        "name": "Campus Men's Running Shoes",
        "slug": "campus-mens-running-shoes",
        "description": "Mesh upper with phylon sole",
        "price": 999,
        "mrp": 1499,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "fashion",
            "Men",
            "Footwear"
        ],
        "categoryIds": [
            "20",
            "2004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010050')",
        "name": "Solimo Plastic Storage Containers 15L (Set of 2)",
        "slug": "solimo-storage-containers-15l-set2",
        "description": "Airtight multipurpose containers",
        "price": 799,
        "mrp": 1199,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Containers & Storage"
        ],
        "categoryIds": [
            "50",
            "5003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010051')",
        "name": "Tide Ultra Washing Powder 4kg + 2kg Free",
        "slug": "tide-ultra-washing-powder-6kg",
        "description": "Superior whiteness and stain removal",
        "price": 499,
        "mrp": 699,
        "discount": {
            "type": "percentage",
            "value": 29
        },
        "categories": [
            "groceries",
            "Home",
            "Detergents & Cleaners"
        ],
        "categoryIds": [
            "9",
            "9002"
        ],
        "attributes": {
            "brand": "Tide",
            "weight": "6kg (4kg + 2kg free)"
        },
        "variants": [],
        "ratings": {
            "average": 4.4,
            "count": 15200
        }
    },
    {
        "_id": "ObjectId('67b1a0010052')",
        "name": "Real Fruit Power Mixed Fruit Juice 1L (Pack of 2)",
        "slug": "real-mixed-fruit-juice-1l-pack2",
        "description": "100% fruit juice with no added sugar",
        "price": 199,
        "mrp": 240,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010053')",
        "name": "OnePlus Nord CE 4 128GB",
        "slug": "oneplus-nord-ce4-128gb",
        "description": "Snapdragon 7 Gen 3, 100W SUPERVOOC charging",
        "price": 24999,
        "mrp": 29999,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ],
        "attributes": {
            "brand": "OnePlus",
            "storage": "128GB",
            "color": "Dark Chrome"
        },
        "variants": [
            {
                "sku": "OP-NORDCE4-128-DK",
                "color": "Dark Chrome",
                "price": 24999,
                "stock": 80
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010054')",
        "name": "Levi's Men's Slim Fit Jeans",
        "slug": "levis-mens-slim-fit-jeans",
        "description": "Stretchable denim with mid-rise",
        "price": 1799,
        "mrp": 3499,
        "discount": {
            "type": "percentage",
            "value": 49
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ],
        "attributes": {
            "brand": "Levi's",
            "fit": "Slim",
            "waist": "32"
        },
        "variants": [
            {
                "sku": "LV-511-32-BLU",
                "color": "Blue",
                "size": "32",
                "price": 1799,
                "stock": 50
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010055')",
        "name": "Nilkamal Freedom Storage Cabinet",
        "slug": "nilkamal-freedom-storage-cabinet",
        "description": "Plastic cabinet with 4 shelves",
        "price": 4999,
        "mrp": 6999,
        "discount": {
            "type": "percentage",
            "value": 29
        },
        "categories": [
            "furniture",
            "Living Room",
            "Storages"
        ],
        "categoryIds": [
            "83",
            "8306"
        ],
        "attributes": {
            "brand": "Nilkamal",
            "material": "Plastic",
            "color": "Brown"
        }
    },
    {
        "_id": "ObjectId('67b1a0010056')",
        "name": "Lizol Floor Cleaner Citrus 2L",
        "slug": "lizol-floor-cleaner-citrus-2l",
        "description": "Kills 99.9% germs, leaves fresh fragrance",
        "price": 349,
        "mrp": 425,
        "discount": {
            "type": "percentage",
            "value": 18
        },
        "categories": [
            "groceries",
            "Home",
            "Detergents & Cleaners"
        ],
        "categoryIds": [
            "9",
            "9002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010057')",
        "name": "Bajaj Rex 500W Mixer Grinder (3 Jars)",
        "slug": "bajaj-rex-500w-mixer-grinder",
        "description": "Powerful motor with overload protection",
        "price": 2499,
        "mrp": 3999,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Juicers & Mixer Grinders"
        ],
        "categoryIds": [
            "34",
            "3403"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010058')",
        "name": "Peter England Men's Formal Trousers",
        "slug": "peter-england-formal-trousers-men",
        "description": "Slim fit poly-viscose trousers",
        "price": 999,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010059')",
        "name": "AmazonBasics Cotton Bath Towel Set (4 Pieces)",
        "slug": "amazonbasics-cotton-bath-towel-set4",
        "description": "Soft and absorbent 500 GSM towels",
        "price": 899,
        "mrp": 1499,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bathroom Linen"
        ],
        "categoryIds": [
            "51",
            "5103"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010060')",
        "name": "Cadbury Dairy Milk Silk Chocolate 150g (Pack of 4)",
        "slug": "cadbury-dairy-milk-silk-150g-pack4",
        "description": "Rich and creamy premium chocolate",
        "price": 599,
        "mrp": 720,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chocolates & Candies"
        ],
        "categoryIds": [
            "1",
            "1003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010061')",
        "name": "Havells Sprint LED 20W Ceiling Fan",
        "slug": "havells-sprint-led-ceiling-fan",
        "description": "Energy efficient with remote control",
        "price": 2999,
        "mrp": 4999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Fans & Air Coolers"
        ],
        "categoryIds": [
            "37",
            "3701"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010062')",
        "name": "Mamaearth Onion Hair Oil 150ml",
        "slug": "mamaearth-onion-hair-oil-150ml",
        "description": "Promotes hair growth and reduces hair fall",
        "price": 349,
        "mrp": 399,
        "discount": {
            "type": "percentage",
            "value": 13
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Hair Care"
        ],
        "categoryIds": [
            "6",
            "6001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010063')",
        "name": "Asian Paints Apcolite Premium Emulsion 20L (White)",
        "slug": "asian-paints-apcolite-emulsion-20l",
        "description": "Smooth finish interior wall paint",
        "price": 5499,
        "mrp": 6999,
        "discount": {
            "type": "percentage",
            "value": 21
        },
        "categories": [
            "industrial-professional-supplies",
            "Building Supplies & Tools"
        ],
        "categoryIds": [
            "73"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010064')",
        "name": "Liberty Boys School Shoes Black",
        "slug": "liberty-boys-school-shoes-black",
        "description": "Durable PVC sole school shoes",
        "price": 799,
        "mrp": 1199,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "fashion",
            "Boys",
            "Footwear"
        ],
        "categoryIds": [
            "23",
            "2303"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010065')",
        "name": "Funskool Monopoly Board Game",
        "slug": "funskool-monopoly-board-game",
        "description": "Classic family strategy game",
        "price": 699,
        "mrp": 999,
        "discount": {
            "type": "percentage",
            "value": 30
        },
        "categories": [
            "home-lifestyle",
            "Toys & Games",
            "Indoor & Board Games"
        ],
        "categoryIds": [
            "60",
            "6002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010066')",
        "name": "Eveready LED Bulb 10W (Pack of 6)",
        "slug": "eveready-led-bulb-10w-pack6",
        "description": "Cool daylight, 1000 lumens",
        "price": 499,
        "mrp": 900,
        "discount": {
            "type": "percentage",
            "value": 45
        },
        "categories": [
            "home-lifestyle",
            "Home Decor",
            "Lights"
        ],
        "categoryIds": [
            "55",
            "5501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010067')",
        "name": "Kellogg's Corn Flakes Original 1.2kg",
        "slug": "kelloggs-corn-flakes-1-2kg",
        "description": "Crispy golden flakes of corn",
        "price": 399,
        "mrp": 499,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Breakfast Cereals"
        ],
        "categoryIds": [
            "1",
            "1006"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010068')",
        "name": "Philips Hair Straightener BHS393",
        "slug": "philips-hair-straightener-bhs393",
        "description": "SilkPro Care, 10 temperature settings",
        "price": 1799,
        "mrp": 2495,
        "discount": {
            "type": "percentage",
            "value": 28
        },
        "categories": [
            "electronics",
            "Personal Care & Grooming Appliances",
            "Hair Dryers & Stylers"
        ],
        "categoryIds": [
            "31",
            "3102"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010069')",
        "name": "Raymond Men's Ethnic Kurta Pyjama Set",
        "slug": "raymond-ethnic-kurta-pyjama-men",
        "description": "Premium cotton festive wear",
        "price": 2499,
        "mrp": 3999,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "fashion",
            "Men",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "20",
            "2003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010070')",
        "name": "Sleepwell Spinetech Air Mattress (Queen)",
        "slug": "sleepwell-spinetech-air-mattress-queen",
        "description": "Luxury memory foam with air circulation",
        "price": 18999,
        "mrp": 25999,
        "discount": {
            "type": "percentage",
            "value": 27
        },
        "categories": [
            "furniture",
            "Bedroom",
            "Mattresses"
        ],
        "categoryIds": [
            "80",
            "8004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010071')",
        "name": "Surf Excel Matic Liquid Top Load 4L",
        "slug": "surf-excel-matic-liquid-top-load-4l",
        "description": "Specialized liquid detergent for top load washing machines",
        "price": 799,
        "mrp": 999,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Home",
            "Detergents & Cleaners"
        ],
        "categoryIds": [
            "9",
            "9002"
        ],
        "attributes": {
            "brand": "Surf Excel",
            "volume": "4L",
            "type": "Liquid"
        },
        "variants": [],
        "ratings": {
            "average": 4.5,
            "count": 12400
        }
    },
    {
        "_id": "ObjectId('67b1a0010072')",
        "name": "Red Bull Energy Drink 250ml (Pack of 4)",
        "slug": "red-bull-energy-drink-pack4",
        "description": "Gives you wings - caffeinated energy drink",
        "price": 449,
        "mrp": 480,
        "discount": {
            "type": "percentage",
            "value": 6
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010073')",
        "name": "boAt Rockerz 550 Wireless Headphones",
        "slug": "boat-rockerz-550-headphones",
        "description": "50mm drivers, 20H playback, physical noise isolation",
        "price": 1799,
        "mrp": 4999,
        "discount": {
            "type": "percentage",
            "value": 64
        },
        "categories": [
            "electronics",
            "Audio & Smart Home",
            "Headphones & Earbuds"
        ],
        "categoryIds": [
            "32",
            "3201"
        ],
        "attributes": {
            "brand": "boAt",
            "color": "Black"
        },
        "variants": [
            {
                "sku": "BT-R550-BLK",
                "color": "Black",
                "price": 1799,
                "stock": 150
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010074')",
        "name": "H&M Women's Cotton T-Shirt",
        "slug": "hm-women-cotton-tshirt",
        "description": "Basic round neck regular fit t-shirt",
        "price": 399,
        "mrp": 799,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Women",
            "Western Wear"
        ],
        "categoryIds": [
            "21",
            "2102"
        ],
        "attributes": {
            "brand": "H&M",
            "size": "M",
            "color": "White"
        },
        "variants": [
            {
                "sku": "HM-TS-WHT-M",
                "size": "M",
                "price": 399,
                "stock": 200
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010075')",
        "name": "Durian Engineered Wood Coffee Table",
        "slug": "durian-coffee-table-wood",
        "description": "Modern centre table with storage shelf",
        "price": 8999,
        "mrp": 14999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "furniture",
            "Living Room",
            "Tables"
        ],
        "categoryIds": [
            "83",
            "8307"
        ],
        "attributes": {
            "brand": "Durian",
            "material": "Engineered Wood"
        }
    },
    {
        "_id": "ObjectId('67b1a0010076')",
        "name": "Harpic Power Plus Toilet Cleaner 1L (Pack of 2)",
        "slug": "harpic-power-plus-1l-pack2",
        "description": "10x better cleaning, kills 99.9% germs",
        "price": 299,
        "mrp": 360,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Home",
            "Detergents & Cleaners"
        ],
        "categoryIds": [
            "9",
            "9002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010077')",
        "name": "Kent Grand Plus RO+UV+UF Water Purifier",
        "slug": "kent-grand-plus-water-purifier",
        "description": "9L storage, TDS controller, wall mount",
        "price": 15999,
        "mrp": 21999,
        "discount": {
            "type": "percentage",
            "value": 27
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Water Purifiers"
        ],
        "categoryIds": [
            "37",
            "3702"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010078')",
        "name": "Van Heusen Men's Slim Fit Shirt",
        "slug": "van-heusen-slim-fit-shirt-men",
        "description": "Wrinkle-free cotton formal shirt",
        "price": 1499,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010079')",
        "name": "Spaces Double Bed Dohar AC Blanket",
        "slug": "spaces-double-dohar-blanket",
        "description": "Lightweight reversible cotton dohar",
        "price": 999,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010080')",
        "name": "Haldiram's Aloo Bhujia 1kg",
        "slug": "haldirams-aloo-bhujia-1kg",
        "description": "Spicy potato sev namkeen",
        "price": 299,
        "mrp": 375,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010081')",
        "name": "Crompton Ozone 75L Desert Air Cooler",
        "slug": "crompton-ozone-75l-cooler",
        "description": "Honeycomb pads, inverter compatible",
        "price": 10999,
        "mrp": 15999,
        "discount": {
            "type": "percentage",
            "value": 31
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Fans & Air Coolers"
        ],
        "categoryIds": [
            "37",
            "3701"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010082')",
        "name": "The Body Shop Tea Tree Face Wash 250ml",
        "slug": "body-shop-tea-tree-facewash-250ml",
        "description": "Purifying face wash for blemished skin",
        "price": 695,
        "mrp": 895,
        "discount": {
            "type": "percentage",
            "value": 22
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Skin Care"
        ],
        "categoryIds": [
            "6",
            "6004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010083')",
        "name": "Bosch TrueMixx Pro 1000W Mixer Grinder",
        "slug": "bosch-truemixx-1000w-mixer",
        "description": "4 jars, stone pounding technology",
        "price": 5999,
        "mrp": 8999,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Juicers & Mixer Grinders"
        ],
        "categoryIds": [
            "34",
            "3403"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010084')",
        "name": "Bata Women's Ballet Flats",
        "slug": "bata-women-ballet-flats",
        "description": "Comfortable cushioned casual shoes",
        "price": 799,
        "mrp": 1299,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "fashion",
            "Women",
            "Footwear"
        ],
        "categoryIds": [
            "21",
            "2103"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010085')",
        "name": "Corelle Livingware Dinner Set 21 Pieces",
        "slug": "corelle-dinner-set-21pcs",
        "description": "Break & chip resistant, microwave safe",
        "price": 4999,
        "mrp": 6999,
        "discount": {
            "type": "percentage",
            "value": 29
        },
        "categories": [
            "home-lifestyle",
            "Tableware",
            "Dining"
        ],
        "categoryIds": [
            "58",
            "5801"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010086')",
        "name": "Maggi 2-Minute Noodles Masala 840g (12 Packs)",
        "slug": "maggi-masala-noodles-840g",
        "description": "India's favourite instant noodles",
        "price": 149,
        "mrp": 180,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Noodles, Pasta & Vermicelli"
        ],
        "categoryIds": [
            "1",
            "1007"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010087')",
        "name": "Durex Extra Thin Condoms (Pack of 10)",
        "slug": "durex-extra-thin-10pcs",
        "description": "Ultra thin for greater sensitivity",
        "price": 199,
        "mrp": 250,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Health & Wellness"
        ],
        "categoryIds": [
            "6",
            "6008"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010088')",
        "name": "LG 8kg 5 Star Front Load Washing Machine",
        "slug": "lg-8kg-front-load-washing-machine",
        "description": "AI Direct Drive, Steam technology",
        "price": 36990,
        "mrp": 49990,
        "discount": {
            "type": "percentage",
            "value": 26
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Washing Machines"
        ],
        "categoryIds": [
            "40",
            "4003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010089')",
        "name": "Global Desi Printed Kurta for Women",
        "slug": "global-desi-printed-kurta-women",
        "description": "Boho chic rayon flared kurta",
        "price": 1299,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 48
        },
        "categories": [
            "fashion",
            "Women",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "21",
            "2101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010090')",
        "name": "Urban Forest Leather Wallet for Men",
        "slug": "urban-forest-leather-wallet-men",
        "description": "RFID blocking genuine leather wallet",
        "price": 699,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 65
        },
        "categories": [
            "fashion",
            "Men",
            "Bags, Belts & Wallets"
        ],
        "categoryIds": [
            "20",
            "2010"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010091')",
        "name": "Good Knight Fabric Roll-On Mosquito Repellent",
        "slug": "good-knight-fabric-roll-on",
        "description": "Personal mosquito repellent for outdoor protection",
        "price": 75,
        "mrp": 90,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Home",
            "Fresheners & Repellents"
        ],
        "categoryIds": [
            "9",
            "9003"
        ],
        "attributes": {
            "brand": "Good Knight",
            "type": "Roll-On"
        },
        "variants": []
    },
    {
        "_id": "ObjectId('67b1a0010092')",
        "name": "Paper Boat Aamras Mango Drink 1L (Pack of 2)",
        "slug": "paper-boat-aamras-1l-pack2",
        "description": "Real mango pulp drink, no preservatives",
        "price": 199,
        "mrp": 240,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010093')",
        "name": "Noise Buds VS104 Truly Wireless Earbuds",
        "slug": "noise-buds-vs104-earbuds",
        "description": "30H playtime, Quad mic ENC, 13mm driver",
        "price": 999,
        "mrp": 3499,
        "discount": {
            "type": "percentage",
            "value": 71
        },
        "categories": [
            "electronics",
            "Audio & Smart Home",
            "Headphones & Earbuds"
        ],
        "categoryIds": [
            "32",
            "3201"
        ],
        "attributes": {
            "brand": "Noise",
            "color": "Black"
        },
        "variants": [
            {
                "sku": "NS-VS104-BLK",
                "color": "Black",
                "price": 999,
                "stock": 200
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010094')",
        "name": "Zara Women's High Waist Jeans",
        "slug": "zara-women-high-waist-jeans",
        "description": "Straight fit stretchable denim",
        "price": 2990,
        "mrp": 4990,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "fashion",
            "Women",
            "Western Wear"
        ],
        "categoryIds": [
            "21",
            "2102"
        ],
        "attributes": {
            "brand": "Zara",
            "size": "28"
        },
        "variants": [
            {
                "sku": "ZR-JNS-BLU-28",
                "size": "28",
                "price": 2990,
                "stock": 40
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010095')",
        "name": "@home by Nilkamal 3-Seater Sofa (Grey)",
        "slug": "athome-nilkamal-3-seater-sofa-grey",
        "description": "Fabric upholstered modern sofa",
        "price": 17999,
        "mrp": 29999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "furniture",
            "Living Room",
            "Sofas"
        ],
        "categoryIds": [
            "83",
            "8305"
        ],
        "attributes": {
            "brand": "@home",
            "seating": "3 Seater",
            "color": "Grey"
        }
    },
    {
        "_id": "ObjectId('67b1a0010096')",
        "name": "Vim Dishwash Liquid Gel Lemon 2L",
        "slug": "vim-dishwash-gel-lemon-2l",
        "description": "Tough grease removal with lemon fragrance",
        "price": 349,
        "mrp": 425,
        "discount": {
            "type": "percentage",
            "value": 18
        },
        "categories": [
            "groceries",
            "Home",
            "Dishwash"
        ],
        "categoryIds": [
            "9",
            "9001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010097')",
        "name": "Whirlpool 7kg 5 Star Semi-Automatic Washing Machine",
        "slug": "whirlpool-7kg-semi-auto-washer",
        "description": "Ace Supreme Plus with lint filter",
        "price": 9990,
        "mrp": 13990,
        "discount": {
            "type": "percentage",
            "value": 29
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Washing Machines"
        ],
        "categoryIds": [
            "40",
            "4003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010098')",
        "name": "U.S. Polo Assn. Men's Polo T-Shirt",
        "slug": "uspa-mens-polo-tshirt",
        "description": "Cotton pique regular fit polo",
        "price": 1299,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 48
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010099')",
        "name": "Portronics Toad 23 Wireless Mouse",
        "slug": "portronics-toad-23-mouse",
        "description": "2.4GHz wireless with adjustable DPI",
        "price": 499,
        "mrp": 999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "electronics",
            "Computers & Accessories",
            "IT Peripherals & Accessories"
        ],
        "categoryIds": [
            "33",
            "3304"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010100')",
        "name": "Sunfeast YiPPee Magic Masala Noodles 360g",
        "slug": "yippee-magic-masala-noodles-360g",
        "description": "Long non-sticky noodles with masala mix",
        "price": 69,
        "mrp": 80,
        "discount": {
            "type": "percentage",
            "value": 14
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Noodles, Pasta & Vermicelli"
        ],
        "categoryIds": [
            "1",
            "1007"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010101')",
        "name": "Syska 9W LED Bulb (Pack of 4)",
        "slug": "syska-9w-led-bulb-pack4",
        "description": "Cool daylight, B22 base",
        "price": 299,
        "mrp": 599,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "home-lifestyle",
            "Home Decor",
            "Lights"
        ],
        "categoryIds": [
            "55",
            "5501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010102')",
        "name": "Nivea Men Fresh Active Deodorant 150ml",
        "slug": "nivea-men-fresh-deo-150ml",
        "description": "48h protection with ocean extract",
        "price": 179,
        "mrp": 225,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Deo & Fragrances"
        ],
        "categoryIds": [
            "6",
            "6007"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010103')",
        "name": "Pigeon Amaze Plus Electric Kettle 1.5L",
        "slug": "pigeon-amaze-plus-kettle-1.5l",
        "description": "Stainless steel with auto shut-off",
        "price": 799,
        "mrp": 1495,
        "discount": {
            "type": "percentage",
            "value": 47
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Breakfast Appliances"
        ],
        "categoryIds": [
            "34",
            "3401"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010104')",
        "name": "Adidas Men's Running Shoes",
        "slug": "adidas-mens-running-shoes",
        "description": "Cloudfoam midsole for comfort",
        "price": 3999,
        "mrp": 5999,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "fashion",
            "Men",
            "Footwear"
        ],
        "categoryIds": [
            "20",
            "2004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010105')",
        "name": "Tupperware Best Lunch Set (4 Containers + Bag)",
        "slug": "tupperware-best-lunch-set",
        "description": "Airtight leak-proof containers",
        "price": 1299,
        "mrp": 1899,
        "discount": {
            "type": "percentage",
            "value": 32
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Flask, Bottle & Tiffin Boxes"
        ],
        "categoryIds": [
            "50",
            "5005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010106')",
        "name": "Mother Dairy Cow Milk 1L",
        "slug": "mother-dairy-cow-milk-1l",
        "description": "Pure cow milk, full cream",
        "price": 68,
        "mrp": 70,
        "discount": {
            "type": "percentage",
            "value": 3
        },
        "categories": [
            "groceries",
            "Dairy & Bakery",
            "Milk & Milk Products"
        ],
        "categoryIds": [
            "5",
            "5001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010107')",
        "name": "Stayfree Secure XL Ultra Thin Pads (42 pads)",
        "slug": "stayfree-secure-xl-42pads",
        "description": "Dry cover with odour control",
        "price": 399,
        "mrp": 475,
        "discount": {
            "type": "percentage",
            "value": 16
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Feminine Hygiene"
        ],
        "categoryIds": [
            "6",
            "6005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010108')",
        "name": "Haier 190L 5 Star Direct Cool Refrigerator",
        "slug": "haier-190l-5star-refrigerator",
        "description": "Diamond edge freezing, large vegetable box",
        "price": 15990,
        "mrp": 21990,
        "discount": {
            "type": "percentage",
            "value": 27
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Refrigerators"
        ],
        "categoryIds": [
            "40",
            "4002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010109')",
        "name": "Sangini Gold Plated Mangalsutra",
        "slug": "sangini-gold-mangalsutra",
        "description": "Traditional design with black beads",
        "price": 2999,
        "mrp": 4999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "fashion",
            "Women",
            "Fashion Jewellery"
        ],
        "categoryIds": [
            "21",
            "2115"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010110')",
        "name": "Stanley Classic Vacuum Bottle 1L",
        "slug": "stanley-classic-vacuum-1l",
        "description": "Keeps hot/cold for 24 hours",
        "price": 2999,
        "mrp": 3999,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Flask, Bottle & Tiffin Boxes"
        ],
        "categoryIds": [
            "50",
            "5005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010111')",
        "name": "Hit Anti Roach Gel 20g",
        "slug": "hit-anti-roach-gel-20g",
        "description": "Cockroach killer gel for kitchen and home",
        "price": 199,
        "mrp": 250,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Home",
            "Fresheners & Repellents"
        ],
        "categoryIds": [
            "9",
            "9003"
        ],
        "attributes": {
            "brand": "Hit",
            "type": "Gel"
        },
        "variants": [],
        "ratings": {
            "average": 4.3,
            "count": 5600
        }
    },
    {
        "_id": "ObjectId('67b1a0010112')",
        "name": "Tropicana Orange Delight Juice 1L",
        "slug": "tropicana-orange-delight-1l",
        "description": "100% orange juice with no added sugar",
        "price": 99,
        "mrp": 110,
        "discount": {
            "type": "percentage",
            "value": 10
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010113')",
        "name": "Realme Narzo 70 Pro 5G 128GB",
        "slug": "realme-narzo-70-pro-128gb",
        "description": "Dimensity 7050, 50MP Sony camera, 67W charging",
        "price": 19999,
        "mrp": 24999,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ],
        "attributes": {
            "brand": "Realme",
            "storage": "128GB",
            "color": "Glass Green"
        },
        "variants": [
            {
                "sku": "RM-N70PRO-GRN-128",
                "color": "Green",
                "price": 19999,
                "stock": 90
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010114')",
        "name": "Roadster Men's Cargo Joggers",
        "slug": "roadster-mens-cargo-joggers",
        "description": "Cotton blend relaxed fit joggers",
        "price": 799,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 60
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ],
        "attributes": {
            "brand": "Roadster",
            "size": "M",
            "color": "Olive"
        },
        "variants": [
            {
                "sku": "RD-CARGO-OLV-M",
                "size": "M",
                "price": 799,
                "stock": 120
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010115')",
        "name": "Pepperfry Amber Sheesham Wood Dining Table 6 Seater",
        "slug": "pepperfry-amber-sheesham-dining-table",
        "description": "Solid wood dining table with natural finish",
        "price": 24999,
        "mrp": 39999,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "furniture",
            "Dining Room & Bar",
            "Dining Tables & Sets"
        ],
        "categoryIds": [
            "81",
            "8104"
        ],
        "attributes": {
            "brand": "Pepperfry",
            "seating": "6 Seater",
            "material": "Sheesham Wood"
        }
    },
    {
        "_id": "ObjectId('67b1a0010116')",
        "name": "Exo Dishwash Bar 800g (Pack of 4)",
        "slug": "exo-dishwash-bar-pack4",
        "description": "Anti-bacterial dishwash bar with scrub pad",
        "price": 149,
        "mrp": 200,
        "discount": {
            "type": "percentage",
            "value": 26
        },
        "categories": [
            "groceries",
            "Home",
            "Dishwash"
        ],
        "categoryIds": [
            "9",
            "9001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010117')",
        "name": "Voltas 1.5 Ton 3 Star Inverter Split AC",
        "slug": "voltas-1-5-ton-3star-ac",
        "description": "Adjustable cooling, copper condenser",
        "price": 34990,
        "mrp": 58990,
        "discount": {
            "type": "percentage",
            "value": 41
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Air Conditioners"
        ],
        "categoryIds": [
            "40",
            "4001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010118')",
        "name": "Jack & Jones Men's Denim Jacket",
        "slug": "jackjones-mens-denim-jacket",
        "description": "Regular fit washed denim jacket",
        "price": 1999,
        "mrp": 3999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010119')",
        "name": "Bombay Dyeing Cotton Double Bedsheet with 2 Pillow Covers",
        "slug": "bombay-dyeing-cotton-double-bedsheet",
        "description": "300 TC premium cotton printed bedsheet",
        "price": 999,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010120')",
        "name": "Kurkure Masala Munch 90g (Pack of 6)",
        "slug": "kurkure-masala-munch-pack6",
        "description": "Crunchy spicy puffed snacks",
        "price": 110,
        "mrp": 120,
        "discount": {
            "type": "percentage",
            "value": 8
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010121')",
        "name": "Usha Armor 1200mm Ceiling Fan",
        "slug": "usha-armor-ceiling-fan",
        "description": "High speed, anti-dust, brown",
        "price": 2199,
        "mrp": 3299,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Fans & Air Coolers"
        ],
        "categoryIds": [
            "37",
            "3701"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010122')",
        "name": "Garnier Men Acno Fight Face Wash 100g",
        "slug": "garnier-men-acno-fight-facewash",
        "description": "Anti-pimple face wash with salicylic acid",
        "price": 179,
        "mrp": 225,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Men's Grooming"
        ],
        "categoryIds": [
            "6",
            "6006"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010123')",
        "name": "Makita Cordless Drill Driver",
        "slug": "makita-cordless-drill-driver",
        "description": "18V, variable speed, LED light",
        "price": 8999,
        "mrp": 12999,
        "discount": {
            "type": "percentage",
            "value": 31
        },
        "categories": [
            "industrial-professional-supplies",
            "Industrial Supplies",
            "Power & Hand Tools"
        ],
        "categoryIds": [
            "71",
            "7101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010124')",
        "name": "Crocs Classic Clogs for Kids",
        "slug": "crocs-classic-clogs-kids",
        "description": "Lightweight waterproof clogs",
        "price": 1995,
        "mrp": 2495,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "fashion",
            "Boys",
            "Footwear"
        ],
        "categoryIds": [
            "23",
            "2303"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010125')",
        "name": "Lego Classic Creative Bricks 790 Pieces",
        "slug": "lego-classic-creative-bricks",
        "description": "Building blocks set for kids",
        "price": 2499,
        "mrp": 3499,
        "discount": {
            "type": "percentage",
            "value": 29
        },
        "categories": [
            "home-lifestyle",
            "Toys & Games",
            "Learning & Education"
        ],
        "categoryIds": [
            "60",
            "6003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010126')",
        "name": "Philips Hue Smart LED Bulb 10W",
        "slug": "philips-hue-smart-bulb-10w",
        "description": "Colour changing Wi-Fi bulb",
        "price": 1499,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "home-lifestyle",
            "Home Decor",
            "Lights"
        ],
        "categoryIds": [
            "55",
            "5501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010127')",
        "name": "Quaker Oats 1.5kg",
        "slug": "quaker-oats-1-5kg",
        "description": "100% whole grain oats for healthy breakfast",
        "price": 299,
        "mrp": 350,
        "discount": {
            "type": "percentage",
            "value": 15
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Breakfast Cereals"
        ],
        "categoryIds": [
            "1",
            "1006"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010128')",
        "name": "Braun Series 3 Electric Shaver",
        "slug": "braun-series3-shaver",
        "description": "Wet & dry shaver with triple foil",
        "price": 3499,
        "mrp": 4999,
        "discount": {
            "type": "percentage",
            "value": 30
        },
        "categories": [
            "electronics",
            "Personal Care & Grooming Appliances",
            "Shavers & Trimmers"
        ],
        "categoryIds": [
            "31",
            "3101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010129')",
        "name": "Aurelia Women's Straight Kurta",
        "slug": "aurelia-straight-kurta-women",
        "description": "Rayon printed everyday kurta",
        "price": 799,
        "mrp": 1599,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Women",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "21",
            "2101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010130')",
        "name": "Duroflex LiveIn Orthopedic Memory Foam Pillow",
        "slug": "duroflex-livein-pillow",
        "description": "Contoured pillow for neck support",
        "price": 1299,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 35
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010131')",
        "name": "Odonil Bathroom Air Freshener Blocks 75g (Pack of 4)",
        "slug": "odonil-bathroom-freshener-pack4",
        "description": "Long lasting fragrance for bathroom",
        "price": 199,
        "mrp": 260,
        "discount": {
            "type": "percentage",
            "value": 23
        },
        "categories": [
            "groceries",
            "Home",
            "Fresheners & Repellents"
        ],
        "categoryIds": [
            "9",
            "9003"
        ],
        "attributes": {
            "brand": "Odonil",
            "fragrance": "Mixed",
            "pack": "4"
        }
    },
    {
        "_id": "ObjectId('67b1a0010132')",
        "name": "Frooti Mango Drink 1L (Pack of 2)",
        "slug": "frooti-mango-drink-1l-pack2",
        "description": "India's favourite mango drink",
        "price": 149,
        "mrp": 180,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010133')",
        "name": "Vivo V30 5G 256GB",
        "slug": "vivo-v30-5g-256gb",
        "description": "50MP portrait camera, Aura Light, slim design",
        "price": 32999,
        "mrp": 39999,
        "discount": {
            "type": "percentage",
            "value": 18
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ],
        "attributes": {
            "brand": "Vivo",
            "storage": "256GB",
            "color": "Peacock Green"
        },
        "variants": [
            {
                "sku": "VV-V30-GRN-256",
                "color": "Green",
                "price": 32999,
                "stock": 70
            }
        ]
    },
    {
        "_id": "ObjectId('67b1a0010134')",
        "name": "HRX by Hrithik Roshan Men's Track Pants",
        "slug": "hrx-mens-track-pants",
        "description": "Quick dry regular fit track pants",
        "price": 699,
        "mrp": 1499,
        "discount": {
            "type": "percentage",
            "value": 53
        },
        "categories": [
            "fashion",
            "Men",
            "Night & Loungewear"
        ],
        "categoryIds": [
            "20",
            "2006"
        ],
        "attributes": {
            "brand": "HRX",
            "size": "L",
            "color": "Black"
        }
    },
    {
        "_id": "ObjectId('67b1a0010135')",
        "name": "Urban Ladder Eisner Study Table",
        "slug": "urban-ladder-eisner-study-table",
        "description": "Engineered wood with drawer storage",
        "price": 8999,
        "mrp": 14999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "furniture",
            "Work & Study",
            "Tables"
        ],
        "categoryIds": [
            "85",
            "8503"
        ],
        "attributes": {
            "brand": "Urban Ladder",
            "material": "Engineered Wood"
        }
    },
    {
        "_id": "ObjectId('67b1a0010136')",
        "name": "Pril Lime Dishwash Liquid 2L",
        "slug": "pril-lime-dishwash-2l",
        "description": "Grease cutting formula with lime fragrance",
        "price": 399,
        "mrp": 499,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Home",
            "Dishwash"
        ],
        "categoryIds": [
            "9",
            "9001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010137')",
        "name": "Godrej Aer Pocket Bathroom Fragrance (Pack of 4)",
        "slug": "godrej-aer-pocket-pack4",
        "description": "Lasts up to 30 days, assorted fragrances",
        "price": 199,
        "mrp": 260,
        "discount": {
            "type": "percentage",
            "value": 23
        },
        "categories": [
            "groceries",
            "Home",
            "Fresheners & Repellents"
        ],
        "categoryIds": [
            "9",
            "9003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010138')",
        "name": "Tommy Hilfiger Men's Analog Watch",
        "slug": "tommy-hilfiger-mens-watch",
        "description": "Stainless steel quartz watch",
        "price": 7999,
        "mrp": 12999,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "fashion",
            "Men",
            "Watches"
        ],
        "categoryIds": [
            "20",
            "2008"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010139')",
        "name": "Trident Cotton Bath Towel 70x140cm",
        "slug": "trident-cotton-bath-towel-large",
        "description": "Highly absorbent 500 GSM towel",
        "price": 599,
        "mrp": 999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bathroom Linen"
        ],
        "categoryIds": [
            "51",
            "5103"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010140')",
        "name": "Bingo Mad Angles Achaari Masti 90g",
        "slug": "bingo-mad-angles-achaari-90g",
        "description": "Triangular crispy snacks with pickle flavour",
        "price": 20,
        "mrp": 20,
        "discount": {
            "type": "percentage",
            "value": 0
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010141')",
        "name": "Orient Electric Apex-FX Ceiling Fan 1200mm",
        "slug": "orient-apex-fx-ceiling-fan",
        "description": "High speed, double ball bearing",
        "price": 1799,
        "mrp": 2799,
        "discount": {
            "type": "percentage",
            "value": 36
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Fans & Air Coolers"
        ],
        "categoryIds": [
            "37",
            "3701"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010142')",
        "name": "Lakmé Eyeconic Kajal Deep Black 0.35g",
        "slug": "lakme-eyeconic-kajal",
        "description": "Smudge proof 22H wear kajal",
        "price": 199,
        "mrp": 275,
        "discount": {
            "type": "percentage",
            "value": 28
        },
        "categories": [
            "groceries",
            "Beauty",
            "Eyes"
        ],
        "categoryIds": [
            "7",
            "7003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010143')",
        "name": "Taparia Screwdriver Set 6 Pieces",
        "slug": "taparia-screwdriver-set-6pcs",
        "description": "Magnetic tip, insulated handle",
        "price": 399,
        "mrp": 599,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "industrial-professional-supplies",
            "Industrial Supplies",
            "Power & Hand Tools"
        ],
        "categoryIds": [
            "71",
            "7101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010144')",
        "name": "Barbie Dreamhouse Doll Playset",
        "slug": "barbie-dreamhouse-playset",
        "description": "3-storey house with pool and slide",
        "price": 5999,
        "mrp": 7999,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "home-lifestyle",
            "Toys & Games",
            "Learning & Education"
        ],
        "categoryIds": [
            "60",
            "6003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010145')",
        "name": "Wipro Smart LED Strip 5m",
        "slug": "wipro-smart-led-strip-5m",
        "description": "RGB colour changing with app control",
        "price": 1499,
        "mrp": 2999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "home-lifestyle",
            "Home Decor",
            "Lights"
        ],
        "categoryIds": [
            "55",
            "5501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010146')",
        "name": "Nestle Munch Nuts 32g (Pack of 10)",
        "slug": "nestle-munch-nuts-pack10",
        "description": "Crunchy wafer with peanuts",
        "price": 199,
        "mrp": 200,
        "discount": {
            "type": "percentage",
            "value": 1
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chocolates & Candies"
        ],
        "categoryIds": [
            "1",
            "1003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010147')",
        "name": "Veet Hair Removal Cream Silk & Fresh 100g",
        "slug": "veet-hair-removal-cream-100g",
        "description": "Normal skin with aloe vera",
        "price": 149,
        "mrp": 199,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Skin Care"
        ],
        "categoryIds": [
            "6",
            "6004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010148')",
        "name": "Samsung 8kg 5 Star Front Load Washing Machine",
        "slug": "samsung-8kg-front-load-washer",
        "description": "Eco Bubble, Hygiene Steam",
        "price": 39990,
        "mrp": 52990,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Washing Machines"
        ],
        "categoryIds": [
            "40",
            "4003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010149')",
        "name": "Tanishq 22K Gold Earrings",
        "slug": "tanishq-22k-gold-earrings",
        "description": "Lightweight daily wear earrings",
        "price": 24999,
        "mrp": 26999,
        "discount": {
            "type": "percentage",
            "value": 7
        },
        "categories": [
            "fashion",
            "Women",
            "Fashion Jewellery"
        ],
        "categoryIds": [
            "21",
            "2115"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010150')",
        "name": "Borosil Stainless Steel Water Bottle 1L",
        "slug": "borosil-ss-water-bottle-1l",
        "description": "Vacuum insulated, keeps cold 24H",
        "price": 799,
        "mrp": 1199,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Flask, Bottle & Tiffin Boxes"
        ],
        "categoryIds": [
            "50",
            "5005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010151')",
        "name": "Cycle Agarbatti Jasmine 250g",
        "slug": "cycle-agarbatti-jasmine-250g",
        "description": "Premium incense sticks for pooja and fragrance",
        "price": 149,
        "mrp": 200,
        "discount": {
            "type": "percentage",
            "value": 26
        },
        "categories": [
            "home-lifestyle",
            "Prayer & Spiritual Needs",
            "Agarbatti"
        ],
        "categoryIds": [
            "56",
            "5602"
        ],
        "attributes": {
            "brand": "Cycle",
            "fragrance": "Jasmine",
            "count": "Approx 200 sticks"
        }
    },
    {
        "_id": "ObjectId('67b1a0010152')",
        "name": "Maaza Mango Drink 1.2L",
        "slug": "maaza-mango-drink-1-2l",
        "description": "Real mango pulp drink with tropical taste",
        "price": 69,
        "mrp": 80,
        "discount": {
            "type": "percentage",
            "value": 14
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010153')",
        "name": "Poco X6 Pro 5G 512GB",
        "slug": "poco-x6-pro-512gb",
        "description": "Dimensity 8300 Ultra, 120Hz AMOLED, 67W turbo charging",
        "price": 27999,
        "mrp": 34999,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ],
        "attributes": {
            "brand": "Poco",
            "storage": "512GB",
            "color": "Racing Grey"
        }
    },
    {
        "_id": "ObjectId('67b1a0010154')",
        "name": "Flying Machine Men's Slim Fit Jeans",
        "slug": "flying-machine-slim-jeans-men",
        "description": "Mid-rise stretchable denim",
        "price": 1299,
        "mrp": 2599,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010155')",
        "name": "Forzza Jasper L-Shaped Office Desk",
        "slug": "forzza-jasper-lshaped-desk",
        "description": "Engineered wood with keyboard tray",
        "price": 8999,
        "mrp": 14999,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "furniture",
            "Work & Study",
            "Tables"
        ],
        "categoryIds": [
            "85",
            "8503"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010156')",
        "name": "Finish Powerball All-in-1 Dishwasher Tablets (Pack of 40)",
        "slug": "finish-powerball-dishwasher-tablets-40",
        "description": "Deep clean and shine for dishwasher",
        "price": 1299,
        "mrp": 1799,
        "discount": {
            "type": "percentage",
            "value": 28
        },
        "categories": [
            "groceries",
            "Home",
            "Dishwash"
        ],
        "categoryIds": [
            "9",
            "9001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010157')",
        "name": "Camlin Kokuyo Sketch Pens (Pack of 12)",
        "slug": "camlin-sketch-pens-12pack",
        "description": "Vibrant colours for school and art",
        "price": 49,
        "mrp": 60,
        "discount": {
            "type": "percentage",
            "value": 18
        },
        "categories": [
            "school-office-stationery",
            "Writing Instruments & Accessories"
        ],
        "categoryIds": [
            "14",
            "1402"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010158')",
        "name": "Fastrack Analog Watch for Women",
        "slug": "fastrack-analog-watch-women",
        "description": "Rose gold dial with stainless steel strap",
        "price": 2495,
        "mrp": 3995,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "fashion",
            "Women",
            "Watches"
        ],
        "categoryIds": [
            "21",
            "2105"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010159')",
        "name": "Raymond Home Cotton Double Bedsheet with 2 Pillow Covers",
        "slug": "raymond-home-double-bedsheet-set",
        "description": "400 TC satin stripe premium bedsheet",
        "price": 1499,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010160')",
        "name": "Balaji Wafers Masala Peas 200g",
        "slug": "balaji-masala-peas-200g",
        "description": "Crispy spicy green peas snack",
        "price": 59,
        "mrp": 70,
        "discount": {
            "type": "percentage",
            "value": 16
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010161')",
        "name": "Bajaj GX-1 Mixer Grinder 500W (3 Jars)",
        "slug": "bajaj-gx1-mixer-grinder",
        "description": "Sturdy motor with overload protection",
        "price": 2499,
        "mrp": 3999,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Juicers & Mixer Grinders"
        ],
        "categoryIds": [
            "34",
            "3403"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010162')",
        "name": "Pears Pure & Gentle Soap 125g (Pack of 5)",
        "slug": "pears-soap-pack5",
        "description": "Glycerin rich transparent soap",
        "price": 299,
        "mrp": 375,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Bath & Hand Wash"
        ],
        "categoryIds": [
            "6",
            "6002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010163')",
        "name": "Asian Paints Royale Luxury Emulsion 4L (White)",
        "slug": "asian-paints-royale-emulsion-4l",
        "description": "Washable interior wall paint",
        "price": 2499,
        "mrp": 3299,
        "discount": {
            "type": "percentage",
            "value": 24
        },
        "categories": [
            "industrial-professional-supplies",
            "Building Supplies & Tools"
        ],
        "categoryIds": [
            "73"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010164')",
        "name": "Peppa Pig Backpack for Kids",
        "slug": "peppa-pig-kids-backpack",
        "description": "School bag with adjustable straps",
        "price": 799,
        "mrp": 1299,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "fashion",
            "Girls",
            "Bags, Belts & Wallets"
        ],
        "categoryIds": [
            "24",
            "2407"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010165')",
        "name": "Hot Wheels 5-Car Pack",
        "slug": "hot-wheels-5car-pack",
        "description": "Assorted die-cast toy cars",
        "price": 499,
        "mrp": 699,
        "discount": {
            "type": "percentage",
            "value": 29
        },
        "categories": [
            "home-lifestyle",
            "Toys & Games",
            "Toy Vehicles & Ride-Ons"
        ],
        "categoryIds": [
            "60",
            "6001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010166')",
        "name": "Havells Festiva Decorative Ceiling Fan 1200mm",
        "slug": "havells-festiva-ceiling-fan",
        "description": "Premium finish with remote control",
        "price": 3999,
        "mrp": 5999,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Fans & Air Coolers"
        ],
        "categoryIds": [
            "37",
            "3701"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010167')",
        "name": "Saffola Active Refined Oil 5L",
        "slug": "saffola-active-oil-5l",
        "description": "Pro-weight watchers blended oil",
        "price": 799,
        "mrp": 950,
        "discount": {
            "type": "percentage",
            "value": 16
        },
        "categories": [
            "groceries",
            "Cooking Essentials",
            "Edible Oils"
        ],
        "categoryIds": [
            "3",
            "3005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010168')",
        "name": "Philips Viva Collection Air Fryer HD9220",
        "slug": "philips-viva-airfryer-hd9220",
        "description": "Rapid Air technology, 2.2L capacity",
        "price": 5999,
        "mrp": 8995,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Cooking Appliances"
        ],
        "categoryIds": [
            "34",
            "3402"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010169')",
        "name": "Libas Women's Anarkali Kurta Set",
        "slug": "libas-anarkali-kurta-set",
        "description": "Rayon printed festive wear with dupatta",
        "price": 1799,
        "mrp": 3499,
        "discount": {
            "type": "percentage",
            "value": 49
        },
        "categories": [
            "fashion",
            "Women",
            "Ethnic Wear"
        ],
        "categoryIds": [
            "21",
            "2101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010170')",
        "name": "Centuary Sleepables Memory Foam Pillow",
        "slug": "centuary-sleepables-pillow",
        "description": "Cool gel infused for better sleep",
        "price": 999,
        "mrp": 1599,
        "discount": {
            "type": "percentage",
            "value": 38
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010171')",
        "name": "Mangaldeep Gold Dhoop Sticks (Pack of 12)",
        "slug": "mangaldeep-gold-dhoop-sticks-pack12",
        "description": "Premium dhoop for pooja and meditation",
        "price": 149,
        "mrp": 200,
        "discount": {
            "type": "percentage",
            "value": 26
        },
        "categories": [
            "home-lifestyle",
            "Prayer & Spiritual Needs",
            "Dhoop"
        ],
        "categoryIds": [
            "56",
            "5604"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010172')",
        "name": "Slice Mango Drink 1.2L",
        "slug": "slice-mango-drink-1-2l",
        "description": "Thick and pulpy mango juice",
        "price": 69,
        "mrp": 80,
        "discount": {
            "type": "percentage",
            "value": 14
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Drinks & Juices"
        ],
        "categoryIds": [
            "1",
            "1005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010173')",
        "name": "Motorola Edge 50 Fusion 256GB",
        "slug": "motorola-edge-50-fusion-256gb",
        "description": "Snapdragon 7s Gen 2, 50MP OIS camera, IP68",
        "price": 22999,
        "mrp": 27999,
        "discount": {
            "type": "percentage",
            "value": 18
        },
        "categories": [
            "electronics",
            "Mobiles & Tablets",
            "Mobiles"
        ],
        "categoryIds": [
            "30",
            "3001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010174')",
        "name": "Mufti Men's Skinny Fit Jeans",
        "slug": "mufti-skinny-jeans-men",
        "description": "Stretchable low-rise denim",
        "price": 1499,
        "mrp": 2999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Men",
            "Western Wear"
        ],
        "categoryIds": [
            "20",
            "2001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010175')",
        "name": "Green Soul Seoul Mid Back Office Chair",
        "slug": "green-soul-seoul-office-chair",
        "description": "Ergonomic mesh chair with lumbar support",
        "price": 4999,
        "mrp": 8999,
        "discount": {
            "type": "percentage",
            "value": 44
        },
        "categories": [
            "furniture",
            "Work & Study",
            "Chairs"
        ],
        "categoryIds": [
            "85",
            "8501"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010176')",
        "name": "Domex Disinfectant Toilet Cleaner 1L",
        "slug": "domex-toilet-cleaner-1l",
        "description": "Kills 99.9% germs, original fresh",
        "price": 199,
        "mrp": 250,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Home",
            "Detergents & Cleaners"
        ],
        "categoryIds": [
            "9",
            "9002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010177')",
        "name": "Faber Hood Primus Plus Energy HC SC BK 60cm Chimney",
        "slug": "faber-primus-chimney-60cm",
        "description": "1500 m³/hr suction, filterless, touch control",
        "price": 14999,
        "mrp": 25990,
        "discount": {
            "type": "percentage",
            "value": 42
        },
        "categories": [
            "electronics",
            "Kitchen Appliances",
            "Chimneys & Hobs"
        ],
        "categoryIds": [
            "34",
            "3405"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010178')",
        "name": "Titan Neo Analog Watch for Men",
        "slug": "titan-neo-analog-watch-men",
        "description": "Stainless steel with black dial",
        "price": 3995,
        "mrp": 5995,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "fashion",
            "Men",
            "Watches"
        ],
        "categoryIds": [
            "20",
            "2008"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010179')",
        "name": "Maspar Premium Cotton Bath Towel Set (6 Pieces)",
        "slug": "maspar-cotton-towel-set6",
        "description": "600 GSM quick dry towels",
        "price": 1499,
        "mrp": 2499,
        "discount": {
            "type": "percentage",
            "value": 40
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bathroom Linen"
        ],
        "categoryIds": [
            "51",
            "5103"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010180')",
        "name": "Pringles Original Chips 107g",
        "slug": "pringles-original-chips-107g",
        "description": "Iconic potato crisps in resealable tube",
        "price": 149,
        "mrp": 175,
        "discount": {
            "type": "percentage",
            "value": 15
        },
        "categories": [
            "groceries",
            "Biscuits, Drinks & Packaged Foods",
            "Chips & Namkeens"
        ],
        "categoryIds": [
            "1",
            "1001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010181')",
        "name": "Atomberg Efficio 1200mm BLDC Ceiling Fan",
        "slug": "atomberg-efficio-ceiling-fan",
        "description": "5-star energy saving, remote control",
        "price": 3499,
        "mrp": 4999,
        "discount": {
            "type": "percentage",
            "value": 30
        },
        "categories": [
            "electronics",
            "Home Appliances",
            "Fans & Air Coolers"
        ],
        "categoryIds": [
            "37",
            "3701"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010182')",
        "name": "Himalaya Purifying Neem Face Wash 150ml",
        "slug": "himalaya-neem-facewash-150ml",
        "description": "Soap-free herbal face wash for pimples",
        "price": 179,
        "mrp": 225,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Skin Care"
        ],
        "categoryIds": [
            "6",
            "6004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010183')",
        "name": "JK Copier A4 Paper 75 GSM (500 Sheets)",
        "slug": "jk-copier-a4-paper-500sheets",
        "description": "Bright white printing paper",
        "price": 299,
        "mrp": 399,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "school-office-stationery",
            "Notebooks & Paper Products"
        ],
        "categoryIds": [
            "14",
            "14001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010184')",
        "name": "Puma Women's Running Shoes",
        "slug": "puma-women-running-shoes",
        "description": "SoftFoam+ comfort insert",
        "price": 3499,
        "mrp": 5999,
        "discount": {
            "type": "percentage",
            "value": 42
        },
        "categories": [
            "fashion",
            "Women",
            "Footwear"
        ],
        "categoryIds": [
            "21",
            "2103"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010185')",
        "name": "Cello Opalware Dinner Set 33 Pieces",
        "slug": "cello-opalware-dinner-set-33pcs",
        "description": "Break resistant, microwave safe",
        "price": 1999,
        "mrp": 2995,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "home-lifestyle",
            "Tableware",
            "Dining"
        ],
        "categoryIds": [
            "58",
            "5801"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010186')",
        "name": "Amul Cheese Block 1kg",
        "slug": "amul-cheese-block-1kg",
        "description": "Processed cheese for sandwiches and pizzas",
        "price": 499,
        "mrp": 550,
        "discount": {
            "type": "percentage",
            "value": 9
        },
        "categories": [
            "groceries",
            "Dairy & Bakery",
            "Cheese, Paneer & Tofu"
        ],
        "categoryIds": [
            "5",
            "5002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010187')",
        "name": "Sensodyne Repair & Protect Toothpaste 100g",
        "slug": "sensodyne-repair-protect-100g",
        "description": "Relief from sensitivity with NovaMin technology",
        "price": 199,
        "mrp": 250,
        "discount": {
            "type": "percentage",
            "value": 20
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Oral Care"
        ],
        "categoryIds": [
            "6",
            "6003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010188')",
        "name": "IFB 8kg 5 Star Front Load Washing Machine",
        "slug": "ifb-8kg-front-load-washer",
        "description": "Aqua Energie, cradle wash",
        "price": 35990,
        "mrp": 47990,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "electronics",
            "Large Appliances",
            "Washing Machines"
        ],
        "categoryIds": [
            "40",
            "4003"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010189')",
        "name": "Mia by Tanishq 14K Gold Ring",
        "slug": "mia-tanishq-14k-gold-ring",
        "description": "Minimalist everyday gold ring",
        "price": 12999,
        "mrp": 14999,
        "discount": {
            "type": "percentage",
            "value": 13
        },
        "categories": [
            "fashion",
            "Women",
            "Fashion Jewellery"
        ],
        "categoryIds": [
            "21",
            "2115"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010190')",
        "name": "Signoraware Executive Lunch Box with Bag",
        "slug": "signoraware-executive-lunch-box",
        "description": "Microwave safe 3 containers + bag",
        "price": 599,
        "mrp": 899,
        "discount": {
            "type": "percentage",
            "value": 33
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Flask, Bottle & Tiffin Boxes"
        ],
        "categoryIds": [
            "50",
            "5005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010191')",
        "name": "Durex Air Ultra Thin Condoms (Pack of 10)",
        "slug": "durex-air-ultra-thin-10pcs",
        "description": "Thinnest condoms for intense experience",
        "price": 249,
        "mrp": 300,
        "discount": {
            "type": "percentage",
            "value": 17
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Health & Wellness"
        ],
        "categoryIds": [
            "6",
            "6008"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010192')",
        "name": "Borosil Glass Lunch Box Set of 3 (320ml each)",
        "slug": "borosil-glass-lunch-box-set3",
        "description": "Microwave & oven safe with leak-proof lids",
        "price": 899,
        "mrp": 1299,
        "discount": {
            "type": "percentage",
            "value": 31
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Flask, Bottle & Tiffin Boxes"
        ],
        "categoryIds": [
            "50",
            "5005"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010193')",
        "name": "Drools Adult Dry Dog Food Chicken & Egg 10kg",
        "slug": "drools-adult-dog-food-10kg",
        "description": "Complete balanced nutrition",
        "price": 1499,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 25
        },
        "categories": [
            "home-lifestyle",
            "Pet Care",
            "Dogs"
        ],
        "categoryIds": [
            "69",
            "6903"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010194')",
        "name": "Classmate Pulse Notebook 180 Pages (Pack of 6)",
        "slug": "classmate-pulse-notebook-pack6",
        "description": "Single line spiral notebook",
        "price": 399,
        "mrp": 540,
        "discount": {
            "type": "percentage",
            "value": 26
        },
        "categories": [
            "school-office-stationery",
            "Notebooks & Paper Products"
        ],
        "categoryIds": [
            "14",
            "14001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010195')",
        "name": "Boat Bassheads 100 Wired Earphones",
        "slug": "boat-bassheads-100-earphones",
        "description": "Extra bass with in-line mic",
        "price": 399,
        "mrp": 999,
        "discount": {
            "type": "percentage",
            "value": 60
        },
        "categories": [
            "electronics",
            "Audio & Smart Home",
            "Headphones & Earbuds"
        ],
        "categoryIds": [
            "32",
            "3201"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010196')",
        "name": "Mother Dairy Paneer 200g",
        "slug": "mother-dairy-paneer-200g",
        "description": "Fresh and soft cottage cheese",
        "price": 99,
        "mrp": 110,
        "discount": {
            "type": "percentage",
            "value": 10
        },
        "categories": [
            "groceries",
            "Dairy & Bakery",
            "Cheese, Paneer & Tofu"
        ],
        "categoryIds": [
            "5",
            "5002"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010197')",
        "name": "Nivea Body Lotion Nourishing 400ml",
        "slug": "nivea-nourishing-lotion-400ml",
        "description": "Deep moisture for very dry skin",
        "price": 349,
        "mrp": 450,
        "discount": {
            "type": "percentage",
            "value": 22
        },
        "categories": [
            "groceries",
            "Personal Care",
            "Skin Care"
        ],
        "categoryIds": [
            "6",
            "6004"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010198')",
        "name": "Prestige Popular Aluminium Pressure Cooker 5L",
        "slug": "prestige-popular-cooker-5l",
        "description": "Outer lid with induction base",
        "price": 1299,
        "mrp": 1799,
        "discount": {
            "type": "percentage",
            "value": 28
        },
        "categories": [
            "home-lifestyle",
            "Kitchenware",
            "Cookers & Steamers"
        ],
        "categoryIds": [
            "50",
            "5001"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010199')",
        "name": "Reebok Men's Track Pants",
        "slug": "reebok-mens-track-pants",
        "description": "Regular fit with side pockets",
        "price": 999,
        "mrp": 1999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "fashion",
            "Men",
            "Night & Loungewear"
        ],
        "categoryIds": [
            "20",
            "2006"
        ]
    },
    {
        "_id": "ObjectId('67b1a0010200')",
        "name": "Portico New York Cotton Double Bedsheet with 2 Pillow Covers",
        "slug": "portico-double-bedsheet-set",
        "description": "400 TC luxury printed bedsheet",
        "price": 1499,
        "mrp": 2999,
        "discount": {
            "type": "percentage",
            "value": 50
        },
        "categories": [
            "home-lifestyle",
            "Home Furnishing",
            "Bedding"
        ],
        "categoryIds": [
            "51",
            "5101"
        ]
    }
]

export default products;