import BarItems from "./BarItems";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BreweriesItem from "./BreweriesItem";
const barsData = [
  {
    id: 1,
    name: "Sabka club",
    cover:
      "https://b.zmtcdn.com/data/pictures/9/19622419/494b06ae643449613254390ff4790293_featured_v2.jpg",
    cuisins: "North Indian, Continental, Asian, Italian, Chinese, Beverages",
    address: "Topsia,Kolkata",
  },
  {
    id: 2,
    name: "Lord Of The Drinks ",
    cover:
      "https://b.zmtcdn.com/data/pictures/2/19289502/c4785457b4d09aa1662cd8697d11e1b4.jpg",
    cuisins:
      "North Indian, Continental, Chinese, Italian, SeaFood, FingerFood, Beverages",
    address: "South City Mall,Kolkata",
  },
  {
    id: 3,
    name: "Carpe Deam",
    cover:
      "https://b.zmtcdn.com/data/pictures/9/18634729/c44e9ecdac163587c755ba16088dfe09_featured_v2.jpg",
    cuisins: "Chinese, North Indian, Continental, Italian, Bevarages, Deserets",
    address: "Park Street,Kolkata",
  },
  {
    id: 4,
    name: "Canteen Pub",
    cover:
      "https://b.zmtcdn.com/data/pictures/8/19158528/10082cc84cab25fcaa62b52319dac108.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins:
      "North Indian, Continental, FingerFood, Chinese, Japanese, Italian, Bevarages",
    address: "City Center1,Salt-Lake,Kolkata",
  },
  {
    id: 5,
    name: "Scrapyard",
    cover:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/z/g/p43229-15293199445b2792080adb3.jpg?w=400",
    cuisins: "North Indian, Continental, Chinese, FastFood, Bevarages, Deserts",
    address: "Camac Street Area,Kolkata",
  },
  {
    id: 6,
    name: "Refinery 091",
    cover:
      "https://b.zmtcdn.com/data/pictures/4/18948084/dc414e17faa5d8ba012dbf2710db7752.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "FingerFood, Continental, Asian, Italian, Chinese, Beverages",
    address: "Sector 5,Salt-Lake,Kolkata",
  },
  {
    id: 7,
    name: "10 Downing Street ",
    cover:
      "https://b.zmtcdn.com/data/pictures/4/18296364/d77138c9e329aaa8fd2ca3eee868eeee.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "North Indian, Continental, Chinese, Beverages",
    address: "Sector 5,Salt-Lake,Kolkata",
  },
  {
    id: 8,
    name: "Barishh",
    cover:
      "https://b.zmtcdn.com/data/pictures/7/19301747/27aa32dd41ee4f5af436c63dde9a479d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins:
      "North Indian, BBQ, Continental, Italian, Chinese, Bevarages, Deserets",
    address: "South City Mall,Kolkata",
  },
  {
    id: 9,
    name: "Five Mad Men",
    cover:
      "https://b.zmtcdn.com/data/reviews_photos/69c/3467df27fd122424f56865a34dea269c_1607665123.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "Chinese, Salad, Healthy Food, Asian, Burger, Mexican, Bevarages",
    address: "Sector-5,Salt-Lake,Kolkata",
  },
  {
    id: 10,
    name: "The Brewhive",
    cover:
      "https://b.zmtcdn.com/data/pictures/9/18784859/82e425608f727b44b42fea7f0b84656c.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "North Indian, Continental, Chinese, Italian, Bevarages",
    address: "sector-5, Salt-Lake,Kolkata",
  },
  {
    id: 11,
    name: "The Lord And Barons",
    cover:
      "https://b.zmtcdn.com/data/pictures/7/18811777/555c0885408ee816a6e1d329d9be351a.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins:
      "North Indian, Mughlai, Continental, Oriental, Asian, Italian, Beverages",
    address: "Park Street Area,Kolkata",
  },
  {
    id: 12,
    name: "Sly Fox Gastro Club",
    cover:
      "https://b.zmtcdn.com/data/pictures/9/18677099/7c2b1ba141e13a3b9f961b8ee614279a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    cuisins: "North Indian, Oriental, Kebab, Continental, Beverages, Deserts",
    address: "SEctor 5, Salt-Lake, Kolkata",
  },
  // {
  //   id: 3,
  //   name: "Carpe Deam",
  //   cover:
  //     "https://b.zmtcdn.com/data/pictures/9/18634729/c44e9ecdac163587c755ba16088dfe09_featured_v2.jpg",
  //   cuisins: "Chinese, North Indian, Continental, Italian, Bevarages, Deserets",
  //   address: "Park Street,Kolkata",
  // },
  // {
  //   id: 4,
  //   name: "Canteen Pub",
  //   cover:
  //     "https://b.zmtcdn.com/data/pictures/8/19158528/10082cc84cab25fcaa62b52319dac108.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
  //   cuisins:
  //     "North Indian, Continental, FingerFood, Chinese, Japanese, Italian, Bevarages",
  //   address: "City Center1,Salt-Lake,Kolkata",
  // },
  // {
  //   id: 5,
  //   name: "Scrapyard",
  //   cover:
  //     "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/z/g/p43229-15293199445b2792080adb3.jpg?w=400",
  //   cuisins: "North Indian, Continental, Chinese, FastFood, Bevarages, Deserts",
  //   address: "Camac Street Area,Kolkata",
  // },
];
const breweriesData = [
  {
    id: 1,
    name: "The Brewmaster",
    cover:
      "https://b.zmtcdn.com/data/reviews_photos/354/f77a158c9f12cf26edae8ba5ea1d1354_1577694717.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "Continental, Chinese, North Indian, Sichuan, Deserts",
    address: "Sector 5, Salt Lake, Kolkata",
  },
  {
    id: 2,
    name: "Capella, Alt-Air Boutique Hotel",
    cover:
      "https://b.zmtcdn.com/data/pictures/5/18620365/1cb7baf6b4984296f7c7bed1a05e88c0_featured_v2.jpg",
    cuisins: "Cntinental, Italian, Finger Food",
    address: "Alt-Air Boutique Hotel, Kolkata",
  },
  {
    id: 3,
    name: "Country Roads",
    cover:
      "https://b.zmtcdn.com/data/pictures/5/18249185/a2323a576d314a72892f160b333553ff.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "Continental, Chinese, North Indian, Sichuan, Beverages, Deserts",
    address: "The Galleria of Kolkata, New Town, Kolkata",
  },
  {
    id: 4,
    name: "Raize The Bar",
    cover:
      "https://b.zmtcdn.com/data/pictures/2/18287272/3b7105de5eff99721a0b173c776c1219.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins:
      "North Indian, Continental, Chinese, Oriental, Italian, Biriyani, Kebab",
    address: "Sector 5, Salt Lake, Kolkata",
  },
  {
    id: 5,
    name: "Scrapyard",
    cover:
      "https://lh3.googleusercontent.com/p/AF1QipOI1-K8QyefV3lmnpsjvMWR5GYaOks6Pz8GPbpE=s680-w680-h510",
    cuisins:
      "Continental, Chinese, North Indian, FastFood, StreetFood, Beveragess,Deserts",
    address: "Camac Street Area, Kolkata",
  },
  {
    id: 6,
    name: "The Brewhive",
    cover:
      "https://b.zmtcdn.com/data/pictures/9/18784859/82e425608f727b44b42fea7f0b84656c.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    cuisins: "Chinese, Continental, Italian, Pizza, North Indian, Deserts",
    address: "Sector 5, Salt Lake, Kolkata",
  },
];

