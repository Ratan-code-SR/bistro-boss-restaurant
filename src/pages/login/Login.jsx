import { useState } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImage from '../../assets/others/authentication2.png'
import bgLoginImage from '../../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
const Login = () => {
    const { signInUser, googleLogin } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)
    const axiosPublic = useAxiosPublic()

    const from = location.state?.from?.pathname || "/"
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success("user login successfully!!")
                navigate(from, { replace: true })
                reset()
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })

    }
    const handleValidateCaptcha = (e) => {
        let user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const userInfo = {
                    name: result.users?.displayName,
                    email: result.users?.email
                }
                axiosPublic.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                    toast.success("google login successfully!!!")
                    navigate(from, { replace: true })
                })

            })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgLoginImage})` }}>
            <div className="hero-content flex items-center justify-center border-4 " style={{ boxShadow: "7px 12px 5px 0px rgba(38,26,26,0.75)" }}>
                <div className="text-center lg:text-left lg:w-2/5 w-full">
                    <img src={loginImage} alt="" />
                </div>

                <div className="card shrink-0 lg:w-2/5 w-full">
                    <h1 className='text-center font-bold text-3xl'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" name='email' className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" placeholder="type here" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-2">
                            <button disabled={false} type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='mx-auto -mt-5'>
                        <button onClick={handleGoogleLogin} className="btn btn-primary">Google</button>
                    </div>
                    <span className='text-center '>You have no account? please   <Link to='/register' className='text-red-500'>Register</Link></span>
                </div>
            </div>

        </div>

    );
};

export default Login;