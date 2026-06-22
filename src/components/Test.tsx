import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// 1. Define the type clearly
type formInput = {
    ism: string;
    familiya: string;
    email: string;
    check: boolean; // Changed to boolean for standard checkbox behavior
};

const Test = () => {
    // 2. Initialize register and handleSubmit
    const { register, handleSubmit } = useForm<formInput>();

    // 3. Define the submit handler
    const onSubmit: SubmitHandler<formInput> = (data) => {
        console.log(data); // This will contain your validated form data
    };

    return (
        // 4. Use handleSubmit to wrap your local handler
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Ismingiz Nima:</label>
            {/* 5. Register using the exact keys from your type */}
            <input {...register("ism")} className='border' type="text" />

            <label>Familyangiz Nima:</label>
            <input {...register("familiya")} className='border' type="text" />

            <label>Emailingiz Nima:</label>
            <input {...register("email")} className='border' type="email" />

            <label>Rozimisiz:</label>
            <input {...register("check")} type="checkbox" />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Test;