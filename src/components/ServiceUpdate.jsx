import { useNavigate } from "react-router-dom";

const ServiceUpdate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-thin mb-3">Service Update</h1>

      <h2 className="text-2xl font-thin mb-5">Update karwalo service....</h2>

      <button
        className="bg-white text-black font-bold px-4 py-2 rounded-xl mr-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <button className="bg-white text-black font-bold px-4 py-2 rounded-xl mr-5" onClick={() => navigate("/about")}>
        Go to About
      </button>
    </div>
  );
};

export default ServiceUpdate;
