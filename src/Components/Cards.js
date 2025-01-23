import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) =>{

    let courses = props.courses;
    const [likedCourses,setLikedCourses] = useState([]);
    let category = props.category;

    function getCourses(){
        if(category === "All"){
            let allcourses = [];
            Object.values(courses).forEach( array => {
                array.forEach(courseData => {
                    allcourses.push(courseData);
                })
            })
            return allcourses;
        }
        else{
            return courses[category]; 
        }
        
    }

    return(
        <div className="flex flex-wrap justify-center mb-4 gap-4">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }

        </div>
    )
};

export default Cards;