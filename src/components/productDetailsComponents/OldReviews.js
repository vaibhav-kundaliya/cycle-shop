import React from 'react'
import css from "./design/OldReviews.module.css"
import {Avatar, Rate} from "antd"
import { UserOutlined } from '@ant-design/icons';

export default function OldReviews() {
  return (
     <div className={css.ReviewTemplate}>
      <div className={css.avatar_icon}>
     <Avatar size={56} icon={<UserOutlined />} />
      </div>
      <div className={css.review_text}>
         <div className={css.review_title}>Your review is awaiting approval</div>
         <div className={css.review_rating}><Rate disabled defaultValue={2} style={{color:"gray"}} /></div>
         <div className={css.reviwe_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellendus inventore incidunt labore quas! Architecto odio veritatis laudantium nobis. Iusto accusantium ex deserunt, unde, esse nam nihil totam pariatur, aperiam expedita vitae sint eligendi! Numquam possimus laboriosam enim necessitatibus quidem sint dignissimos qui animi maiores ex, maxime fuga reprehenderit. Provident!</div>
      </div>
    </div>
  )
}
