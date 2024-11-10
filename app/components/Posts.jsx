"use client"
import React, { useEffect, useState } from 'react'
import { faker } from "@faker-js/faker";
import { Post } from './Post';

export const Posts = () => {
        const [posts , setPosts]= useState([])
        useEffect(() =>{

                        const posts= [...Array(100)].map(post =>({
                               username : faker.person.firstName() + faker.person.fullName(), 
                               id : post,
                               userimg : faker.image.urlPicsumPhotos(), 
                               img : faker.image.urlPicsumPhotos() , 
                               caption : faker.lorem.paragraphs()
       
                       }))
                       setPosts(posts)
        },[])
                
  return (
    <div>
        {posts.map(post=>( <Post key={post.id} username={post.username} userimg= {post.userimg} img={post.img} caption={post.caption}  />))}
    </div>
  )
}
