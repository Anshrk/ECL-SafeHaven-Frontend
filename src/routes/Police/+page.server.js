// export const actions = {
//     default: async ({ request }) => {
//       console.log("HIHIHI");
//       /**
//      * @param {string | URL | Request} url
//      * @param {string} data
//      */
//       async function poster(url, data) {
//         const response = await fetch(url, {
//           method: "POST", // *GET, POST, PUT, DELETE, etc.
//           mode: "cors", // no-cors, *cors, same-origin
//           cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//           credentials: "same-origin", // include, *same-origin, omit
//           headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           redirect: "follow", // manual, *follow, error
//           referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//           body: JSON.stringify(data), // body data type must match "Content-Type" header
//         }); 
//         return response; // parses JSON response into native JavaScript objects

//       }
//       let url = "http://training.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/json/query/roxie/hospitals_svc.12";
//       let body = JSON.stringify({
//           "hospitals_svc.12": {
//             "cityval": "evergreen",
//             "fipsval": null,
//             "typeval": "GENERAL ACUTE CARE"
//           }
//         });
//         const result = await poster(url, body);
//         console.log('hihihihihi');
//         console.log(result.json().);
//       return { success: result };
//     },
//   };
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const city = formData.get('city')
    const type = formData.get('type');
    const fips = formData.get('fips');;

    async function poster(url, data) {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response; // Returning the Response object directly
    }

    let url = "http://training.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/json/query/roxie/police_svc.1?ver_=0";
    let body = {
      "police_svc.1": {
        "cityval": city,
        "fipsval": fips,
        "typeval": type
      }
    };

    const result = await poster(url, body);

    // Log the response JSON
    const jsonResponse = await result.json();

    return jsonResponse["police_svc.1Response"].Results;
  },
};