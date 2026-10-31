import p1_img from "./catalog-v2/product-01.jpg";
import p2_img from "./catalog-v2/product-02.jpg";
import p3_img from "./catalog-v2/product-03.jpg";
import p4_img from "./catalog-v2/product-04.jpg";
import p5_img from "./catalog-v2/product-05.jpg";
import p6_img from "./catalog-v2/product-06.jpg";
import p7_img from "./catalog-v2/product-07.jpg";
import p8_img from "./catalog-v2/product-08.jpg";
import p9_img from "./catalog-v2/product-09.jpg";
import p10_img from "./catalog-v2/product-10.jpg";
import p11_img from "./catalog-v2/product-11.jpg";
import p12_img from "./catalog-v2/product-12.jpg";
import p13_img from "./catalog-v2/product-13.jpg";
import p14_img from "./catalog-v2/product-14.jpg";
import p15_img from "./catalog-v2/product-15.jpg";
import p16_img from "./catalog-v2/product-16.jpg";
import p17_img from "./catalog-v2/product-17.jpg";
import p18_img from "./catalog-v2/product-18.jpg";
import p19_img from "./catalog-v2/product-19.jpg";
import p20_img from "./catalog-v2/product-20.jpg";
import p21_img from "./catalog-v2/product-21.jpg";
import p22_img from "./catalog-v2/product-22.jpg";
import p23_img from "./catalog-v2/product-23.jpg";
import p24_img from "./catalog-v2/product-24.jpg";
import p25_img from "./catalog-v2/product-25.jpg";
import p26_img from "./catalog-v2/product-26.jpg";
import p27_img from "./catalog-v2/product-27.jpg";
import p28_img from "./catalog-v2/product-28.jpg";
import p29_img from "./catalog-v2/product-29.jpg";
import p30_img from "./catalog-v2/product-30.jpg";
import p31_img from "./catalog-v2/product-31.jpg";
import p32_img from "./catalog-v2/product-32.jpg";
import p33_img from "./catalog-v2/product-33.jpg";
import p34_img from "./catalog-v2/product-34.jpg";
import p35_img from "./catalog-v2/product-35.jpg";
import p36_img from "./catalog-v2/product-36.jpg";

