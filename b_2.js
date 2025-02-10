const deploymentData = [
  {
    _id: "676542b3c87afe64a98a9aaa",
    deployment_name: "Gmail Agent",
    questio_suggestions: ["Can you please check my email list"],
    is_user_login_required: true,
    allowed_login_platforms: ["Gmail"],
    capability_list: [
      {
        _id: "67654712c87afe64a98aaeca",
        client_id: "U2FsdGVkX1+ffaq6cP9hU+vtUn4Tb5CGbrImJNWjHnY=",
        client_secret: "U2FsdGVkX1/ALrakNRpWVqLuTkpNDfrpK8QRDmCAeeQ=",
        toolDetail: {
          _id: "673ea683392f9043440e878b",
          oauth_tools: "Gmail",
        },
      },
    ],
  },
  {
    _id: "67764cd10b78d1f8ba9e81ae",
    deployment_name: "Weather Kogo",
    questio_suggestions: ["weather in Delhi"],
    is_user_login_required: false,
    allowed_login_platforms: [],
    capability_list: [
      {
        _id: "67764cd10b78d1f8ba9e8177",
        client_id: "U2FsdGVkX1/S0NepflwSFOrQq1bqYzrRgpCdrbw7cd8=",
        client_secret: "U2FsdGVkX18HV3rE1MZz9B+KqMayzxRoy3Xcs31XWso=",
        toolDetail: {
          _id: "660ceef800ade56d3399412e",
          oauth_tools: null,
        },
      },
    ],
  },
];
const allowPlatForm = ["Gmail", "Slack"];

const getFistValidPlatform = (deploymentData, allowPlatForm) => {
  const result = {
    Gmail: [],
    Slack: [],
  };
  for (let i = 0; i < deploymentData.length; i++) {
    const capability_list = deploymentData?.capability_list;
    if (
      allowPlatForm.includes(
        capability_list?.map((c) => c?.toolDetail?.oauth_tools)
      )
    ) {
      capability_list?.forEach((c) => {
        if (allowPlatForm.includes(c?.toolDetail?.oauth_tools)) {
          result.c?.toolDetail?.oauth_tools.push(c);
        }
      });
    }
  }
  return null;
};

const v = getFistValidPlatform(deploymentData, allowPlatForm);
console.log(v);
