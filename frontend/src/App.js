import React from "react";
import Header from "./components/Header";
import UserHeader from "./components/UserHeader";

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
    <>
      <Header />
      <UserHeader />
      <BodyContent />
    </>
  );
}

export default App;
