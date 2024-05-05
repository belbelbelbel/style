import React from 'react'
import { useForm } from 'react-hook-form';

export const UseForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        console.log({ ...register("email") })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>email</label>
                    <input type='text' name='email' {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is invalid"
                        }
                    })} />
                    {
                        errors.email && (<div>{errors.email.message}</div>)
                    }
                    {
                        errors.email && errors.email.type === "required" && (<div>Email required</div>)
                    }
                </div>
                <div>
                    <label>password</label>
                    <input type='text' name='password'{...register("password", {
                        required: true,
                        validate: {
                            checkLength: (value) => value.length >= 6,
                            matchPattern: (value) =>
                                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                                    value
                                )
                        }
                    })} />
                    {errors.password?.type === "required" && (
                        <p className="errorMsg">Password is required.</p>
                    )}
                    {errors.password?.type === "checkLength" && (
                        <p className="errorMsg">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                    {errors.password?.type === "matchPattern" && (
                        <p className="errorMsg">
                            Password should contain at least one uppercase letter, lowercase
                            letter, digit, and special symbol.
                        </p>
                    )}
                </div>
                <button type='submit'>login</button>
            </form>
        </div>
    )
}