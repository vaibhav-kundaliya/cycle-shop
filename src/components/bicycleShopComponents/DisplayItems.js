import { React, useEffect, useState } from "react";
import css from "./design/DisplayItems.module.css";
import { Select, Input, Slider, List, Button } from "antd";
import Card from "../cardListComponents/Card";
import CustomButton from "../buttonComponents/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAccessories, getBicycles, getAllProducts } from "../../actions/fetchActions";
const { Search } = Input;

export default function DisplayItems() {
   const items = [
      {
         id: 1,
         name: "Kryo X26 MTB – Model K",
         price: "$350.00",
         image: require("../../assets/imgs/bicycle-1.jpg"),
         rating: 4,
         description: "Product Description",
      },
      {
         id: 2,
         name: "Kryo X26 MTB – Model X",
         price: "$350.00",
         image: require("../../assets/imgs/bicycle-2.jpg"),
         rating: 1,
         description: "Product Description",
      },
      {
         id: 3,
         name: "Kryo X26 MTB – Model Y",
         price: "$350.00",
         image: require("../../assets/imgs/bicycle-3.jpg"),
         rating: 5,
         description: "Product Description",
      },
      {
         id: 4,
         name: "Kryo X26 MTB – Model Z",
         price: "$350.00",
         image: require("../../assets/imgs/bicycle-4.jpg"),
         rating: 0,
         description: "Product Description",
      },
   ];
   const options = [
      { value: 0, label: "Default Sorting" },
      { value: 1, label: "Sort By Popularity" },
      { value: 2, label: "Sort By Average Rating" },
      { value: 3, label: "Sort By latest" },
      { value: 4, label: "Sort By Price: low to high" },
      { value: 5, label: "Sort By Price: hight to low" },
   ];

   const minPrice = 0,
      maxPrice = 1000;
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const [range, setRange] = useState([queryParams.get("minPrice") || minPrice, queryParams.get("maxPrice") || maxPrice]);
   const [catagory, setCatagory] = useState(queryParams.get("catagory") || "");

   const displayRange = (element) => {
      setRange([element[0], element[1]]);
   };

   const navigate = useNavigate();

   let path = location.pathname;

   const handleSearch = (value) => {
      // console.log(`Selected: ${value}`);
   };

   const [url, setUrl] = useState(window.location.href);

   const AssignFilters = (min, max, cat) => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("minPrice", min);
      newSearchParams.set("maxPrice", max);
      newSearchParams.set("catagory", cat);
      const newUrl = `${location.pathname}?${newSearchParams.toString()}`;
      navigate(newUrl);
      setUrl(newUrl);
      setCatagory(cat);
      console.log("URL UPDATED", newUrl);
   };

   const handleFilter = (event) => {
      event.preventDefault();
      const cat = queryParams.get("catagory") ? queryParams.get("catagory") : "All";
      AssignFilters(range[0], range[1], cat);
   };

   const handleCatagory = (cat) => {
      AssignFilters(range[0], range[1], cat);
   };

   const dispatch = useDispatch();

   const all_products = useSelector((state) => {
      return state.productReducer.all_products;
   });

   const bicycles = useSelector((state) => {
      return state.productReducer.bicycles;
   });
   const accessories = useSelector((state) => {
      return state.productReducer.accessories;
   });

   const [products, setProducts] = useState(all_products);

   

   useEffect(() => {
      console.log(url, queryParams.get("catagory"));
      const cat = queryParams.get("catagory");
      if (cat === "All" || !cat) setProducts(all_products);
      else if (cat === "Bicycle") setProducts(bicycles);
      else if (cat === "Accessories") setProducts(accessories);
      dispatch(getAllProducts(`http://localhost:8001/productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&catagory=`));
      dispatch(getBicycles(`http://localhost:8001/productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=Bicycle`));
      dispatch(getAccessories(`http://localhost:8001/productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=Accessory`));
   }, [url, catagory]);

   return (
      <div className={css.itemsandfilters}>
         <div className={css.displayItems}>
            Home {path}
            <div className={css.title + " group-3"}>
               <h1>{catagory ? catagory : "All Products"}</h1>
            </div>
            <div className={css.listitems}>
               <div className={css.resultCount}>
                  <p>Showing all {products.length} results</p>
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
                  dataSource={products}
                  renderItem={(element) => (
                     <List.Item>
                        <Card element={element} width={"20px"} style={{ borderRadius: "0px" }} />
                     </List.Item>
                  )}
               />
            </div>
         </div>

         <div className={css.filters}>
            <div className={css.searchbar}>
               <div className="group-4">
                  <span>Search</span>
               </div>
               <Search placeholder="Search Products..." enterButton size="large" style={{ borderRadius: 0 }} />
            </div>

            <div className={css.filterbar}>
               <div className="group-4">
                  <span>Filter by price</span>
               </div>
               <form onSubmit={handleFilter}>
                  <Slider
                     range={{
                        draggableTrack: true,
                     }}
                     defaultValue={[range, maxPrice]}
                     min={minPrice}
                     max={maxPrice}
                     value={[range[0], range[1]]}
                     onChange={displayRange}
                  />
                  <div className={css.filterbaramount}>
                     <div>${range[0]}</div>
                     <div>${range[1]}</div>
                  </div>
                  <div className={css.filterbuttons}>
                     <div onClick={() => setRange([minPrice, maxPrice])}>
                        <CustomButton text="RESET" />
                     </div>
                     <Button type="primary" htmlType="submit">
                        APPLY
                     </Button>
                  </div>
               </form>
            </div>

            <div className={css.filtercatagory}>
               <div className="group-4">
                  <span>Filter by catagories</span>
               </div>
               <ul>
                  <li>
                     <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                           // SetAllProducts();
                           handleCatagory("");
                        }}
                     >
                        All
                     </span>{" "}
                     ({all_products.length})
                  </li>
                  <li>
                     <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                           handleCatagory("Bicycle");
                        }}
                     >
                        Bicycle
                     </span>{" "}
                     ({bicycles.length})
                  </li>
                  <li>
                     <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                           // SetAccessories();
                           handleCatagory("Accessories");
                        }}
                     >
                        Accessory
                     </span>{" "}
                     ({accessories.length})
                  </li>
               </ul>
            </div>

            <div className={css.resentlyviewedproducts}>
               <div className="group-4">
                  <span>Recently viewed products</span>
               </div>
               <div className={css.recently_item}>
                  <div>
                     <img src={items[0].img} alt={items[0].img} />
                  </div>
                  <div>
                     <div className="">{items[0].name}</div>
                     <div className="">{items[0].price}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
