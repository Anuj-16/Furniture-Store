// import React, { useState } from 'react';
// import './Nav2.css'


//   const SecondNav22 = () => {
//   const [showDropdown1, setShowDropdown1] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const [showDropdown3, setShowDropdown3] = useState(false);
//   const [showDropdown4, setShowDropdown4] = useState(false);
//   const [showDropdown5, setShowDropdown5] = useState(false);

//   const toggleDropdown1 = () => {
//     setShowDropdown1(!showDropdown1);
//   };

//   const toggleDropdown2 = () => {
//     setShowDropdown2(!showDropdown2);
//   };

//   const toggleDropdown3 = () => {
//     setShowDropdown3(!showDropdown3);
//   };
//   const toggleDropdown4 = () => {
//     setShowDropdown4(!showDropdown4);
//   };
//   const toggleDropdown5 = () => {
//     setShowDropdown5(!showDropdown5);
//   };

//   return (
//     <nav className="navbar">
      
//       <ul className="nav-links">
        
//         <li onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
//           <a href="/">Dining Chairs</a>
//           {showDropdown1 && (
//             <div className="dropdown-menu1">
//               <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Best Seller</a>
             
//               <a href="/"></a>
//               <a href="/"></a>
           
//               <a href="/">Arm Chair</a>
//               <a href="/">Windsor Chair</a>
//               <a href="/"> Wishbone Chair</a>
//               <a href="/">Barcelona Chair</a>
//               <a href="/">Tullip Chair</a>
//               <a href="/"> Adirondack chair</a>
//               <a href="/">Plastic Dining Chair</a>
//               <a href="/">Arm Chair</a>
//               <a href="/">Windsor Chair</a>
//               <a href="/"> Wishbone Chair</a>
//               <a href="/">Barcelona Chair</a>
//               <a href="/">Tullip Chair</a>
//             </div>
//           )}
//         </li>
//         <li onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
//           <a href="/">Living sofas</a>
//           {showDropdown2 && (
//             <div className="dropdown-menu1">
//                 <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Best Floring</a>
             
//              <a href="/"></a>
//              <a href="/"></a>
          
//               <a href="/">Hall Sofas</a>
//               <a href="/">Fabric Sofas</a>
//               <a href="/">Wooden Sofas</a>
//               <a href="/">Leather Sofas</a>
//               <a href="/">Worner Sofas</a>
//               <a href="/">Corner Sofas</a>
//               <a href="/">Bed Sofas</a>
//               <a href="/">Lounger Sofas</a>
//               <a href="/">Corner Sofas</a>
//             </div>
//           )}
//         </li>
//         <li onMouseEnter={toggleDropdown3} onMouseLeave={toggleDropdown3}>
//           <a href="/">Bedside Tables</a>
//           {showDropdown3 && (
//             <div className="dropdown-menu1">
//               <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Well Furnished</a>
             
//              <a href="/"></a>
//              <a href="/"></a>
            
//               <a href="/">Drawer Table</a>
//               <a href="/">Round Table</a>
//               <a href="/">Light Table</a>
//               <a href="/">Glass Table</a>
//               <a href="/">Wooden Table</a>
//               <a href="/">Light Table</a>
//               <a href="/">Marble Table</a>
//               <a href="/">Acquast Table</a>
//               <a href="/">Pillo Table</a>
//             </div>
//           )}
//         </li>
//         <li onMouseEnter={toggleDropdown4} onMouseLeave={toggleDropdown4}> Cocktails Chairs
//        {showDropdown4 && (
//             <div className="dropdown-menu1">
//               <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Classic Design</a>
             
//              <a href="/"></a>
//              <a href="/"></a>
            
//               <a href="/">Accent</a>
//               <a href="/">Sactional Chair</a>
//               <a href="/">Windsor</a>
//               <a href="/">Rocking Chair</a>
//               <a href="/">Wishbone Chair</a>
//               <a href="/">Panton Chair</a>
//               <a href="/">Tillip Chair</a>
//               <a href="/">Womb Chair</a>
//               <a href="/">Club Chair</a>
//             </div>
//           )}
//           </li>
//        <li onMouseEnter={toggleDropdown5} onMouseLeave={toggleDropdown5}> Office Chairs
//        {showDropdown5 && (
//             <div className="dropdown-menu1">
//                   <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Luxu Design</a>
             
//              <a href="/"></a>
//              <a href="/"></a>
          
//               <a href="/">Chaise Chair</a>
//               <a href="/">Folding Chair</a>
//               <a href="/">Accent</a>
//               <a href="/">Modern Chair</a>
//               <a href="/">Sactional Chair</a>
//               <a href="/">Windsor</a>
//               <a href="/">Rocking Chair</a>
//               <a href="/">Wishbone Chair</a>
//               <a href="/">Panton Chair</a>
//               <a href="/">Tillip Chair</a>
//               <a href="/">Womb Chair</a>
//               <a href="/">Club Chair</a>
//               <a href="/">Loverseat Chair</a>
//               <a href="/">Kartell Chair</a>
//               <a href="/">Eames Chair</a>
//             </div>
//           )}
//        </li>

//        <li>Coffee Tables</li>
// <li>Office Desks</li>
// <li>Wall Lamps</li>
// <li>Table Lamps</li>
// <li>Living Sofas</li>
// <li>Chaises</li>
// <li>Bookcases</li>
// <li>Organises</li>
// <li>Vases</li>
// <li>Cases</li>
// <li>Clocks</li>

//       </ul>
//     </nav>
//   );
// };

// export default SecondNav22;
