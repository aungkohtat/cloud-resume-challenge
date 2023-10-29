// GET API REQUEST
async function get_visitors() {
  // call post api request function
  //await post_visitor();
  try {
    let response = await fetch(
      ' https://165oxeo0oa.execute-api.us-east-1.amazonaws.com/default/VisitorCounter', // API Gateway URL
      {
        method: "GET",
      }
    );
    let data = await response.json();
    document.getElementById("visitors").innerHTML = data["count"];
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

get_visitors();
