export default function CategoryList({
  list,
  onCategoryClick,
  selectedCategory,
}) {
  return (
      <ul className="category-list">
        {list.map((category) => (
          <li
            className={selectedCategory === category.replace('FAKE: ','') ? "selected" : "category-item"}
            key={category}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
  );
}
