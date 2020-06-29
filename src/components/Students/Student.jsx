import React from 'react';

const Students = (props) => (
  <>
{this.state.Students.map((name, bio, scores) =>
 <Student
name = {name}
bio = {bio}
scores = {eachScore()}
/>
)}

  </>
  )

function eachScore(score) {
 this.state.Students.scores.map((date, score) =>
 <div>
<Date 
date={date}  />
<Score
score={score}
/>
</div>
)
}

export default Students;