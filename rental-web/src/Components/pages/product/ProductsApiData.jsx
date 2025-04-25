import { newDummyData } from "../../Products/DummyProduct/DummyData";

export const fetchProductData = async () => {
  const data = newDummyData;
  // adjust index if products array position changes
  const electronicsData = data[6];
  return electronicsData.items;
};