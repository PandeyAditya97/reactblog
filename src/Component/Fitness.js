import React from 'react'

const Fitness = () => {
  const fitness = [
    {
      Id: 1,
      img: 'https://www.nerdfitness.com/wp-content/uploads/2012/08/lego-batman-2048x856.jpg',
      h2: "The Batman Workout",
      p: `Now, a gym could be useful here. However, sometimes we don’t always have access to a fitness facility.
      Maybe we’ve been thrown into some sketchy prison somewhere (thanks Bane).   
      BUT, that doesn’t mean we can’t work out. It just means we have to focus on bodyweight exercises.`
    },
    {
      Id: 2,
      img: 'https://www.nerdfitness.com/wp-content/uploads/2019/12/lego-vegetable-cutting.jpg',
      h2: 'Flexi-Tarian',
      p: `You can think of this diet as a ‘vegetarian-ish’ way of eating since this plan touts the basic principles and benefits of a plant-based diet, along with the inclusion of some animal proteins to a lesser extent.`
    },
    {
      Id: 3,
      img: 'https://www.nerdfitness.com/wp-content/uploads/2015/08/woman-toe-touch.jpg',
      h2: 'Toe-Touch: Stretch Mode',
      p: `Increase range of motion. If you can move a joint through its full range of motion, you’re gonna have more freedom of movement. Confidently navigating the physical world is a sign of a healthy nerd, which is why flexibility shouldn’t be overlooked. One of the best ways to become more flexible is to stretch`
    },
    {
      Id: 4,
      img: 'https://www.nerdfitness.com/wp-content/uploads/2019/01/nerd-fitness-camp-bench-768x512.jpg',
      h2: 'Bench Press',
      p: 'The three movements – bench press, belly toss, and floor press were all popular until the 40’s and 50’s, when the bench press started to become more and more popular, as bodybuilders liked how the bench worked their pecs (better than the other two movements).'
    },
  ];
  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Fitness</u></div>

      {fitness.map((e) =>
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

export default Fitness