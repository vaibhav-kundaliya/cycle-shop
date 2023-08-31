import { React, useState } from "react";
import css from "./design/DisplayItems.module.css";
import { Select } from "antd";
import CardList from "../cardListComponents/CardList";
import {sortByPropertyName, sortByPropertyPrice} from "../../utilities/sortingfun"

export default function DisplayAccessories({ accessories }) {
   const options = [
      { value: 0, label: "Sort By New Arrival" },
      { value: 1, label: "Sort By Name" },
      { value: 2, label: "Sort By Price: Low to High" },
      { value: 3, label: "Sort By Price: Hight to Low" },
   ];
   const [sorting, setSorting] = useState(0);

   const sortfun = (perameter) => {
      if (perameter === 0) return accessories?.slice()?.reverse();
      if (perameter === 1) return accessories?.slice()?.sort(sortByPropertyName("name"));
      if (perameter === 2) return accessories?.slice()?.sort(sortByPropertyPrice("price"));
      if (perameter === 3) return accessories?.slice()?.sort(sortByPropertyPrice("price"))?.reverse();
   };

   const handleSort = (value) => {
      setSorting(value);
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
            <CardList product_list={sortfun(sorting)} />
         </div>
      </div>
   );
}
