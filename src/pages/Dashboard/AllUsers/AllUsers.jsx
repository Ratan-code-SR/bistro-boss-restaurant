import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }

    })
    const handleUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
                heading={'how many??'}
                subHeading={"manage all users"}
            ></SectionTitle>
            <div className="bg-white p-2">
                <div className="flex justify-between items-center">
                    <p className="text-xl uppercase font-bold">total users: {users.length} </p>

                </div>
                <div className="my-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#d1a054] text-white">
                                <tr>
                                    <th></th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index) =>
                                        <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button className="bg-[#d1a054] p-2 rounded-md text-white"><HiOutlineUserGroup /></button></td>
                                            <td>
                                                <button onClick={() => handleUser(user?._id)} className="text-white bg-[#b91c1c] p-2 rounded-md"><RiDeleteBin6Line /></button>

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

export default AllUsers;