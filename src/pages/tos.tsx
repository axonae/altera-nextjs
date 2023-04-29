import React from 'react'

const page = () => {
  return (
    <div className="pt-40 text-center">
        <h1 className="text-white font-warp font-bold text-5xl">Terms of Service</h1>
        <p className="text-zinc-300 font-neon text-xl">Last Updated on March 12, 2023</p>
        <div className="max-w-2xl px-5 mx-auto text-left mt-24">
            <p className="text-zinc-200 text-sm">
                This Terms of Service (&quot;TOS&quot;) describes how you (the 
                user) are expected to act while using our services.
            </p>
            <div className="mt-10">
                <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Collection of Personal Information</h3>
                <p className="text-zinc-200 text-sm">
                    We receive and store any information you provide to us 
                    when you make a purchase through the Website. Currently this is limited to your email 
                    address, which is required to deliver instructions post purchase.
                </p>
            </div>
        </div>
    </div>
  )
}

export default page