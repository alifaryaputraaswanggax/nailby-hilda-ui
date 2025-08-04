import React from 'react';
import './App.css';

function Review() {
  //mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Natasha",
      "review": "Murah berkualitas",
      "photo":"https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
    },
    {
      "id": 2,
      "name": "Struick",
      "review": "Murah berkualitas",
      "photo":"https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg"
    },
    {
      "id": 3,
      "name": "Shayne",
      "review": "Murah berkualitas",
      "photo":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    }
  ];
  const listReview = users.map((itemReview) =>
    <div className="Item">
      <img src={itemReview.photo} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Review;