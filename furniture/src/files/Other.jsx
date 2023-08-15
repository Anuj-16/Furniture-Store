import React from "react";
import { Link } from "react-router-dom";
import "../Product.css";

function Other() {
  let obj = [
    {
      id: 1,
      title:
        "Tables items",
      img1: "https://rukminim2.flixcart.com/image/416/416/l4n2oi80/computer-table/d/a/f/-original-imagfhzyvapdqgy3.jpeg?q=70",
      path:"/table"
    },
    {
      id: 2,
      title:
        "Sofas items ",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/sofa-sectional/s/y/i/right-facing-238-blue-gray-360-polyester-no-96-141-homeify-88-original-imaghw6xcgfcbmgb.jpeg?q=70",
      path:"/sofas"
    },
    {
      id:3,
      title:
        "Shelves Items",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-rack-shelf/v/m/r/living-room-bedroom-wall-shelf-wall-mount-wall-shelves-for-original-imagqzy7fk66ay3s.jpeg?q=70",
      path:"/shelve"
    },
    {
      id: 4,
      title:
        "Tables Products",
      img1: "https://rukminim2.flixcart.com/image/416/416/k5ihzm80/side-table/g/y/3/particle-board-aspirewenge-side-table-bharat-lifestyle-wenge-original-imafzfcmfk9px6pm.jpeg?q=70",
      path:"/table"
    },
    {
      id: 5,
      title:
        "Chair items",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/office-study-chair/r/f/g/1-natural-fiber-58-4-pebble-mb-black-flk-green-soul-88-9-original-imagnz6ac6nufuut.jpeg?q=70",
      path:"/chair"
    },
    {
      id: 6,
      title:
        "Sofas Products ",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/sofa-sectional/u/l/z/symmetrical-96-5-maroon-201-chenille-no-70-sofa-berlin-3seater-original-imagmfhjqmp7jfzq.jpeg?q=70",
      path:"/sofas"
    },
    {
      id: 7,
      title:
        "Shelves Products ",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/storage-basket/n/y/y/6-rectangle-storage-plastic-basket-pack-of-6-hxoset-original-imag53ew58sqhgxy.jpeg?q=70",
      path:"/shelve"
    },
    {
      id: 8,
      title:
        "Chairs Products ",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/outdoor-chair/i/a/b/48-6-pvc-polyvinyl-chloride-47-5-2-5-7758469-arlavya-89-brown-original-imagrg2uwhrrytsz.jpeg?q=70",
      path:"/chair"
    },
    {
      id: 9,
      title:
        "Tables items",
      img1: "https://rukminim2.flixcart.com/image/416/416/xif0q/side-table/3/5/c/35-56-mdf-43-18-8-int-bdst-121-bedside-table-interos-55-88-original-imagrhcunvspgfhh.jpeg?q=70",
      path:"/table"
    }
  ];
  return( 
  <div className="homebox">
   {obj.map((el)=>(
    <div className="box1">
      <Link style={{textDecoration:"none"}} to={el.path}>
      <div className="imgbox1">
        <img src={el.img1} alt={el.title} />
      </div>
      <h1>{el.title}</h1>
      
    </Link>
    </div>
   ))}
  </div>
)}

export default Other;
