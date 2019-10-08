new autoComplete({
    data: {                              // Data src [Array, Function, Async] | (REQUIRED)
      src: async () => {
        // API key token
        // const token = "this_is_the_API_token_number";
        // User search query
        const query = document.querySelector("#autoComplete").value;
        // Fetch External Data Source
        const source = await fetch(`/allOfIt`);
        console.log(source)
        // Format data into JSON
        const data = await source.json();
        // Return Fetched data
        return data.hits;
      },
      key: ["artist"],
      cache: false
    }
});