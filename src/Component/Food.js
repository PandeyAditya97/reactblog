import React from 'react'

const Food = ({ props }) => {
  const food = [
    {
      Id: 1,
      img: 'https://images.food52.com/JQ2O1Kkhli1pqgdeigDTiZ6SOeo=/1008x672/filters:format(webp)/9f7eb13d-086a-4cdb-80ce-e366c84238dc--food52_04-23-13-4259.jpg',
      h2: "Thai-Scented Asparagus Soup with Coconut Milk",
      p: `This fragrant soup brings Thai flavors – coconut, lemongrass and ginger – to a fresh, bright, versatile asparagus soup. It can easily be made vegetarian or vegan, works at any time of year (though it is especially great in the spring) and is both filling and healthy. We love to have it for lunch on a casual week day or for an appetizer for a fancy dinner. With a soup like this you just can't go wrong! —Fig Test Kitchen`
    },
    {
      Id: 2,
      img: 'https://images.food52.com/JPr9D0SJgKdHxkZjqQmSvmPlC04=/1008x672/filters:format(webp)/b8e9cc8d-45b9-4fa6-abfd-089c564f76d3--2022-0308_sazon-ramen-final_3x2_james-ransom.jpg',
      h2: 'Sazón Ramen',
      p: `Arroz amarillo, crisp pernil, steaming tamales—growing up, everything I ate had a little bit of sazón in it. This spice blend is usually a combination of garlic, onion, cumin, salt, achiote, and, depending on the brand, sometimes MSG, too. It’s one of the backbones of the Latin American kitchen and makes any dish I cook taste a little more like home, including instant ramen.`
    },
    {
      Id: 3,
      img: 'https://www.seriouseats.com/thmb/Gm6J49wltvTCH2dXt039zkvGZLg=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg',
      h2: 'Fries Fries',
      p: `I'm gonna come right out and say something that I'm sure you won't all openly agree with: McDonald's french fries are great. At their best, they are everything a french fry should be: salty, crisp, light, and not greasy. Granted, you get the occasional odd franchise that lets' em sit under the heat lamp for a couple hours too long, but on the whole, I find it remarkable that the bigwigs have discovered a way to create a frozen fry that comes out virtually identically, regardless of who is working that fry station.`
    },
    {
      Id: 4,
      img: 'https://www.seriouseats.com/thmb/91i37pGTDmMqNDCk-ZyDk2pR5lk=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__04__20200225-beans-and-greens-pasta-vicky-wasik-18-a2842cb4762d4145b53cc83d59aca80f.jpg',
      h2: 'Pasta With Beans and Greens Recipe',
      p: 'antry and budget-friendly meals are always good to have in your cooking repertoire. This recipe, which features humble ingredients but standout flavor, is a great example. Beans and greens are a classic pairing in Italian peasant cuisine (as well as in many other cuisines from around the world), known as cucina povera ("poor cuisine"). '
    },
  ];

  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Food</u></div>

      {food.map((e) =>
        <>
          <h2 className='heading-h2' style={{ cursor: 'pointer' }}>{e.h2}</h2>

          <img src={e.img} alt='image not found' className='img' />

          <div className='container'>

            <p className='para'>{e.p}</p>

          </div>
          <hr className='rule' />
        </>
      )}




    </>

  )
}

export default Food