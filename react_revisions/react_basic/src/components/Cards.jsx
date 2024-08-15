import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [people, setPeople] = useState([
        {
            name: "John Doe",
            city: "New York",
            designation: "Software Engineer",
            imageUrl: "https://images.pexels.com/photos/4672731/pexels-photo-4672731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Jane Smith",
            city: "Los Angeles",
            designation: "Product Manager",
            imageUrl: "https://images.pexels.com/photos/3768181/pexels-photo-3768181.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Carlos Martinez",
            city: "Miami",
            designation: "UX Designer",
            imageUrl: "https://images.pexels.com/photos/3779423/pexels-photo-3779423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Emily Johnson",
            city: "Chicago",
            designation: "Data Scientist",
            imageUrl: "https://images.pexels.com/photos/3775157/pexels-photo-3775157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Rajesh Kumar",
            city: "San Francisco",
            designation: "DevOps Engineer",
            imageUrl: "https://images.pexels.com/photos/3776200/pexels-photo-3776200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Linda Lee",
            city: "Seattle",
            designation: "Marketing Specialist",
            imageUrl: "https://media.istockphoto.com/id/1752487009/photo/young-woman-sitting-cozy-on-sofa-in-living-room-and-using-laptop.jpg?s=612x612&w=0&k=20&c=qyqodFPg1P5GkKTAa3Q3Zak5sVeG5NFZkSZ2TxeNhGU="
        },
        {
            name: "Ahmed Hassan",
            city: "Houston",
            designation: "Cybersecurity Analyst",
            imageUrl: "https://media.istockphoto.com/id/1443375611/photo/young-fashionable-woman-working-at-home.jpg?s=612x612&w=0&k=20&c=Ce4cyarj6eRJyWlBAR1hm1AEzzltJSHoItRyffYrtVg="
        },
        {
            name: "Fatima Begum",
            city: "Boston",
            designation: "Content Writer",
            imageUrl: "https://images.pexels.com/photos/3602925/pexels-photo-3602925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Liam Brown",
            city: "Denver",
            designation: "Sales Executive",
            imageUrl: "https://images.pexels.com/photos/3784295/pexels-photo-3784295.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Sophia Green",
            city: "Austin",
            designation: "HR Manager",
            imageUrl: "https://media.istockphoto.com/id/1312195476/photo/portrait-of-young-student-chatting-with-colleagues-about-online-exams-during-pandemic.jpg?s=612x612&w=0&k=20&c=ejIm400qJeLCycW0yBKLCtK_64LfGYmf7e8m69Z059s="
        },
        {
            name: "John Doe",
            city: "New York",
            designation: "Software Engineer",
            imageUrl: "https://images.pexels.com/photos/4672731/pexels-photo-4672731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Jane Smith",
            city: "Los Angeles",
            designation: "Product Manager",
            imageUrl: "https://images.pexels.com/photos/3768181/pexels-photo-3768181.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Carlos Martinez",
            city: "Miami",
            designation: "UX Designer",
            imageUrl: "https://images.pexels.com/photos/3779423/pexels-photo-3779423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Emily Johnson",
            city: "Chicago",
            designation: "Data Scientist",
            imageUrl: "https://images.pexels.com/photos/3775157/pexels-photo-3775157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Rajesh Kumar",
            city: "San Francisco",
            designation: "DevOps Engineer",
            imageUrl: "https://images.pexels.com/photos/3776200/pexels-photo-3776200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Linda Lee",
            city: "Seattle",
            designation: "Marketing Specialist",
            imageUrl: "https://media.istockphoto.com/id/1752487009/photo/young-woman-sitting-cozy-on-sofa-in-living-room-and-using-laptop.jpg?s=612x612&w=0&k=20&c=qyqodFPg1P5GkKTAa3Q3Zak5sVeG5NFZkSZ2TxeNhGU="
        },
        {
            name: "Ahmed Hassan",
            city: "Houston",
            designation: "Cybersecurity Analyst",
            imageUrl: "https://media.istockphoto.com/id/1443375611/photo/young-fashionable-woman-working-at-home.jpg?s=612x612&w=0&k=20&c=Ce4cyarj6eRJyWlBAR1hm1AEzzltJSHoItRyffYrtVg="
        },
        {
            name: "Fatima Begum",
            city: "Boston",
            designation: "Content Writer",
            imageUrl: "https://images.pexels.com/photos/3602925/pexels-photo-3602925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Liam Brown",
            city: "Denver",
            designation: "Sales Executive",
            imageUrl: "https://images.pexels.com/photos/3784295/pexels-photo-3784295.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            name: "Sophia Green",
            city: "Austin",
            designation: "HR Manager",
            imageUrl: "https://media.istockphoto.com/id/1312195476/photo/portrait-of-young-student-chatting-with-colleagues-about-online-exams-during-pandemic.jpg?s=612x612&w=0&k=20&c=ejIm400qJeLCycW0yBKLCtK_64LfGYmf7e8m69Z059s="
        }
    ]);
    const deletehandler=(index)=>{
        event.preventDefault();
       // console.log(index)
       setPeople((prev)=>
     { let data=[...prev];
        data.splice(index,1);
       // console.log("index deleted "+index);
        return data;
    }

    )
    }

    
   
    return (
       <div className="main flex flex-col px-20">
        {
           // true&&<h1>Cards Componets</h1>  or
           people.length>0?<h1 className='text-2xl font-bold '>* List of People</h1>:<h1 className='text-2xl font-bold '>* No people found</h1>
        }
         <div className="flex gap-4 sm:justify-center lg:justify-around flex-wrap">
            
            {people.map((data, index) => (
                <Card   deletehandler={()=>deletehandler(index)} key={index} data={data} />
            ))}
        </div>
       </div>
    );
}

export default Cards;
