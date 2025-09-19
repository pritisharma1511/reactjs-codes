import { getPost } from "./api/PostApi";
import { useEffect } from "react";

const App = () => {
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);


  return <h1>Hello react curd operation</h1>;
};

export default App;