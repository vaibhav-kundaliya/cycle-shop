import { React } from "react";
import css from "./design/DisplayItems.module.css";
import { Select, List} from "antd";
import Card from "../cardListComponents/Card";

export default function DisplayAccessories({path, accessories}) {
   const options = [
      { value: 0, label: "Default Sorting" },
      { value: 1, label: "Sort By Popularity" },
      { value: 2, label: "Sort By Average Rating" },
      { value: 3, label: "Sort By latest" },
      { value: 4, label: "Sort By Price: low to high" },
      { value: 5, label: "Sort By Price: hight to low" },
   ];
   
   const handleSearch = (value) => {
      // console.log(`Selected: ${value}`);
   };

   return (
      <div className={css.displayItems}>
         Home {path}
         <div className={css.title + " group-3"}>
            <h1>Accessories</h1>
         </div>
         <div className={css.listitems}>
            <div className={css.resultCount}>
               <p>Showing all {accessories.length} results</p>
            </div>
            <div className={css.sortingOptions}>
               <Select
                  size="large"
                  defaultValue={0}
                  onChange={handleSearch}
                  style={{
                     width: 200,
                     borderRadius: 0,
                     color: "red",
                  }}
                  options={options}
               />
            </div>
         </div>
         <div className={css.cardlist}>
            <List
               grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 3,
                  xl: 3,
                  xxl: 3,
               }}
               dataSource={accessories}
               renderItem={(element) => (
                  <List.Item>
                     <Card element={element} width={"20px"} style={{ borderRadius: "0px" }} />
                  </List.Item>
               )}
            />
         </div>
      </div>
   );
}
