import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Testi1 from "../images/pictesti1.png"
import Testi2 from "../images/pictesti2.png"


function CardTestimoni() {
  const slides = [
  
    {
      url: 'https://cdn.discordapp.com/attachments/410714713475776514/1072149094849597511/image.png',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/410714713475776514/1072155485979033649/image.png',
    },

    {
      url: 'https://cdn.discordapp.com/attachments/410714713475776514/1072149094849597511/image.png',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/410714713475776514/1072155485979033649/image.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[720px] h-[420px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTestimoni;










// const CardTestimoni = () => {

//     return(
//     <div>
      
      
     
//         <div id="controls-carousel" data-carousel="static" className="relative flex flex-wrap mt-8">
//     <div  className="w-full md:w-1/3 p-4  ease-in-out data-carousel-item">
//       <div className="bg-blue-100 rounded-lg p-4">
//         <img className="w-16 h-16 rounded-full mx-auto mb-4" src={Testi1} alt="Avatar"></img>
//         <div className="text-center">
//           <h2 className="text-lg font-medium">John Doe</h2>
//           <div className="text-gray-600">Customer</div>
//           <div className="flex items-center justify-center mt-4">
//             <svg
//             aria-hidden="true"
//             focusable="false"
//             data-prefix="fas"
//             data-icon="star"
//             className="w-4 text-yellow-500"
//             role="img"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 576 512"
//           >
//             <path
//               fill="currentColor"
//               d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//             ></path>
//           </svg>
//           <svg
//           aria-hidden="true"
//           focusable="false"
//           data-prefix="fas"
//           data-icon="star"
//           className="w-4 text-yellow-500"
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 576 512"
//         >
//           <path
//             fill="currentColor"
//             d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//           ></path>
//         </svg>
//         <svg
//         aria-hidden="true"
//         focusable="false"
//         data-prefix="fas"
//         data-icon="star"
//         className="w-4 text-yellow-500"
//         role="img"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 576 512"
//       >
//         <path
//           fill="currentColor"
//           d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//         ></path>
//       </svg>
//       <svg
//       aria-hidden="true"
//       focusable="false"
//       data-prefix="fas"
//       data-icon="star"
//       className="w-4 text-yellow-500"
//       role="img"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 576 512"
//     >
//       <path
//         fill="currentColor"
//         d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//       ></path>
//     </svg>
//     <svg
//     aria-hidden="true"
//     focusable="false"
//     data-prefix="fas"
//     data-icon="star"
//     className="w-4 text-yellow-500"
//     role="img"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 576 512">
//     <path
//       fill="currentColor"
//       d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
//   </svg>
//           </div>
//         </div>
//         <div className="mt-4">
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id malesuada faucibus, 
//             nisl nisl pretium nunc, at commodo risus ligula id purus. Sed euismod, lorem vitae auctor euismod, 
//             enim ipsum auctor nisi, id malesuada ipsum augue id elit.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className=" w-full md:w-1/3 p-4  data-carousel-item">
//       <div className="bg-blue-100 rounded-lg p-4">
//         <img className="w-16 h-16 rounded-full mx-auto mb-4" src={Testi2} alt="Avatar"></img>
//         <div className="text-center">
//           <h2 className="text-lg font-medium">Jane Smith</h2>
//           <div className="text-gray-600">Customer</div>
//           <div className="flex items-center justify-center mt-4">
//             <i className="fas fa-star text-yellow-500"></i>
//             <i className="fas fa-star text-yellow-500"></i>
//             <i className="fas fa-star text-yellow-500"></i>
//             <i className="fas fa-star text-yellow-500"></i>
//             <i className="fas fa-star text-yellow-500"></i>
//           </div>
//         </div>
//         <div className="mt-4">
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id malesuada faucibus, 
//             nisl nisl pretium nunc, at commodo risus ligula id purus. Sed euismod, lorem vitae auctor euismod, 
//             enim ipsum auctor nisi, id malesuada ipsum augue id elit
//           </p>
//         </div>
//     </div>
//   </div>
//   <div className="w-full md:w-1/3 p-4  data-carousel-item">
//     <div className="bg-blue-100 rounded-lg p-4">
//       <img className="w-16 h-16 rounded-full mx-auto mb-4" src={Testi1} alt="Avatar"></img>
//       <div className="text-center">
//         <h2 className="text-lg font-medium">Sukonto James</h2>
//         <div className="text-gray-600">Customer</div>
//         <div className="flex items-center justify-center mt-4">
//           <i className="fas fa-star text-yellow-500"></i>
//           <i className="fas fa-star text-yellow-500"></i>
//           <i className="fas fa-star text-yellow-500"></i>
//           <i className="fas fa-star text-yellow-500"></i>
//           <i className="fas fa-star text-yellow-500"></i>
//         </div>
//       </div>
//       <div className="mt-4">
//         <p className="text-gray-600">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id malesuada faucibus, 
//           nisl nisl pretium nunc, at commodo risus ligula id purus. Sed euismod, lorem vitae auctor euismod, 
//           enim ipsum auctor nisi, id malesuada ipsum augue id elit
//         </p>
//       </div>
//   </div>
// </div>

//         <div className="mx-auto justify-center mt-5">
//           <ul className="flex items-center space-x-3">
//               <li>
//                   <button
//                       className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:text-white dark:hover:text-gray-100 dark:hover:bg-teal-400 dark:hover:border-teal-400 hover:border-teal-400 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-teal-400 ">
//                       <span className="sr-only">Previous</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                           className="w-5 h-5 bi bi-arrow-left" viewBox="0 0 16 16">
//                           <path fill-rule="evenodd"
//                               d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
//                       </svg>
//                   </button>
//               </li>
//               <li>
//                 <button 
//                     className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:text-white dark:hover:text-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-teal-400 dark:hover:border-teal-400 hover:border-teal-400 dark:text-gray-300 hover:bg-teal-400">
//                     <span className="sr-only">Next</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                         className="w-5 h-5 bi bi-arrow-right" viewBox="0 0 16 16">
//                         <path fill-rule="evenodd"
//                             d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
//                     </svg>
//                 </button>
//             </li>
//         </ul>
//     </div>
//         </div>
//     </div>
//     )
// }

// export default CardTestimoni;