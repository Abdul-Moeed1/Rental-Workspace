import { newDummyData } from "../../../Products/DummyProduct/DummyData";

export const fetchElectronicsData = async () => {  
      const data = newDummyData;
      const electronicsData = data[6];
      return electronicsData.items;
};
  