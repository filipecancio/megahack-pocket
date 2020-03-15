import React, { useState, useEffect } from "react";
import axios from "axios";
import cors from "cors";

function App() {
  const [data, setData] = useState();
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  useEffect(() => {
    (async () => {
      axios
        .get(
          `https://us-central1-megapoc.cloudfunctions.net/api/inicio`,
          config
        )
        .then(res => {
          const response = res.data;
          console.log(response);
          setData(response);
        });
    })();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
