import React from "react";
import { marked } from "marked";

const backendRes = {
  data: {
    getTBO_itinary_summaryV3: {
      _id: "664414b1f5a5c3002929b596",
      is_content_loaded: 1,
      is_booked: 0,
      itinary_summary:
        "Day 1: Start at New Delhi and journey to Meer Ghat. Then head to The Tree of Life Resort & Spa, Varanasi.\nDay 2: Visit Paternal - House Sri Lal Bahadur Shastri, Dandi Ghat, and Kashi Vishwanath Temple.\nDay 3: Explore Chowk - The Gateway Hotel, Man Singh Observatory, Barbeque Nation, Raj Ghat, Ghonghari Mandir, The Tree of Life Resort & Spa, and Canton Royale Restaurant - Hotel Surya.\nDay 4: Travel to Smoke House Deli, Rose Garden, Banter, Hauz Khas District Park, Leisure Valley Park, Country Inn & Suites by Radisson, Sahibabad, and SAZ - American Brasserie.\nDay 5: Visit SAZ - American Brasserie, Rustom's, Shri Sai Samiti Noida, F Block Park, Yeti - The Himalayan Kitchen, and return to Country Inn & Suites by Radisson, Sahibabad.",
    },
  },
};

const formatItinerarySummary = (summary) => {
  return summary.replace(/(Day \d+):(.*?)(?=\n|$)/g, (match, p1, p2) => {
    return `<p ><strong class="text-red-500">${p1}</strong>:<br/>${p2.trim()}</p>`;
  });
};

const Markdown = () => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: marked.parse(
            formatItinerarySummary(
              backendRes.data.getTBO_itinary_summaryV3.itinary_summary
            )
          ),
        }}
      />
    </div>
  );
};
// const Markdown = () => {
//   const formattedSummary = formatItinerarySummary(
//     backendRes.data.getTBO_itinary_summaryV3.itinary_summary
//   );

//   return (
//     <div>
//       <div
//         dangerouslySetInnerHTML={{
//           __html: formattedSummary,
//         }}
//       />
//     </div>
//   );
// };

export default Markdown;
