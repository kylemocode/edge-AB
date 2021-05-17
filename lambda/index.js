"use strict";
exports.handler = (event, context, callback) => {
  var request = event.Records[0].cf.request;
  const headers = request.headers;

  const siteA = "site=a";
  const siteB = "site=b";

  const siteADomain = "demo-site-a.s3-website.us-east-2.amazonaws.com";
  const siteBDomain = "demo-site-b.s3-website.us-east-2.amazonaws.com";

  let domain = "";

  if (headers.cookie) {
    for (let i = 0; i < headers.cookie.length; i++) {
      if (headers.cookie[i].value.indexOf(siteA) >= 0) {
        domain = siteADomain;
        break;
      } else if (headers.cookie[i].value.indexOf(siteB) >= 0) {
        domain = siteBDomain;
        break;
      }
    }
    request.origin = {
      custom: {
        domainName: domain,
        port: 80,
        protocol: "http",
        path: "",
        sslProtocols: ["TLSv1", "TLSv1.1"],
        readTimeout: 5,
        keepaliveTimeout: 5,
        customHeaders: {}
      }
    };

    request.headers["host"] = [{ key: "host", value: domain }];

    callback(null, request);
  } else {
    callback(null, request);
    return;
  }
};