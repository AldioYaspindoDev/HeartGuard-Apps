"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login(){
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");
   const[error, setError] = useState("");
   const[loading, setLoading] = useState(false);
   const router = useRouter();
    
    const HandleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

                   if(!email || !password){
                setError("field harus diisi");
                setLoading(false);
                return ;
            }
            

        try {
           const response = await fetch('http://127.0.0.1:5000/api/user/login', {
               method: "POST",
               headers: {
                   "content-type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });
            
 
            const data = await response.json();
            
            if(!response.ok){
                throw new Error(data.message || "gagal registrasi")
            }
            
            router.push("/");
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <section className='p-20'>
                <div className='p-10 mx-auto w-150 shadow-2xl rounded-2xl'>
                    <div>
                        <h1 className='text-center font-bold text-2xl'>LOGIN</h1>
                        {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
                    </div>
                    <form onSubmit={HandleLogin}>

                    <div>
                        <label className='block'>
                            email
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder='masukan email'
                            className='w-full bg-gray-200 p-2 rounded placeholder-black mb-2'
                        />
                    </div>


                    <div>
                        <label className='block'>
                            password
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='masukan password'
                            className='w-full bg-gray-200 p-2 rounded placeholder-black mb-10'
                        />
                    </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-blue-600 text-white p-2 rounded-2xl w-full'
                        > kirim </button>

                    </form>
                    </div>
            </section>
        </>
    )
}