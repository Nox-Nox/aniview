import { Box } from "@mui/material";
import { React, useState, useEffect } from "react";
import * as Realm from "realm-web"
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";
import NewsContainer from "../components/newsContainer/NewsContainer";

function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const url = "https://data.mongodb-api.com/app/data-pchjk/endpoint/today"
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key":"BGQ3es226VIn0dcmuHZke1tetXZbGHUW5QgJ2KsYb6XntNe6H2El4zPbQBjsAt29",
    "Accept":"application/data-pchjk",
    }
  };


const getData = async () => {
const app = new Realm.App({ id: "data-pchjk" });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
  const allData = await user.functions.getToday()
  setLoadedData(allData)
} catch(err) {
  console.error("Failed to log in", err);
}
}

useEffect(() => {
    getData();
},[])

console.log(loadedData)

  return (
    <Box>
      <SeasonsNavigation />
      <NewsContainer data={loadedData} />
    </Box>
  );
}
export default HomePage;
