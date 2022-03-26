import React from 'react'
const Bollywood = () => {
  const bollywood = [
    {
      Id: 1,
      img: 'https://www.crictracker.com/wp-content/uploads/2021/12/Shabaash-Mithu-poster.jpg',
      h2: "Tapsee Panu in Mithali Raj biopic",
      p: `Tapsee Panu is an Indian actress,who appears in Hindi films.She made her debut for Tamil Movie named Jhummandi Nadam. This movie is a Biopic for one of the greatest women cricketer and Indian Women's Cricket team Captain Mithali Raj`,
    },
    {
      Id: 2,
      img: 'https://images.firstpost.com/wp-content/uploads/2022/02/the-kashmir-files-.jpg?impolicy=website&width=1200&height=800',
      h2: 'A Real Life Incident :Kashmir Files',
      p: `A Genocide happen in one of the most beautiful part of india Kashmir Valley,where kashmiri pandit's were forced to leave the valley or convert them.There are numerous sides of stories but the worst thing is more than 1lakh kashmiri's have to leave there home and still waiting to go back.`,

    },
    {
      Id: 3,
      img: 'https://filmfare.wwmindia.com/content/2022/feb/pathan-poster.jpg',
      h2: 'Shahrukh making comeback to Big Screen',
      p: `Pathan is an upcoming film directed by Siddharth Anand starring SRK,Deepika and John Abraham.With this movie SRK is making comeback to big Screen after ZERO.This movie is expected to release in start of 2023`,
    },
    {
      Id: 4,
      img: 'https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&format=webp&t=pvorg',
      h2: 'RRR:A Heavy Star Pack Movie',
      p: 'MOvie is based on real Incident of 1920 during British Colonisation.Starring N.T Rama Rao jr and Ram Charan both are very popular and awarded actors belonging to Tollywood.',
    },
  ];
  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Bollywood</u></div>
      {bollywood.map((e) =>
        <>
          <h2 className='h2'>{e.h2}</h2>
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

export default Bollywood