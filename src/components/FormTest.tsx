import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Input = {
    userName: string;
    userNumber: string; // Changed to string as input values are strings by default
};

const FormTest = () => {
    // Call useForm once and destructure everything you need
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Input>();

    // This now works because it's part of the same form instance
    const emailValue = watch("userName");

    const onSubmit: SubmitHandler<Input> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email Kiriting:</label>
                <input
                    className='border'
                    {...register("userName", { required: "Brat ism Majburiy" })}
                    type="email"
                />
                {errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}

                <p>Kiritilgan Email : {emailValue}</p>

                <label>Password Please:</label>
                <input
                    className='border'
                    // Fixed: parentheses now wrap the options object
                    {...register("userNumber", { minLength: 6, maxLength: 12 })}
                    type="password"
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormTest;