import { useContext } from "react";
import { Box } from "@mui/material";
import ProductCard from "../../components/category/product-card.component";
import { ProductsContext } from "../../context/products.context";

const Shop: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Box py={4} bgcolor="background.default">
      <Box px={4} mx="auto">
        <Box display="flex" flexWrap="wrap" mx={-3}>
          sadas
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Shop;
