import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function ProductPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  // Cart
  const { addToCart } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        const data = await response.json();

        setData(data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getData();
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Product not found.</div>;
  }

  const hasDiscount = data.discountedPrice < data.price;
  const discountPercentage = hasDiscount
    ? parseFloat(
        ((data.price - data.discountedPrice) / data.price) * 100
      ).toFixed(1)
    : 0;

  console.log(
    "Has discount: ",
    hasDiscount,
    "percentage: ",
    discountPercentage
  );

  console.log(typeof data.discountedPrice);
  console.log("price: ", typeof data.price);

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
        {hasDiscount ? (
          <div>
            <div className="">
              <span className="line-through decoration-2">{data.price}</span>
              <p>{data.discountedPrice}</p>
            </div>
            <p className="text-red-500">{discountPercentage}% off!</p>
          </div>
        ) : (
          <p>{data.price}</p>
        )}
      </div>
      <button
        onClick={() => addToCart(data)}
        className="bg-orange-400 rounded-lg  font-bold py-2 px-4"
      >
        Add to Cart
      </button>
    </div>
  );
}
