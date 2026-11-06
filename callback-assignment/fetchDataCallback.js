const fetchDataWithCallback = (callback) => {
  let error = false;
  setTimeout(function () {
    try {
      callback("Data Fetched");
    } catch (err) {
      error = true;
      console.error("Error: Fetch Failed");
    }
  }, 2000);
};

fetchDataWithCallback((data) => {
  console.log(data);
});
