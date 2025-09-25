import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-thin mb-3">Service Update</h1>
      <h2 className="text-2xl font-thin mb-5">Choose us...</h2>
      <button
        className="bg-white text-black font-bold px-4 py-2 rounded-xl "
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default ServiceDetails;
