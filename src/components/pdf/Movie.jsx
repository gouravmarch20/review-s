import React, { useEffect, useState } from "react";
import Glider from "react-glider";
import Image from "next/image";
import 'glider-js/glider.min.css';


export default function PdfDocument(props) {
  const FEATURE_STORE_GLIDER = [
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        duration: 0.25,
        autoplay: 2000,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        duration: 0.25,
        autoplay: 2000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        duration: 0.25,
        autoplay: 2000,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 6,
        duration: 0.25,
      },
    },
    {
      breakpoint: 1094,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 7,
        duration: 0.25,
      },
    },
  ];
  const storeList = [
    {
        "_id": "6392df550301d90029aabbe9",
        "place_name": "1Gearup",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16705698137523.png"
        ],
        "rooms_count": 0,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63e4db3951cfbc00294b7bbc",
        "place_name": "ADV TRIBE",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16759457693801.png"
        ],
        "rooms_count": 25,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "642574f31cf1ec0029a430cf",
        "place_name": "Boots & Crampons ",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16802408142006.png"
        ],
        "rooms_count": 8,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "636f0a06dbf9f0002920b314",
        "place_name": "Bykmo",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16682214456097.png"
        ],
        "rooms_count": 0,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63f87ce1586a6100292c005d",
        "place_name": "CARBONADO",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16772292814975.png"
        ],
        "rooms_count": 35,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "641e8c2d03a9dd00295fce40",
        "place_name": "CarryPro ",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16797235649737.jpeg"
        ],
        "rooms_count": 6,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "639022865aec42002966b609",
        "place_name": "Chris Cross",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16721426714000.jpeg"
        ],
        "rooms_count": 18,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "621ef9a359d86a0029a50102",
        "place_name": "Crossroads RSA",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16676288469476.jpeg"
        ],
        "rooms_count": 6,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "61f0e6ec0b5148001f8b2f80",
        "place_name": "DIAL 4242 AMBULANCE",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16420784409191.png"
        ],
        "rooms_count": 3,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "641c1c54b511c10029af0bbd",
        "place_name": "GODS",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16795700516792.jpeg"
        ],
        "rooms_count": 55,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64424f2221b65400294eb712",
        "place_name": "GlidingGear Company ",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16830125633821.jpeg"
        ],
        "rooms_count": 11,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64670ceafd2bc4002ae43051",
        "place_name": "HG Riding Store",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16844751148700.jpeg"
        ],
        "rooms_count": 7,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6595052f07c0d0002976b718",
        "place_name": "Harley Davidson Motorcycle Gear & Clothing",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17042650079651.png"
        ],
        "rooms_count": 5,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64119066aee1cc0029ec0d0f",
        "place_name": "INLINE-4 AUTOMOTIVES",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16788726785857.png"
        ],
        "rooms_count": 130,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "655ed981d8ccf4001e5abd46",
        "place_name": "KOGO TEST STORE",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17007148814262.webp"
        ],
        "rooms_count": 0,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "641c660cb511c10029af1e7a",
        "place_name": "MadBrag Bags",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16795827329511.jpeg"
        ],
        "rooms_count": 34,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "633fb81bae9443002939229a",
        "place_name": "Mappls MapmyIndia",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16760310692490.png"
        ],
        "rooms_count": 11,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "641d4796b511c10029af71d3",
        "place_name": "NG India ",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16797249771482.jpeg"
        ],
        "rooms_count": 3,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63f70942586a6100292b280a",
        "place_name": "Orazo Motorcycling",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16771341455504.jpeg"
        ],
        "rooms_count": 2,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "61f76c860b5148001f8b4aa4",
        "place_name": "Pathpavers",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16436059171837.png"
        ],
        "rooms_count": 2,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63a5aacebc17420029d41122",
        "place_name": "RAW ",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16800876498592.jpeg"
        ],
        "rooms_count": 38,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "643e8e8bbed0760029a08091",
        "place_name": "Rahgear",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16820708942048.png"
        ],
        "rooms_count": 5,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63ca82a9a168a0002906ae56",
        "place_name": "Raida Gears",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16824244987021.jpeg"
        ],
        "rooms_count": 32,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64a5085205e6aa002954e695",
        "place_name": "Ready Assist",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16885371707827.png"
        ],
        "rooms_count": 1,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6433e2fbfebca30024f26e76",
        "place_name": "Reccy",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16813060894119.jpeg"
        ],
        "rooms_count": 6,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63e5f90a44b1160029f465a8",
        "place_name": "Road Religion",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16802426955174.jpeg"
        ],
        "rooms_count": 153,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "65a8c84310e0340029db2b98",
        "place_name": "Rollin Denims",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17055601312601.jpeg"
        ],
        "rooms_count": 2,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63da108e9cef07001ea25836",
        "place_name": "Rynox Riding Gears",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16757582379118.jpeg"
        ],
        "rooms_count": 68,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64c75756f898cd00294025f8",
        "place_name": "STUDDS HELMETS",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16907856217603.webp"
        ],
        "rooms_count": 1,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64d36834cec4b300282d82cb",
        "place_name": "Shell India",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16915763722044.png"
        ],
        "rooms_count": 3,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63d0c03e66782700297dc8f5",
        "place_name": "Sparrowteck Performance",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16778450903196.png"
        ],
        "rooms_count": 1,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "635131e4ef82db002933f9b7",
        "place_name": "Stroll & Swing",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16662655714474.png"
        ],
        "rooms_count": 17,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64218142d8a90f0029a59c5c",
        "place_name": "TOKIKE",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16799173783639.png"
        ],
        "rooms_count": 10,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "644649e121b65400294f68f0",
        "place_name": "TRAWOC",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16823280325944.png"
        ],
        "rooms_count": 12,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "66a4935259b92b001e7db746",
        "place_name": "TVS",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17220616501906.png"
        ],
        "rooms_count": 3,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "662f8971ec347c0029a583db",
        "place_name": "TVS Merchandise",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17143914097419.webp"
        ],
        "rooms_count": 1,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "668290f1f9f900001ed0b4a3",
        "place_name": "TVS Merchandise July 2024",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17198328177407.webp"
        ],
        "rooms_count": 0,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6638b5269c792d0025a92811",
        "place_name": "TVS TEST 123",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/17149924224776.png"
        ],
        "rooms_count": 2,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64c1070f45b01d001f2efc01",
        "place_name": "The Mahua Store",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16903718557177.png"
        ],
        "rooms_count": 1,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "63b5230adafeb0001ec5fb3e",
        "place_name": "Tiivra Riding Store",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16730835966647.jpeg"
        ],
        "rooms_count": 30,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6364cf151393c50029036d5f",
        "place_name": "Tripmachineco",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16778447182827.png"
        ],
        "rooms_count": 151,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6448d535bed0760029a3b494",
        "place_name": "Tripole Gear",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16824947725682.jpeg"
        ],
        "rooms_count": 7,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "644f2668bed0760029a57e8e",
        "place_name": "UPTANTRA",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16829087761339.jpeg"
        ],
        "rooms_count": 7,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6443a134bed0760029a23ee9",
        "place_name": "Venom",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16821537795555.png"
        ],
        "rooms_count": 0,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "644b9f0921b6540029515190",
        "place_name": "Wanderlooms ",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16826775124827.jpeg"
        ],
        "rooms_count": 15,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "6210e14f54f42b00290976d7",
        "place_name": "Wild Wild Motorheads",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16452734262465.jpeg"
        ],
        "rooms_count": 23,
        "__typename": "LayerPlaceLstData"
    },
    {
        "_id": "64a51a0610683b002a7c1ad3",
        "place_name": "testinfg store",
        "image": [
            "https://d15mcvsd48kerh.cloudfront.net/layer/layer_place_image/16885417016642.png"
        ],
        "rooms_count": 0,
        "__typename": "LayerPlaceLstData"
    }
]

  return (
    <>
    <div className="px-4"> 

      <div className="flex  bg-red-200  p-4  ">
 

      <Glider
              hasArrows
              // slidesToShow={2}
              // slidesToScroll={2}
              scrollLock={true}

              // responsive={FEATURE_STORE_GLIDER}
              className="flex"
              responsive={[
                {
                  breakpoint: 775,
                  settings: {
                    slidesToShow: "auto",
                    slidesToScroll: "auto",
                    itemWidth: 150,
                    duration: 0.25,
                  },
                },
              ]}
            >
 

              {storeList.length ? (
                <>
                  {storeList
                    .filter((product) => product?.rooms_count >= 1)
                    .map((product, index) => (
                      <div key={index} className="flex flex-col  ">
                
                          <Image
                            src={product.image[0]}
                            className="object-fit-cover"
                            width={70}
                            height={70}
                            alt="store"
                          />
                        {/* </div> */}
                        <p className="mb-0 lc caption-title mt-1">
                          {product.place_name}
                        </p>
                        <p className="mb-0 mini-title">
                          {product.rooms_count}
                          {product.rooms_count === 1 ? " Product" : " Products"}
                        </p>
                      </div>
                    ))}
                </>
              ) : null}
            </Glider>  
            </div>
            </div>

    </>
  );
}
