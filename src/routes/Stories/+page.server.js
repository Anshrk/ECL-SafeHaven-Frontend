/** @type {import('./$types').Actions} */
export const actions = {
	login: async (event) => {
        console.log("hohohoaishdf;lasjkd");
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "hospitals_svc.12": {
    "cityval": "evergreen",
    "fipsval": null,
    "typeval": "GENERAL ACUTE CARE"
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
};

let resp = fetch("http://training.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/json/query/roxie/hospitals_svc.12?ver_=0", requestOptions)
console.log(resp);
return new Response(String(resp));

}
};