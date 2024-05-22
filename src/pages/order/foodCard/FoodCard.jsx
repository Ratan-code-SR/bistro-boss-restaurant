import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useCart from "../../../Hooks/useCart";
const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()
    const handleAddCard = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            // position: "top-end",
                            icon: "success",
                            title: `Your ${name} has been added`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }

                })
        }
        else {
            navigate("/login", { state: { from: location } })
        }
    }


    return (
        <div>
            <div className="grid grid-cols-3 gap-5 ">
                <div className="card w-96 bg-[#f3f3f3] shadow-xl relative h-[500px]">
                    <figure className="">
                        <img src={image} alt="Shoes" className=" w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <p className="absolute top-5 right-6 bg-black text-white p-2">${price}</p>

                        <button onClick={handleAddCard} className="p-3 rounded-md bg-[#e8e8e8] text-[#bb8506] border-0 border-b-2   font-semibold uppercase text-xl  border-b-[#bb8506]">Add to Cart</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FoodCard;