"use client"
import React from 'react'
import { FiSearch } from "react-icons/fi";
import {useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'

const page = () => {
  const [users, setUsers] = useState([]);


//  async function handler(req, res) {
//   try {
//     const response = await axios.get(
//       'https://randomuser.me/api/?page=5&results=5'
//     );

    // Extract user information from the 'results' key
    // const users = response.data.results.map((user) => ({
      // Picture: user.picture
    //   Name: user.name.first.last,
    //   location:user.location.country
    //   gender: user.gender
    //   email: user.email,
    // }));

//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch data from the API' });
//   }
// }

useEffect(() => {
  // Fetch data from the API
  const responseData = async ()=> {
    try {
      const response = await axios.get('https://randomuser.me/api/?page=5&results=5');
      console.log(response.data.results);
      setUsers([...users, ...response.data.results]);
    } catch (error) {
      console.error(error);
    }
  };
  responseData()
},
[]);
  

  return (
    <div>
      <div className='flex w-full bg-orange-100 ' > 
     <section className='bg-orange-100 pl-8 w-2/3'>
    <header className='flex py-8 '>
    <span>
        <Image
              src="/Market.png"
              alt="Market Logo"
            //   className="dark:invert"
              width={130}
              height={24}
              priority
            />
       </span>  
       
      <span className='mt-2 w-full '> 
        <ul className='flex justify-around gap-8 '>
            <a href="#home">Solution</a>
            <a href="#about">About us</a>
            <a href="#services">Contact us</a>
        </ul>
        </span>
       
        </header>
        
        
   
    <div className=''>
    <p className='text-[40px] font-serif'>Food intelligence for all, <br/>market data at your<br/>fingertips</p>
   <p className='text-[15px] mt-5 font-serif'>Make smart decisions with our food data. Tap into our<br/> real-time, daily, and historical food market data<br/>pipeline.</p>
   <button className='bg-black text-white w-60 my-12 p-4 rounded'>Get Started</button>
   
    </div>
    </section> 
    <div className='bg-green-700 w-1/3 rounded-tl-[50px] pl-8 space-x-4 '>
      <button className='bg-black text-white w-35 my-12 p-3 m-2 rounded'>Sign-up</button>
      <button>Login</button>
      <div className=''>
      <Image className='-ml-[90px]'
              src="/fruits.png"
              alt="fruit logo"
              width={310}
              height={120}
              priority
            />
      </div>
      

    </div>
    </div> 
    <section className='ml-8 mt-8'>
     
        <p className='text-[40px] font-serif'>Explore the latest live <br/>trends on food data</p>
        <p className='text-[18px] font-serif'>We constantly track and update in real-<br/>time food market data, enabling informed<br/> decisions.</p>
       <div>
       <FiSearch  className=' absolute ml-[70rem] -mb-[3.5rem]'/>
      <input  type="text" placeholder="Try Lagos or North East" className='ml-[50rem] w-96 mb-8' />
      
      </div>
      </section> 
      <div>
    <table className=' border-collapse w-[85%] ml-[5rem] '>
       <thead> 
            <tr className= 'w-[85%] h-24 rounded bg-orange-300 ' >
            <th>Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
              <tr>
                <td><Image
                src={user.picture.thumbnail}
                alt= 'API Image'
                width={30}
                height={30}
                /></td>
                <td>{user.location.country}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.cell}</td>
                </tr>
                ))}
            </tbody>
    </table>
      </div>
      <div className='w-[50rem] h-15 rounded-tl-[10rem] rounded-br-[10rem] ml-[310px]  text-center bg-black text-white p-6 my-24 '>
      <p>Advertise your produce with us. <span className='text-yellow-200'> Click here</span> </p>
      
      </div>
      <div className='flex'> 
      <div className='bg-red-600 w-1/3'> 
      <Image 
              className=' absolute mt-[10rem] ml-[10rem] w-[25rem]'
              src="/fruits2.png"
              alt="fruit logo"
              width={310}
              height={120}
              priority
            />
      </div>
      <div className='bg-rose-200 font-serif w-2/3 '>
        <p className=' text-[45px] font-serif my-12 ml-[20rem]'>Ready to build a smart <br/> portfolio for food <br/> market data?</p>
        <p className='ml-[20rem]'>Create your account, subscribe and see how market data helps your <br/> business performance with informed decision making.</p>
      <button className='bg-black text-white w-60 my-12 p-4 rounded ml-[20rem]'>Get Started</button>
      </div>
      </div>
      <p className='my-8 ml-[8rem] text-center font-serif text-[17px]'>Subscribe to our monthly newsletter to stay connected to our activities, get insights and <br/> updates on what's happening with everyday food data.</p>
      <div className='  '> 
      <form className='flex left  justify-center items-center'> 
      <input type="text" placeholder='Email address' className='border-orange-400 w-[39%] p-3 border-2 ml-[12rem]  '/>
      <button className='absolute left-[65%] align-center rounded-[3px] h-10 w-[100px]   bg-black text-white border-none  rounded-[3px] font-serif'>Subscribe</button>
      </form>
      </div>
      <section className='mt-[5rem] flex justify-around '>
       <div><Image 
             src="/Market.png"
             alt="Market Logo"
             width={130}
             height={24}
              priority
            /></div> 
    
      <div>
        <p><b>Contact</b></p>
        <p>info@marketdata.com</p>
        <p>operations@marketdata.ng</p>
      </div>
      <div>
      <p><b>Lagos</b></p>
        <p>21, Oremeji Street, <br/> behind toll gate,<br/>Victoria Island, Lagos<br/></p>
      </div>
      <div>
        <b><p>Company</p></b>  
        <p>Solutions <br/> About <br/> Terms of use <br/>Privacy policy<br/>Dispute Resolution</p>
      </div>
      </section>
      
      {/* <div className=' w-[40%] border-[1px] justify-center'><hr className=' w-[40%] justify-center'/></div> */}
      <p className='text-center'>Copyright © 2021 Market Data Limited - RC234523. Built with  Lagos</p>
    
    </div>
  )
}

export default page
