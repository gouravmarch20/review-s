const locations =
  [
    {
        "_id": "6675801a7882806404bad1d6",
        "name": "Qutub Minar",
        "rating": null,
        "reviews": "[]",

        "address": "Seth Sarai, Mehrauli, New Delhi, Delhi 110030, India",
        "latitude": 28.5244946,
        "longitude": 77.18551769999999,
        "phone_number": "No phone number available",
        "website": "No website available",
        "city": "Delhi",
        "created_at": "2024-06-21T13:28:58.044Z",
        "updated_at": "2024-06-21T13:28:58.044Z",
        "__v": 0
    },
    {
        "_id": "6675801a7882806404bad1d9",
        "name": "Red Fort",
        "rating": 4.5,

        "address": "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006, India",
        "latitude": 28.6561592,
        "longitude": 77.2410203,
        "phone_number": "011 2327 7705",
        "website": "https://www.delhitourism.gov.in/delhitourism/hindi/tourist_place/red_fort.jsp",
        "city": "Delhi",
        "created_at": "2024-06-21T13:28:58.801Z",
        "updated_at": "2024-06-21T13:28:58.801Z",
        "__v": 0
    },
    {
        "_id": "66794b4c0029f64fd1273152",
        "name": "Humayun’s Tomb",
        "rating": 4.5,

        "address": "Hazrat Nizamuddin Aulia Dargah, Mathura Rd, Nizamuddin, Nizamuddin East, New Delhi, Delhi 110013, India",
        "latitude": 28.5932848,
        "longitude": 77.2507492,
        "phone_number": "011 2435 5275",
        "website": "https://www.delhitourism.gov.in/delhitourism/tourist_place/humayun_tomb.jsp",
        "city": "Delhi",
        "created_at": "2024-06-24T10:32:44.998Z",
        "updated_at": "2024-06-24T10:32:44.998Z",
        "__v": 0
    },
    {
        "_id": "6675801c7882806404bad1df",
        "name": "Chandni Chowk",
        "rating": null,
        "reviews": "[]",

        "address": "Chandni Chowk, Delhi, India",
        "latitude": 28.6505331,
        "longitude": 77.23033699999999,
        "phone_number": "No phone number available",
        "website": "No website available",
        "city": "Delhi",
        "created_at": "2024-06-21T13:29:00.549Z",
        "updated_at": "2024-06-21T13:29:00.549Z",
        "__v": 0
    }
]
const test = ()=>{
	const res = locations.find(loc => loc.name === locationName)
	return res
}
console.log(test() )
