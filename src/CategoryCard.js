//import;

function CategoryCard({ title }) {
  return (
    <div className="example"> 
      <h2>{title}</h2>
      <div className="example-box">
        <a href="#">numbersapi.com</a>
        <div className="api-result scroll"></div>
      </div>
    </div>
  )
}

export default CategoryCard;