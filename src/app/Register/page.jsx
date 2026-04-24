"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register(){
   const[username, setUsername] = useState("");
   const[email, setEmail] = useState("");
   const[nohp, setNohp] = useState("");
   const[password, setPassword] = useState("");
   const[error, setError] = useState("");
   const[loading, setLoading] = useState(false);
   const router = useRouter(); 

   const HandleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
       
        try {
           const response = await fetch('http://127.0.0.1:5000/api/user/register', {
               method: "POST",
               headers: {
                   "content-type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    nohp,
                    password
                }),
            });
            
            if(!username || !email || !nohp || !password){
                setError("field harus diisi");
                setLoading(false);
                return ;
            }
            
            const data = await response.json();
            
            if(!response.ok){
                throw new Error(data.message || "gagal registrasi")
            }
            
            router.push("/Login");
            
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
                        <h1 className='text-center font-bold text-2xl'>REGISTRASI</h1>
                    </div>
                    <form onSubmit={HandleRegistration}>

                    <div>

                        <label className='block'>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            placeholder='masukan username anda'
                            className='w-full bg-gray-200 p-2 rounded placeholder-black mb-2'
                        />
                    </div>

                    <div>
                        <label className='block'>
                            email
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className='w-full bg-gray-200 p-2 rounded placeholder-black mb-2'
                        />
                    </div>

                    <div>
                        <label className='block'>
                            number phone
                        </label>
                        <input
                            type='text'
                            value={nohp}
                            onChange={(e) => setNohp(e.target.value)}
                            placeholder='masukan nomor hp anda'
                            className='w-full bg-gray-200 p-2 rounded placeholder-black mb-2'
                        />
                    </div>

                    <div>
                        <label className='block'>
                            password
                        </label>
                        <input
                            type='text'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='masukan email'
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