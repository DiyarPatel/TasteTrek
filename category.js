import { useRouter } from "next/router";
import CategoryRecipes from "../components/CategoryRecipes";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) {
    return null;
  }

  return <CategoryRecipes category={category} />;
};

export default CategoryPage;
