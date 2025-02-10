function getGroupedOAuthTools(capabilityList, allowedLoginPlatforms) {
  // Ensure capabilityList is an array, otherwise return an empty object
 
  // Normalize allowedLoginPlatforms to lowercase for case-insensitive comparison
  const normalizedPlatforms = Array.isArray(allowedLoginPlatforms)
    ? allowedLoginPlatforms.map((p) => p.toLowerCase())
    : [];

  const groupedOAuthTools = capabilityList.reduce((acc, item) => {
    // Ensure the item and necessary properties exist
    if (!item || !item.toolDetail || !item.toolDetail.oauth_tools) return acc;

    const { oauth_tools } = item.toolDetail;

    // Check if oauth_tools is in allowedLoginPlatforms (case-insensitive)
    if (
      normalizedPlatforms.includes(oauth_tools.toLowerCase()) &&
      item.client_id &&
      item.client_secret &&
      item.client_id.length >= 5 &&
      item.client_secret.length >= 5
    ) {
      if (!acc[oauth_tools]) {
        acc[oauth_tools] = [];
      }
      acc[oauth_tools].push(item);
    }
    return acc;
  }, {});

  return Object.keys(groupedOAuthTools).length ? groupedOAuthTools : {};
}

// Sample input
// const capabilityList = [
//   {
//     _id: "67a204d5abbc36c160963b8c",
//     client_id: "U2FsdGVkX1/vBWs8vVzyY7oYl7mlRm94rnPq+6St/fs=",
//     client_secret: "U2FsdGVkX1+chIxfuFqoMfX+ORTfZk2ycoYWCdUSZfA=",
//     toolDetail: { _id: "673ee2ff71c2106d84597bc6", oauth_tools: "Slack" },
//   },
//   {
//     _id: "67a204d5abbc36c160963b8c",
//     client_id: "U2FsdGVkX1/vBWs8vVzyY7oYl7mlRm94rnPq+6St/fs=",
//     client_secret: "U2FsdGVkX1+chIxfuFqoMfX+ORTfZk2ycoYWCdUSZfA=",
//     toolDetail: { _id: "673ee2ff71c2106d84597bc6", oauth_tools: "Gmail" },
//   },
//   {
//     _id: "67a204e6abbc36c160965d69",
//     client_id: "67a204e6abbc36c160965d69", // Invalid (empty)
//     client_secret: "U2FsdGVkX1+r+z8Yb7+NkmyRxZ7kIznk/wVbX+cWCrin8Plx8ymRDLoGRdvPZSIfyKdK+WNBgrdJdLCvHOU7YQ==",
//     toolDetail: { _id: "673ea683392f9043440e878b", oauth_tools: "Gmail" },
//   },
//   {
//     _id: "67a20798abbc36c16096ad3b",
//     client_id: "U2FsdGVkX1+PvwJqeR2DT7Nm5g9k7mMmJSMIU1EMC/o=",
//     client_secret: "123", // Invalid (too short)
//     toolDetail: { _id: "661363efa339a5f10b1a9cce", oauth_tools: "Slack" },
//   },
// ];

const capabilityList = [
  {
    _id: "678ba825d36261ebedb99309",
    client_id: "U2FsdGVkX1/T6amSZwcQMTK77dkdYSVKr5OeRznnVLw=",
    client_secret: "U2FsdGVkX1/pXy79LJuj3Sz9E1buK4q4yQ7F2OHOv78=",
    toolDetail: {
      _id: "65f29a2144deadc7c6673a2d",
      oauth_tools: null,
    },
  },
  {
    _id: "67946f5066ec0718cef2ce32",
    client_id: "U2FsdGVkX1+zoJlahC8YJ2UR8GoJ3MxgHcFVgx3kzEY=",
    client_secret: "U2FsdGVkX1+NQmxIFU7aNoZZsRgDyaJoQo8c5M1awPQ=",
    toolDetail: {
      _id: "66585351c43db924051de771",
      oauth_tools: null,
    },
  },
  {
    _id: "67a204d5abbc36c160963b8c",
    client_id: "U2FsdGVkX18Dmu+7z5pFKIaObMzBghFi3RBVZx6SxGQ=",
    client_secret: "U2FsdGVkX1/3yOUBXACeBZOErsccubK+dWYNMpWxwTU=",
    toolDetail: {
      _id: "673ee2ff71c2106d84597bc6",
      oauth_tools: "Slack",
    },
  },
  {
    _id: "67a204e6abbc36c160965d69",
    client_id:
      "U2FsdGVkX1/Nr2nTmitaObSJxPA/mmvVKbGEcY4RXdE4EEExdocnfrjitAzgy1Zn49UqIVYf1aJsW6b9SYFKHXps5AhF9ZmK1nkXbb2mdgkdkgv8VobG6fMSR6V5N3Kn",
    client_secret:
      "U2FsdGVkX1/ahPUovOzbBVL9z275qXkkHJ8P98kToR6YO4b8uMzZOx8QsgTLBTKhpDg90YKS25Eg/rA5ev7OGA==",
    toolDetail: {
      _id: "673ea683392f9043440e878b",
      oauth_tools: "Gmail",
    },
  },
  {
    _id: "67a20798abbc36c16096ad3b",
    client_id: "U2FsdGVkX1/ECRhBBijt7vqei/fnvM9HHvk2TQnuBpE=",
    client_secret: "U2FsdGVkX19+ymw/DtpsovOJjznHp1pXpG9Pq1ym6Mc=",
    toolDetail: {
      _id: "661363efa339a5f10b1a9cce",
      oauth_tools: null,
    },
  },
];

const allowedLoginPlatforms = ["Gmail", "Slack"];

console.log(getGroupedOAuthTools(capabilityList));
