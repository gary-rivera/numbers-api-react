import './CategoryCard.css';

const BASE_URL = 'numbersapi.com';


function CategoryCard(props) {
  let type = props.title;

  function generateHref() {
    if(type === "math") return `${BASE_URL}/5/${type}`;
    if(type === 'trivia') return `${BASE_URL}/42`;
    if(type === 'date') return `${BASE_URL}/5/10/${type}`
  }

  return (
    <div className="example"> 
      <h2>{type}</h2>
      <div className="example-box">
        <a href="#">{generateHref()}</a>
        <div className="api-result scroll">
          {props.facts[type]}
        </div>
      </div>
    </div>
  )
}

CategoryCard.defaultProps = { facts: {
  trivia: "42 is the number of little squares forming the left side trail of Microsoft's Windows 98 logo.",
  math: "5 is the number of platonic solids.",
  date: "May 10th is the day in 1997 that the Maeslantkering, a storm surge barrier in the Netherlands that is one of the world's largest moving structures, is opened by Queen Beatrix."
  }
}

export default CategoryCard;