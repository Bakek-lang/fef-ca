import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);
        const data = await response.json();

        setData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={data.image.url}
        alt={data.title}
        className="max-w-md rounded-lg"
      />
      <div className="mt-4 text-center">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
      <button className="bg-orange-400 rounded-lg  font-bold py-2 px-4">
        Add to Cart
      </button>
    </div>
  );
}
