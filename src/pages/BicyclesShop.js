// import React from "react";
import { React, useEffect, useState } from "react";
import { Input, Slider, Button } from "antd";
import CustomButton from "../components/buttonComponents/CustomButton";
import DisplayAccessories from "../components/bicycleShopComponents/DisplayAccessories";
import DisplayBicycles from "../components/bicycleShopComponents/DisplayBicycles";
import { useLocation, useNavigate, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAccessories, getBicycles } from "../actions/fetchActions";
import css from "../components/bicycleShopComponents/design/DisplayItems.module.css";
const { Search } = Input;

export default function BicyclesShop() {
   const minPrice = 0,
      maxPrice = 1000;
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const [range, setRange] = useState([queryParams.get("minPrice") || minPrice, queryParams.get("maxPrice") || maxPrice]);

   const displayRange = (element) => {
      setRange([element[0], element[1]]);
   };

   const navigate = useNavigate();

   let path = location.pathname;

   const [url, setUrl] = useState(window.location.href);

   const AssignFilters = (min, max) => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("minPrice", min);
      newSearchParams.set("maxPrice", max);
      const newUrl = `${location.pathname}?${newSearchParams.toString()}`;
      navigate(newUrl);
      setUrl(newUrl);
   };

   const handleFilter = (event) => {
      event.preventDefault();
      AssignFilters(range[0], range[1]);
   };

   const dispatch = useDispatch();

   const bicycles = useSelector((state) => {
      return state.productReducer.bicycles;
   });

   const accessories = useSelector((state) => {
      return state.productReducer.accessories;
   });

   useEffect(() => {
      dispatch(getBicycles(`http://localhost:8001/productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=Bicycle`));
      dispatch(getAccessories(`http://localhost:8001/productFilter?minPrice=${range[0]}&maxPrice=${range[1]}&category=Accessory`));
   }, [url]);

   return (
      <>
         <div className={css.itemsandfilters}>
            <Routes path="/">
               <Route exact path="" element={<DisplayBicycles bicycles={bicycles} />} />
               <Route exact path="accessories" element={<DisplayAccessories accessories={accessories} />} />
            </Routes>
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
                        <Link to="/store/">
                           <span
                              style={{ cursor: "pointer" }}
                              
                           >
                              Bicycle
                           </span>{" "}
                           ({bicycles.length})
                        </Link>
                     </li>
                     <li>
                        <Link to="/store/accessories">
                           <span
                              style={{ cursor: "pointer" }}
                              
                           >
                              Accessory
                           </span>{" "}
                           ({accessories.length})
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className={css.resentlyviewedproducts}>
                  <div className="group-4">
                     <span>Recently viewed products</span>
                  </div>
                  <div className={css.recently_item}>
                     <div>{/* <img src={items[0].img} alt={items[0].img} /> */}</div>
                     <div>
                        {/* <div className="">{items[0].name}</div>
                     <div className="">{items[0].price}</div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
