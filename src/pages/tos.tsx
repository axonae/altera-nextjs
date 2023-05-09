import React from 'react'

const page = () => {
  return (
    <div className="pt-40 text-center">
        <h1 className="text-5xl font-bold text-white font-warp">Terms of Service</h1>
        <p className="text-xl text-zinc-300 font-neon">Last Updated on March 12, 2023</p>
        <div className="max-w-2xl px-5 mx-auto mt-24 text-left">
            <p className="text-sm text-zinc-200">
                This Terms of Service (&quot;TOS&quot;) describes how you (the 
                user) are expected to act while using our services.
            </p>
            <div className="mt-10">
                <h3 className="mb-5 text-xl font-extrabold text-white font-neon">Collection of Personal Information</h3>
                <p className="text-sm text-zinc-200">
                    We receive and store any information you provide to us 
                    when you make a purchase through the Website. Currently this is limited to your email 
                    address, which is required to deliver instructions post purchase.
                </p>
            </div>
            <div className="mt-10">
                <h3 className="mb-5 text-xl font-extrabold text-white font-neon">The Rules</h3>
                <p className="text-sm text-zinc-200">
                    Our service gives you the possibility to generate non VoiP phone numbers for hundreds of services and we almost never monitor usage of them because we value your privacy. However, there are some cases where we will intervene or block your number generation request.
                </p>
                <h4 className="mt-3 mb-1.5 font-extrabold text-white text-md font-neon">Usage of phone numbers for financial or banking institutions</h4>
                <p className="text-sm text-zinc-200">
                    You are not allowed to use our services with financial or banking institutions because why would you need an anonymous phone number if you alreayd have yo give them your SSN, address, name, DoB, and other information that is more valuable.
                </p>
                <h4 className="mt-3 mb-1.5 font-extrabold text-white text-md font-neon">Illegal activities</h4>
                <p className="text-sm text-zinc-200">
                    Generating phone numbers to create accounts via allowed services with intent to &quot;card&quot;, chargeback, or scam is not allowed. Not only is this illegal activity. Before using our services, please make sure what you are doing is legal in your current location as well as in the United States.
                </p>
            </div>
            <div className="mt-10">
                <h3 className="mb-5 text-xl font-extrabold text-white font-neon">Changes</h3>
                <p className="text-sm text-zinc-200">
                    We reserve the right to change these Terms of Service at any moment without notice. When they are changed, we will notify all active users, however it is your responsibility to read these Terms of Service and know what is expected use of our service.
                </p>
            </div>
        </div>
    </div>
  )
}

export default page