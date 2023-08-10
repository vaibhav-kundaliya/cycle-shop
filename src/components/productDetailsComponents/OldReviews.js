import React from 'react'
import "./design/OldReviews.css"
import {Avatar, Rate} from "antd"
import { UserOutlined } from '@ant-design/icons';

export default function OldReviews() {
  return (
     <div className="ReviewTemplate">
      <div className="avatar_icon">
     <Avatar size={56} icon={<UserOutlined />} />
      </div>
      <div className='review_text'>
         <div className='review_title'>Your review is awaiting approval</div>
         <div className='review_rating'><Rate disabled defaultValue={2} style={{color:"gray"}} /></div>
         <div className='reviwe_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repellendus inventore incidunt labore quas! Architecto odio veritatis laudantium nobis. Iusto accusantium ex deserunt, unde, esse nam nihil totam pariatur, aperiam expedita vitae sint eligendi! Numquam possimus laboriosam enim necessitatibus quidem sint dignissimos qui animi maiores ex, maxime fuga reprehenderit. Provident!</div>
      </div>
    </div>
  )
}
