import { NextPage } from "next";
import { useEffect, useState } from "react";
 
const IndexPage: NextPage = () => {
  const [imageURL, setImageURL] = useState<Image | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImage().then((image) => {  
      setImageURL(image);
      setLoading(false);
    });
  }, []);    


  return <div>猫画像予定地</div>;
};

export default IndexPage;

type Image = { url: string };

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  console.log(data[0]);
  return data[0];
}

fetchImage().then((image) => { console.log(image.url) });
