'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";


const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const router = useRouter();

    const handleRegisterFunc = async (data) => {

        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/login",
        });

        // console.log(res, error);
        if (error) {
            toast.error(`${error.message}`);
        }
        else {
            toast.success('SignUp successfull');
            router.push('/login');
        }
    }

    // console.log(watch('email'));
    // console.log(errors);

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="container mx-auto min-h-[80vh] bg-gray-200 flex items-center justify-center">
            <div className="rounded-xl p-15 bg-white">
                <h2 className="font-bold text-3xl text-center mb-4">Register Your Account</h2>

                <div className="divider"></div>

                <form className="space-y-4 " onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input w-full" placeholder="Type Your Name" {...register("name", { required: "Name Field is required" })} />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input w-full" placeholder="Type Your Photo URL" {...register("photo", { required: "Photo URL Field is required" })} />
                        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input w-full" placeholder="Type Your Email" {...register("email", { required: "Email Field is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="Type here Password" {...register("password", { required: "Password Field is required", minLength: { value: 4, message: 'Password must be at least 4 characters' } })} />
                        <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}


                    </fieldset>
                    <button className="btn btn-neutral w-full">Register</button>
                </form>
                <div className="divider">Or</div>
                <button className="btn w-full " onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Google</button>
                <p className="mt-5">Already have an account?<Link href={'/login'} className="text-blue-500">Register</Link> </p>

            </div>
        </div>
    );
};

export default RegisterPage;