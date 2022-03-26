import React from 'react'

const Technology = () => {
  const technology = [
    {
      Id: 1,
      img: 'https://i.insider.com/6123e085de5f560019e85771?width=1200&format=jpeg',
      h2: "NFT : A future in process.",
      p: `The past two years have shown us that NFTs’ influence is growing, and fast. NFTs hold a tremendous amount of potential not only for buyers, but for artists as well.The purchase of an NFT doesn’t only reflect a buyer’s taste, it also tells us what they think might be a prudent financial investment.`
    },
    {
      Id: 2,
      img: 'https://techcrunch.com/wp-content/uploads/2018/09/GettyImages-1035624750.jpg?w=1390&crop=1',
      h2: 'Data Transfer : Privacy issues',
      p: `The European Union has just announced reaching an agreement in principle with the U.S. on a revived trans-Atlantic data flows deal — potentially signaling an end to the many months of legal uncertainty that has dogged cloud services after a landmark court ruling in July 2020 that struck down the EU-U.S. Privacy Shield.`
    },
    {
      Id: 3,
      img: 'https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-1163035564.jpg?w=1390&crop=1',
      h2: 'Netflix Gaming Acquisition ',
      p: `Netflix has acquired Texas-based independent game developer Boss Fight Entertainment, the company announced in a blog post. The financial terms of the deal were not disclosed. The deal, which marks Netflix’s third acquisition of a gaming company, is part of the streaming service’s ongoing push toward gaming.`
    },
    {
      Id: 4,
      img: 'https://cdn.vox-cdn.com/thumbor/0LqtazZi1l019XyQrxVRxdzxR_Y=/0x0:3574x2500/920x613/filters:focal(1377x805:1947x1375):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70564007/GettyImages_1237956184.0.jpg',
      h2: 'War in time of Crypto.',
      p: 'Cryptocurrency is now a more mainstream part of the global financial system, which means that — for better or for worse — it’s inevitably a part of international conflict, too. This is on full display as Russian forces invade Ukraine. Some Ukrainians are also turning to crypto as an alternative to Ukrainian financial institutions, which are limiting people’s access to bank accounts and foreign currency. In a scenario where governments are in chaos, it’s difficult to rely on traditional banks, and there’s fear of surveillance. So a relatively anonymous system where no government is involved is appealing.'
    },
  ];
  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Technology</u></div>
      {technology.map((e) =>
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

export default Technology