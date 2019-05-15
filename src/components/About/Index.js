import React from 'react'

export default function Index() {
  return (
    <div className="about">
    
      <h1>About App</h1>
      <p>Git Finder - Search github users.</p> 

      <p>Created with React.js (create-react-app).</p> 
      <p>This app was built in response to an interview test exercise.</p> 
      <p>Luckily nobody got injured during the process of making this app ":)"</p>
      <p>I learnt a lot during the coding process and hope this repo might be of some use to you. </p>

      <br/>
      <h3>Improvements I would have made.</h3>
      <p>One aspect I would like to improve would be in the pagination and Home components, I belive that methods can be rewritten using a more DRY approach.</p>
      <p>I also would like to carryout unit tests on my dev-branch repo as well as ensure the views are responsive and accessible.</p>
      <p>I would consider add context api or redux depending on the extent to which I desire to scale the app. Personally I feel adding a store to the app now will be a bit of an overkill.</p>

      <br/>
      <h3>Credits</h3>
      <p>I will like to give credit to <a href="https://codepen.io/Idered/pen/vytkH">Kasper Mikiewicz</a> for using his CSS only modal codepen.</p>
      <p>I will also like to thank all the great people at Github for puting together the wonderful restful api that was used to create this project. </p>
    </div>
  )
}
