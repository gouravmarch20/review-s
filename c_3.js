const serviceF = [{
  name: "Gmail",
  icon: {
    src: "/_next/static/media/gmail.03cb50aa.png",
    height: 36,
    width: 48,
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgmail.03cb50aa.png&w=8&q=70",
    blurWidth: 8,
    blurHeight: 6,
  },
  description: "Conduct video meetings and webinars with Zoom.",
  isConnected: true,
  isHide: false,
  entityType: "Gmail",
}];

const agentD = [
  {
    is_connected: true,
    tool_name: "Gmail",
    _id: "67a70b66aa4d33a61ebb1902",
  },
];

const getAuthPending = (agentD, serviceF) => {
  const val = serviceF.filter((s) => {
   const agent =  agentD.find((item) => item.tool_name === s.entityType);
    if(agent?.is_connected == false){
      return true
    }
    return false
  });
  console.log("li", val);
};

console.log(authPending(agentD, serviceF));
