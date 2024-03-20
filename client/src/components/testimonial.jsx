import React from 'react'
import './testimonial.css';
function NonActiveCard({ name, time, description, stars }) {
  return (
    <div className="nonactivecard">
      <p className="namei">{name}</p>
      <p className="time">{time}</p>
      <p className="descp">{description}</p>
      <div className="stars">{stars}</div>
    </div>
  );
}
function ActiveCard({ name, time, description, stars }) {
  return (
    <div className="activecard">
      <p className="name">{name}</p>
      <p className="time">{time}</p>
      <p className="descp">{description}</p>
      <div className="stars">{stars}</div>
    </div>
  );
}

function Testimonial() {

  const cardData = [
    {
      name: 'Mr Arvind Jha.',
      time: '1 Hrs ago',
      description:'The services provided by NyaySeva are really appreciable and trustworthy . I was trapped in Cyber Crime a month ago and the authorities said that it would be very difficult to find Lawyer expert in handling Cyber Cases , fortunataly I came to know about NyaySeva I not only won the legal battle but also built trust with the team Thanks to the team',
      stars: '* * * * *',
      isActive: false,
    },
    {
      name: 'Mr Harsh Saxena.',
      time: '1 month ago',
      description:"The work of website truly matches with name . The team really have experienced and trustworthy LSPs and also in such a affordable pricing . The website hardly charges on the clients it is way much lesser then the services providers present offline, They are really serving the public.",
      stars: '* * * * *',
      isActive: true,
    },
    {
      name: 'Miss Somya.',
      time: '1 day ago',
      description:"I am a software engineer in New Delhi , recently my family was looking for a Lawyer to resolve the property issues for which I surfed through NyaySeva and it was my best desicion wtihin a hour the Lawyer contacted me and started Legal process not only my time was saved but also I did'nt skip my office",
      stars: '* * * * *',
      isActive: false,
    },
    // Add more card data objects as needed...
  ];

  return (
    <div className="ratings">
      <div className="head">
        <h2 className="pinkhead">Our Users</h2>
        <h1 className="mainhead">What Customers Say</h1>
        <h2 className="greyhead">Not Sure Yet? See what our users say about our website builders!</h2>
      </div>
      <div className="ratingbox">
        {cardData.map((card, index) => {
          if (card.isActive) {
            return (
              <ActiveCard
                key={index}
                name={card.name}
                time={card.time}
                description={card.description}
                stars={card.stars}
              />
            );
          } else {
            return (
              <NonActiveCard
                key={index}
                name={card.name}
                time={card.time}
                description={card.description}
                stars={card.stars}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Testimonial


