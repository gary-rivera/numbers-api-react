import './CategoryContainer.css';
import CategoryCard from './CategoryCard';

function CategoryContainer() {
  return (
    <section id="usage-outer"> 
      <div id="usage">
        <CategoryCard title="MATH"/>
        <CategoryCard title="TRIVIA"/>
        <CategoryCard title="DATE"/>
      </div>
    </section>
  )
}

export default CategoryContainer;