//import { DiningCarousel } from "./DiningCarousel";

const BarsPubs = () => {
  const params = useParams();
  const { id } = params;
  console.log(params);

  if (id == 1) {
    return (
      <>
        <div className="py-7">
          <img
            className="relative max-w-7xl mx-auto my-1 rounded-lg"
            src="https://b.zmtcdn.com/data/collections/d2bf1a1e8403e207dc4001ee5021de91_1675232845.jpg?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
          />

          <section className="pl-56 pb-56 absolute text-white bottom-0">
            <h1 className="font-semibold text-4xl mb-4">
              Top Collections of Bars ans Pubs in Kolkata
            </h1>
            <h6 className="">
              Bringing exciting flavours and oomph, these pubs and bars have got
              some really refreshing sips waiting for you.
            </h6>
          </section>
        </div>
        <div>
          <div className="flex flex-wrap justify-center pb-12">
            {barsData.map((bar) => {
              return <BarItems key={bar.id} bar={bar} />;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="py-7">
          <img
            className="relative max-w-7xl mx-auto my-1 rounded-lg"
            src="https://b.zmtcdn.com/data/collections/043714a8f7d80d494329b69c648a2bc6_1675237482.jpg?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
          />
          <section className="pl-56 pb-56 absolute text-white bottom-0">
            <h1 className="font-semibold text-4xl mb-4">
              6 Finest Microbreweries in Kolkata
            </h1>
            <h6 className="">
              For the times when bottled brews just do not cut it!
            </h6>
          </section>
        </div>
        <div>
          <div className="flex flex-wrap justify-center pb-12">
            {breweriesData.map((breweries) => {
              return <BreweriesItem key={breweries.id} breweries={breweries} />;
            })}
          </div>
        </div>
      </>
    );
  }
};
export default BarsPubs;
