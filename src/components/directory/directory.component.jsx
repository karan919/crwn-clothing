import CategoryItem from "../category-items/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem id={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
