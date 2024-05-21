import { useForm } from "react-hook-form";
import bgSignUpImage from "../../assets/others/authentication.png"
import signUpImage from "../../assets/others/authentication2.png"
import { useContext } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
const Register = () => {
    const { signUpUser, updateUserProfile, setUser, user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo = data.photoURL;
        console.log({ name, email, password, photo });
        signUpUser(email, password)
            .then(result => {
                console.log(result);
                updateUserProfile(name, photo)
                setUser({ ...user, photoURL: photo, displayName: name })
                toast.success("user account create successfully!!")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bgSignUpImage})` }}>
                <div className="hero-content lg:flex-row-reverse flex-col-reverse border-4 " style={{ boxShadow: "7px 12px 5px 0px rgba(38,26,26,0.75)" }}>
                    <div className="text-center lg:text-left lg:w-2/5 w-full">
                        <img src={signUpImage} alt="" />
                    </div>
                    <div className="card shrink-0 lg:w-[60%] w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <small className="text-red-600">Name is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL"   {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <small className="text-red-600">Photo URL is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <small className="text-red-500">This field is required</small>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <small className="text-red-500">This field is required</small>}
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <span className='text-center -mt-5'>You have an already account? please   <Link to='/login' className='text-red-500'>Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

