import React, { useEffect, useState } from 'react';
import TopStudent from './TopStudent';

const FamousStudent = () => {
   const [topStudents, setTopStudents] = useState([]);
   useEffect(() => {
      fetch(`https://summer-camp-school-server-inky.vercel.app/top-student`)
         .then(res => res.json())
         .then(data => {
            setTopStudents(data);
           
         })
   }, []);

   return (
      <>
         <div className="mt-3 mb-2">
            <h2 className="text-3xl text-center font-bold">We Are Proud for Them</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3 p-4 items-stretch'>
               {
                  topStudents.map(topStudent => <TopStudent key={topStudent._id} topStudent={topStudent}></TopStudent>)
               }
            </div>
         </div>
      </>
   )

};

export default FamousStudent;