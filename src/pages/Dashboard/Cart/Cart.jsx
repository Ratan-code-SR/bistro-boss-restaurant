import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="w-10/12 mx-auto ">
            <SectionTitle
                heading={'My Cart'}
                subHeading={'WANNA ADD MORE?'}
            >
            </SectionTitle>
            <div className="bg-white p-2">
                <div className="flex justify-between items-center">
                    <p className="text-xl uppercase font-bold">total orders: {cart.length}</p>
                    <p className="text-xl uppercase font-bold">total price: {totalPrice}</p>
                    <button className="p-2 text-xl font-bold text-white rounded-md bg-[#d1a054]">Pay</button>
                </div>
                <div className="my-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#d1a054] text-white">
                                <tr>
                                    <th></th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cart.map((item, index) =>
                                        <tr key={item._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <img className="w-10 h-10" src={item.image} alt="" />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className="text-white bg-[#b91c1c] p-2 rounded-md"><RiDeleteBin6Line /></button>
                                            </td>
                                        </tr>
                                    )
                                }

                                {/* row 2 */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;