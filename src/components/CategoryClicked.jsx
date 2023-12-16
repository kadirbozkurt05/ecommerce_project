import { useState } from "react";
import CategoryList from "./CategoryList.jsx";
import AllProducts from "./AllProducts.jsx"
import allProducts from "../fake-data/all-products.js";
import allCategories from "../fake-data/all-categories.js";

export default function CategoryClicked() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category.replace('FAKE: ','')) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category.replace('FAKE: ',''));
    }
  };

  let filteredProducts;


  if (selectedCategory) {
    filteredProducts = allProducts.filter(
      (product) => product.category === selectedCategory
    );
  } else {
    filteredProducts = allProducts;
  }

  return (
    <div>
      <CategoryList
        selectedCategory={selectedCategory}
        list={allCategories}
        onCategoryClick={handleCategoryClick}
      />
      <AllProducts list={filteredProducts} />
    </div>
  );
}
