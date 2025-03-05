import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

const DetailPage = () => {
  const { id } = useParams();
  const { currentProduct } = useProductStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl rounded-xl p-6">
        <figure>
          <img
            src={currentProduct?.image}
            alt={`Product ${id}`}
            className="rounded-xl w-full object-cover max-h-60"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-primary">
            Product {id}
          </h2>
          <p className="text-gray-600">
            This is a detailed description of product {id}. It has amazing
            features and benefits that you will love.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-outline btn-secondary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
