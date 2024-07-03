"use client"
import React from 'react'
import HoverWritter from '@/components/hover/HoverWritter'
const Test = () => {
	const a = {
		"is_msg_not_printed": 1,
		"waiting": false,
		// "message": "Well, {{{GOURAV}}}, if you're an adventurous foodie, Delhi is your culinary paradise. Let's start with the local street food. How about trying the Chole Bhature at {{{Sita Ram Diwan Chand}}}? Or, would you {{{Kuremal Mohan Lal Kulfi Wale}}} the sumptuous parathas from {{{Gali Paranthe Wali}}}? \n\nP.S. Don't miss out on the butter chicken at {{{Kuremal Mohan Lal Kulfi Wale}}} if you're a non-vegetarian. And if you're in for some Mughlai cuisine, head over to {{{Karim's}}}. Go, explore and let your taste buds dance! \n\nBut remember, don't count your calories when you're in Delhi. The city's {{{GOURAV}}} won't {{{Kuremal Mohan Lal Kulfi Wale}}} you! 😄 Well, {{{GOURAV}}}, if you're an adventurous foodie, Delhi is your culinary paradise. Let's start with the local street food. How about trying the Chole Bhature at {{{Sita Ram Diwan Chand}}}? Or, would you {{{Kuremal Mohan Lal Kulfi Wale}}} the sumptuous parathas from {{{Gali Paranthe Wali}}}? \n\nP.S. Don't miss out on the butter chicken at {{{Kuremal Mohan Lal Kulfi Wale}}} if you're a non-vegetarian. And if you're in for some Mughlai cuisine, head over to {{{Karim's}}}. Go, explore and {{{let}}} your taste buds dance! \n\nBut remember, don't count your calories when you're in Delhi. The city's {{{GOURAV}}} won't {{{Kuremal Mohan Lal Kulfi Wale}}} you! 😄Well, {{{GOURAV}}}, if you're an adventurous foodie, Delhi is your culinary paradise. Let's start with the local street food. How about trying the Chole Bhature at {{{Sita Ram Diwan Chand}}}? Or, would you {{{Kuremal Mohan Lal Kulfi Wale}}} the sumptuous parathas from {{{Gali Paranthe Wali}}}? \n\nP.S. Don't miss out on the butter chicken at {{{Kuremal Mohan Lal Kulfi Wale}}} if you're a non-vegetarian. And if you're in for some Mughlai cuisine, head over to {{{Karim's}}}. Go, explore and let your taste buds dance! \n\nBut remember, don't count your calories when you're in Delhi. The city's {{{GOURAV}}} won't {{{Kuremal Mohan Lal Kulfi Wale}}} you! 😄",
		"message": "Well, {{{GOURAV}}}, if you're an adventurous foodie, Delhi is your culinary paradise. Let's start with the local street food. How about trying the Chole Bhature at {{{Sita Ram Diwan Chand}}}? Or, would you {{{Kuremal Mohan Lal Kulfi Wale}}} the sumptuous parathas from {{{Gali Paranthe Wali}}}? \n\nP.S. Don't miss out on the butter chicken at {{{Kuremal Mohan Lal Kulfi Wale}}}😄",
		"image": null,
		"user": {
			"_id": "63e3668228635f00296dd9d1",
			"first_name": "",
			"last_name": "",
			"profile_image": ""
		},
		"_id": 1719986845,
		"card_data": null,
		"sent_at": 1719986845,
		"category": "Food",
		"placesData": [
			{
				"_id": "6683961caf8428b8f75b1f7e",
				"name": "Sita Ram Diwan Chand",
				"rating": 4.2,
				"address": "2243, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055, India",
				"latitude": 28.6423777,
				"longitude": 77.21035499999999,
				"phone_number": "099997 63765",
				"website": "http://www.sitaramdiwanchand.co.in/",
				"city": "Delhi",
				"placeType": [
					"restaurant",
					"point_of_interest",
					"food",
					"establishment"
				],
				"created_at": "2024-07-02T05:54:36.757Z",
				"updated_at": "2024-07-02T05:54:36.757Z",
				"__v": 0
			},
			{
				"_id": "66839a58af8428b8f75b2276",
				"name": "Gali Paranthe Wali",
				"rating": 3.7,

				"address": "Paranthe Wali Gali, Chandni Chowk, Delhi, 110006, India",
				"latitude": 28.6560677,
				"longitude": 77.23055839999999,
				"phone_number": "No phone number available",
				"website": "No website available",
				"city": "Delhi",
				"placeType": [
					"route"
				],
				"created_at": "2024-07-02T06:12:40.990Z",
				"updated_at": "2024-07-02T06:12:40.990Z",
				"__v": 0
			},
			{
				"_id": "66839621af8428b8f75b1f9a",
				"name": "Kuremal Mohan Lal Kulfi Wale",
				"rating": 4.4,
				"address": "Shop No. 526 Kucha Pati Ram, Sitaram Bazar Rd, Bazar Sita Ram, Chawri Bazar, Chandni Chowk, New Delhi, Delhi, 110006, India",
				"latitude": 28.6476704,
				"longitude": 77.2270151,
				"phone_number": "098105 40106",
				"website": "http://kuremalskulfi.com/",
				"city": "Delhi",
				"placeType": [
					"food",
					"point_of_interest",
					"store",
					"establishment"
				],
				"created_at": "2024-07-02T05:54:41.547Z",
				"updated_at": "2024-07-02T05:54:41.547Z",
				"__v": 0
			},
			{
				"_id": "6683961caf8428b8f75b1f7b",
				"name": "Karim's",
				"rating": 3.9,
				"address": "16, Gali Kababian, Jama Masjid, Old Delhi, Delhi, 110006, India",
				"latitude": 28.6494961,
				"longitude": 77.2337642,
				"phone_number": "011 2326 9880",
				"website": "https://www.instagram.com/_karims_?igsh=dDZ6M3N3bjVmdmQ0",
				"city": "Delhi",
				"placeType": [
					"restaurant",
					"point_of_interest",
					"food",
					"establishment"
				],
				"created_at": "2024-07-02T05:54:36.546Z",
				"updated_at": "2024-07-02T05:54:36.546Z",
				"__v": 0
			},
			{
				"_id": "6683961caf8428b8f75b1f7b",
				"name": "GOURAV",
				"rating": 3.9,
				"address": "16, Gali Kababian, Jama Masjid, Old Delhi, Delhi, 110006, India",
				"latitude": 28.6494961,
				"longitude": 77.2337642,
				"phone_number": "011 2326 9880",
				"website": "https://www.instagram.com/_karims_?igsh=dDZ6M3N3bjVmdmQ0",
				"city": "Delhi",
				"placeType": [
					"restaurant",
					"point_of_interest",
					"food",
					"establishment"
				],
				"created_at": "2024-07-02T05:54:36.546Z",
				"updated_at": "2024-07-02T05:54:36.546Z",
				"__v": 0
			},
			{
				"_id": "6683961caf8428b8f75b1f7b",
				"name": "let",
				"rating": 3.9,
				"address": "16, Gali Kababian, Jama Masjid, Old Delhi, Delhi, 110006, India",
				"latitude": 28.6494961,
				"longitude": 77.2337642,
				"phone_number": "011 2326 9880",
				"website": "https://www.instagram.com/_karims_?igsh=dDZ6M3N3bjVmdmQ0",
				"city": "Delhi",
				"placeType": [
					"restaurant",
					"point_of_interest",
					"food",
					"establishment"
				],
				"created_at": "2024-07-02T05:54:36.546Z",
				"updated_at": "2024-07-02T05:54:36.546Z",
				"__v": 0
			}
		]
	}
	return (
		<div class="grid grid-cols-2" >
			<div class="bg-slate-700 h-[50vh] m-3"  	id="parent-div">
				<HoverWritter
					chatItem={a}

				/>
			</div>

			<div class="bg-slate-700 h-[20vh] m-3"  	id="parent-div-1">
				<HoverWritter
					chatItem={a}

				/>
			</div>

		</div>
	)
}

export default Test