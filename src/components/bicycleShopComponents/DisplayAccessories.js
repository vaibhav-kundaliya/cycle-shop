import { React, useState } from "react";
import css from "./design/DisplayItems.module.css";
import { Select, List} from "antd";
import Card from "../cardListComponents/Card";

const sortByPropertyName = (property) => (a, b) => {
   if (a[property] < b[property]) return -1;
   if (a[property] > b[property]) return 1;
   return 0;
};

const sortByPropertyPrice = (property) => (a, b) => a[property] - b[property];


export default function DisplayAccessories({path, accessories}) {
   const options = [
      { value: 0, label: "Sort By New Arrival" },
      { value: 1, label: "Sort By Name" },
      { value: 2, label: "Sort By Price: Low to High" },
      { value: 3, label: "Sort By Price: Hight to Low" },
   ];
   
   const [sorting, setSorting] = useState(0)

   const sortfun = (perameter) => {
      if (perameter === 0) return accessories?.slice()?.reverse();
      if (perameter === 1) return accessories?.slice()?.sort(sortByPropertyName("name"));
      if (perameter === 2) return accessories?.slice()?.sort(sortByPropertyPrice("price"));
      if (perameter === 3) return accessories?.slice()?.sort(sortByPropertyPrice("price"))?.reverse();
   };

   const handleSort = (value) => {
      setSorting(value)
   };


   return (
      <div className={css.displayItems}>
         Home / Store / Accessories
         <div className={css.title + " group-3"}>
            <h1>Accessories</h1>
         </div>
         <div className={css.listitems}>
            <div className={css.resultCount}>
               <p>Showing all {accessories?.length} results</p>
            </div>
            <div className={css.sortingOptions}>
               <Select
                  size="large"
                  defaultValue={0}
                  onChange={handleSort}
                  style={{
                     width: 200,
                     borderRadius: 0,
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
               dataSource={sortfun(sorting)}
               renderItem={(element) => (
                  <List.Item>
                     <Card element={element} style={{ borderRadius: "0px" }} />
                  </List.Item>
               )}
            />
         </div>
      </div>
   );
}