// Illustrative retail prices in LKR, not a currency conversion or live pricing.
const all_product = [
  {
    id: 1,
    name: "The Linen Camp Shirt — Ivory",
    category: "women",
    image: p1_img,
    new_price: 2990,
    old_price: 3490,
    description: "An airy ivory camp-collar shirt with an easy silhouette and short sleeves. A fresh starting point for everyday dressing."
  },
  {
    id: 2,
    name: "The Everyday Blouse — Sage",
    category: "women",
    image: p2_img,
    new_price: 3490,
    old_price: 4290,
    description: "A soft sage blouse with a relaxed fit, long sleeves, and a clean button front. Easy to wear tucked in or left loose."
  },
  {
    id: 3,
    name: "The Ribbed Tank — Ink",
    category: "women",
    image: p3_img,
    new_price: 2790,
    old_price: 3290,
    description: "A close-fitting black ribbed tank with a classic crew neckline. Wear it on its own or layer it under your favorite shirt."
  },
  {
    id: 4,
    name: "The Textured Box Top — Sand",
    category: "women",
    image: p4_img,
    new_price: 4490,
    old_price: 5290,
    description: "A sand-colored short-sleeve top with a subtle textured finish and a boxy shape. Simple, relaxed, and quietly distinctive."
  },
  {
    id: 5,
    name: "The Relaxed Shirt — Rose",
    category: "women",
    image: p5_img,
    new_price: 3790,
    old_price: 4490,
    description: "A dusty rose button-front shirt with long sleeves and an effortless drape. Roll the cuffs for a softer everyday look."
  },
  {
    id: 6,
    name: "The Stripe Tee — Navy & Ecru",
    category: "women",
    image: p6_img,
    new_price: 3290,
    old_price: 3990,
    description: "A classic navy-and-ecru striped tee with short sleeves and an easy crew neck. A familiar favorite with a fresh point of view."
  },
  {
    id: 7,
    name: "The Sleeveless Blouse — Chalk",
    category: "women",
    image: p7_img,
    new_price: 3190,
    old_price: 3790,
    description: "A clean ivory sleeveless blouse with a soft V neckline. An uncomplicated piece for warm days and easy layering."
  },
  {
    id: 8,
    name: "The Weekend Blouse — Terracotta",
    category: "women",
    image: p8_img,
    new_price: 3990,
    old_price: 4790,
    description: "A warm terracotta blouse with loose short sleeves and a relaxed shape. Bring a little earthy color to your everyday rotation."
  },
  {
    id: 9,
    name: "The Cotton Shirt — Sky",
    category: "women",
    image: p9_img,
    new_price: 3590,
    old_price: 4290,
    description: "A powder blue button-front shirt with long sleeves and a classic collar. A versatile layer for workdays and weekends."
  },
  {
    id: 10,
    name: "The Knit Polo — Cocoa",
    category: "women",
    image: p10_img,
    new_price: 4290,
    old_price: 4990,
    description: "A chocolate brown short-sleeve knit polo with a neat collar and a soft finish. A considered alternative to the everyday tee."
  },
  {
    id: 11,
    name: "The Light Knit — Oat",
    category: "women",
    image: p11_img,
    new_price: 2890,
    old_price: 3490,
    description: "A lightweight oatmeal crewneck knit with long sleeves. An easy layer for cooler mornings and unhurried evenings."
  },
  {
    id: 12,
    name: "The Camp Shirt — Black",
    category: "women",
    image: p12_img,
    new_price: 4990,
    old_price: 5990,
    description: "A relaxed black camp-collar shirt with short sleeves and a clean button front. Understated, versatile, and easy to style."
  },
  {
    id: 13,
    name: "The Everyday Bomber — Olive",
    category: "men",
    image: p13_img,
    new_price: 8990,
    old_price: 10990,
    description: "An olive zip-front bomber with a clean silhouette and ribbed trims. A versatile finishing layer for your everyday wardrobe."
  },
  {
    id: 14,
    name: "The Light Blouson — Sand",
    category: "men",
    image: p14_img,
    new_price: 7490,
    old_price: 8990,
    description: "A lightweight sand-colored zip jacket with an easy blouson shape. Made for simple layering over tees and shirts."
  },
  {
    id: 15,
    name: "The City Bomber — Charcoal",
    category: "men",
    image: p15_img,
    new_price: 8490,
    old_price: 9990,
    description: "A charcoal bomber with a streamlined zip front and ribbed collar. A low-key outer layer for days on the move."
  },
  {
    id: 16,
    name: "The Cotton Zip Jacket — Navy",
    category: "men",
    image: p16_img,
    new_price: 7990,
    old_price: 9490,
    description: "A navy cotton-style jacket with a full zip and a clean everyday shape. Wear it open over a tee or zipped for a neater finish."
  },
  {
    id: 17,
    name: "The Suede-Look Jacket — Tobacco",
    category: "men",
    image: p17_img,
    new_price: 10990,
    old_price: 12990,
    description: "A rich tobacco-brown jacket with a suede-like finish and a simple zip front. A textured layer with a quietly dressed-up feel."
  },
  {
    id: 18,
    name: "The Minimal Jacket — Stone",
    category: "men",
    image: p18_img,
    new_price: 6990,
    old_price: 8490,
    description: "A stone-grey zip-front jacket with understated detailing. A straightforward outer layer that works across your wardrobe."
  },
  {
    id: 19,
    name: "The Workwear Jacket — Forest",
    category: "men",
    image: p19_img,
    new_price: 9990,
    old_price: 11990,
    description: "A deep forest-green jacket with a classic collar and utility-inspired details. A relaxed layer with a little structure."
  },
  {
    id: 20,
    name: "The Weekend Bomber — Taupe",
    category: "men",
    image: p20_img,
    new_price: 9490,
    old_price: 11490,
    description: "A warm taupe bomber with a ribbed collar and a clean zip front. A neutral layer for easy everyday dressing."
  },
  {
    id: 21,
    name: "The Zip Overshirt — Black",
    category: "men",
    image: p21_img,
    new_price: 10490,
    old_price: 12490,
    description: "A matte black overshirt jacket with a simple zip closure. The clean silhouette pairs naturally with denim and relaxed trousers."
  },
  {
    id: 22,
    name: "The Utility Jacket — Ecru",
    category: "men",
    image: p22_img,
    new_price: 7990,
    old_price: 9490,
    description: "An ecru collared utility jacket with a softly structured shape. A lighter-toned layer for a fresh everyday look."
  },
  {
    id: 23,
    name: "The Denim Trucker — Indigo",
    category: "men",
    image: p23_img,
    new_price: 11990,
    old_price: 13990,
    description: "A dark indigo denim trucker jacket with classic panel details and a button front. A familiar essential for year-round layering."
  },
  {
    id: 24,
    name: "The Hooded Jacket — Olive Brown",
    category: "men",
    image: p24_img,
    new_price: 8490,
    old_price: 9990,
    description: "An olive-brown hooded zip jacket with a lightweight look and an easy fit. A practical everyday layer with a relaxed finish."
  },
  {
    id: 25,
    name: "The Little Hoodie — Sage",
    category: "kid",
    image: p25_img,
    new_price: 2490,
    old_price: 2990,
    description: "A muted sage pullover hoodie with a relaxed child-sized shape. A soft-looking everyday favorite for little adventures."
  },
  {
    id: 26,
    name: "The Playday Sweatshirt — Oat",
    category: "kid",
    image: p26_img,
    new_price: 2990,
    old_price: 3590,
    description: "An oatmeal crewneck sweatshirt with long sleeves and ribbed trims. An easy neutral for mixing and matching."
  },
  {
    id: 27,
    name: "The Little Hoodie — Clay",
    category: "kid",
    image: p27_img,
    new_price: 2790,
    old_price: 3290,
    description: "A dusty terracotta pullover hoodie with a simple, comfortable silhouette. A warm pop of color for everyday play."
  },
  {
    id: 28,
    name: "The Zip-Up Hoodie — Navy",
    category: "kid",
    image: p28_img,
    new_price: 3290,
    old_price: 3990,
    description: "A navy zip-front hoodie with a classic hood and ribbed cuffs. An easy layer to pull on over a favorite tee."
  },
  {
    id: 29,
    name: "The Sunny Sweatshirt — Mustard",
    category: "kid",
    image: p29_img,
    new_price: 2590,
    old_price: 3090,
    description: "A muted mustard crewneck sweatshirt with a relaxed shape. A cheerful everyday piece for little wardrobes."
  },
  {
    id: 30,
    name: "The Little Hoodie — Sky",
    category: "kid",
    image: p30_img,
    new_price: 2890,
    old_price: 3490,
    description: "A powder blue pullover hoodie with ribbed cuffs and an easy fit. A fresh shade for everyday adventures."
  },
  {
    id: 31,
    name: "The Colorblock Sweatshirt — Sage & Cream",
    category: "kid",
    image: p31_img,
    new_price: 3490,
    old_price: 4190,
    description: "An ivory-and-sage colorblock sweatshirt with a crew neckline. A playful take on a simple everyday layer."
  },
  {
    id: 32,
    name: "The Little Hoodie — Coral",
    category: "kid",
    image: p32_img,
    new_price: 3190,
    old_price: 3790,
    description: "A muted coral pullover hoodie with a relaxed silhouette. A soft splash of color for playdays and quiet days alike."
  },
  {
    id: 33,
    name: "The Everyday Sweatshirt — Grey",
    category: "kid",
    image: p33_img,
    new_price: 2690,
    old_price: 3190,
    description: "A heather-grey crewneck sweatshirt with ribbed cuffs and hem. An uncomplicated staple for any little wardrobe."
  },
  {
    id: 34,
    name: "The Explorer Hoodie — Forest",
    category: "kid",
    image: p34_img,
    new_price: 3690,
    old_price: 4390,
    description: "A deep forest-green pullover hoodie with a classic relaxed shape. An easy layer for curious little explorers."
  },
  {
    id: 35,
    name: "The Zip-Up Hoodie — Sand",
    category: "kid",
    image: p35_img,
    new_price: 3090,
    old_price: 3690,
    description: "A sand-colored zip-front hoodie with ribbed trims. A versatile neutral for quick layers and everyday outings."
  },
  {
    id: 36,
    name: "The Stripe Sweatshirt — Cream & Navy",
    category: "kid",
    image: p36_img,
    new_price: 3990,
    old_price: 4790,
    description: "A cream-and-navy broad-stripe sweatshirt with long sleeves and a crew neck. A timeless pattern with a playful feel."
  }  
];

export default all_product;
