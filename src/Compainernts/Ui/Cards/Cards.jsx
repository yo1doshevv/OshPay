import React from "react";
import "./Cards.scss";

const Cards = () => {
  const menuItems = [
    { id: 1, narx: 44.000, title: "To'y oshi", description: "Qo'y va mol go‘shtining mayinligi, xushbo‘y lazer guruch..." },
    { id: 2, narx: 46.000, title: "Choyxona oshi", description: "An'anaviy Choyxona palovini kashf eting! Shirali qo'y g..." },
    { id: 3, narx: 46.000, title: "Zig'ir oshi", description: "Samarqand zigi'r oshini tatib ko'ring! O'zgacha O'zgacha to'g'ra..." },
    { id: 4, narx: 59.000, title: "To`y oshi komplekt", description: "Go‘shtning mayinligi, xushbo‘y guruch va ziravorlar siz..." },
    { id: 1, narx: 44.000, title: "To'y oshi", description: "Qo'y va mol go‘shtining mayinligi, xushbo‘y lazer guruch..." },
    { id: 2, narx: 46.000, title: "Choyxona oshi", description: "An'anaviy Choyxona palovini kashf eting! Shirali qo'y g..." },
    { id: 3, narx: 46.000, title: "Zig'ir oshi", description: "Samarqand zigi'r oshini tatib ko'ring! O'zgacha O'zgacha to'g'ra..." },
    { id: 4, narx: 59.000, title: "To`y oshi komplekt", description: "Go‘shtning mayinligi, xushbo‘y guruch va ziravorlar siz..." },
  ];

  const napitka = [
    {
      id: 9,
      narx: 10.00,
      rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBSlOEcsSsCgC12LuDByaAXQFKdKQfDQQTg&s",
      title: "Qora Choy",
      description: "Samarqand usulida tayyorlangan issiq qora choy."
    },
    {
      id: 9,
      narx: 15.00,
      rasm: "https://files.oaiusercontent.com/file-F7YnR7LgHMZd117EZ3t7Q9?se=2024-12-06T17%3A51%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df56071dc-a940-45b5-a82f-d5ed151d178e.webp&sig=OA68mCJ/4lZk7Y5zPL3U0zQPIabRO0g6dzmtMKTCYRU%3D",
      title: "Limon Choy",
      description: "Tabiy uslubda tayyorlangan limon choy."
    },
    {
      id: 9,
      narx: 10.00,
      rasm: "https://files.oaiusercontent.com/file-Utjwu9uXW5frRNSMrAR7RK?se=2024-12-06T17%3A51%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcbc9e843-5ff9-4580-b673-5ab7afdfed24.webp&sig=0jrnE1GGgxRAlkG6zriv%2BTFA69VbggVNlCbU2XppDdM%3D",
      title: "Kok Choy",
      description: "Samarqand usulida tayyorlangan issiq kokchoy choy."
    },
    {
      id: 9,
      narx: 20.00,
      rasm: "https://files.oaiusercontent.com/file-9phQV2KkAHfEP1ao47xuyx?se=2024-12-06T17%3A53%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dda12f5e8-222e-4b2a-8011-21abc0150073.webp&sig=Gf9I1BUPNj8jiVsaoHveRVKvUovwjgOs1tNSDN0ylRc%3D",
      title: "Kokteyl",
      description: "Tabiy mevalardan va sutdan tayorlangan kokteyl."
    },
    {
      id: 9,
      narx: 8.00,
      rasm: "https://kamolonosh.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9ee36d5a-80c6-4f1c-a6af-34bc48c8bff2&w=1920&q=75",
      title: "Cocacola",
      description: "Cocacola gazlangan yahna ichimlik 0.5L"
    },
    {
      id: 9,
      narx: 4.00,
      rasm: "https://kamolonosh.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F038ac721-aee4-44e6-80fc-fcff51d78e67&w=1920&q=75",
      title: "Suv gazli/gazsiz",
      description: "Filterlangan tabiy suv."
    },
    {
      id: 9,
      narx: 8.00,
      rasm: "https://kamolonosh.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc866b940-5104-4ef2-8fe0-a3cf0a73d902&w=1920&q=75",
      title: "Fanta",
      description: "Fanta gazlangan yahna ichimlik 0.5L."
    },
    {
      id: 9,
      narx: 8.00,
      rasm: "data:image/jpeg;base64,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",
      title: "Sprite",
      description: "Sprite gazlangan yahna ichimlik 0.5L."
    },
  ];
  


  

  return (
    <div className="Cards">
      <div className="Cards_wrapper">
       <h1 >
          <p>Menu</p>       
       </h1>
        <div className="menu_cards">
          {menuItems.map((item) => (
            <div key={item.id} className="card">
                <img className="oshimg" src="https://kamolonosh.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fb00d2156-eb76-4d0f-a49c-3a18ad9afd54&w=1920&q=75" alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
             <div className="cards">
             <h3>{item.narx}.000<span>som</span></h3>
             <button>qoshish</button>
             </div>
            </div>
          ))}
          
           {napitka.map((item) => (
            <div key={item.id} className="card">
              <img src={item.rasm} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
             <div className="cards">
             <h3>{item.narx}.000<span>som</span></h3>
             <button>qoshish</button>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
