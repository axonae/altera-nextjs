import React from 'react'

const page = () => {
  return (
    <div className="pt-40 text-center">
    <h1 className="text-white font-warp font-bold text-5xl">Privacy Policy</h1>
    <p className="text-zinc-300 font-neon text-xl">Last Updated on March 11, 2023</p>
    <div className="max-w-2xl px-5 mx-auto text-left mt-24">
        <p className="text-zinc-200 text-sm">
            This privacy policy (&quot;Policy&quot;) describes how Altera SMS collects, protects and uses the 
            personally identifiable information (&quot;Personal Information&quot;) you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) 
            may provide through the Altera SMS website (altera.vip) or through the use of our discord 
            bot, (Altera SMS#0243). The Policy also describes the choices available to you regarding 
            our use of your Personal Information and how you can access and update this information. 
            This Policy only applies to Altera SMS and not to any other subsection of Altera or any of 
            its partners.
        </p>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Collection of Personal Information</h3>
            <p className="text-zinc-200 text-sm">
                We receive and store any information you provide to us 
                when you make a purchase through the Website. Currently this is limited to your email 
                address, which is required to deliver instructions post purchase.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Collection of non-personal information</h3>
            <p className="text-zinc-200 text-sm">
                We do not automatically record any data that your browser sends us when you first load up 
                our website. However, once you make a purchase, we record the following information your 
                browser sends us: your device&apos;s IP address, browser type and version and operating system 
                type and version. This information is kept during your purchase to authenticate your 
                payment and help our anti-fraud systems prevent malicious payments. After your payment 
                is completed, our payment manager (Sellix.io) will store your information in case of a 
                chargeback.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Purchases</h3>
            <p className="text-zinc-200 text-sm mb-5">
                All purchases made through the Website are processed by a third party payment processor, 
                Stripe (stripe.com), PayPal (paypal.com), CashApp (cash.app) or Sellix (sellix.io). Our 
                payment processors may ask you for personal and/or non-personal information, such as your 
                name, address, email address, credit card information, or other Personal Information. They 
                each have a strict privacy policy that describes their collection and use of personal 
                information. Altera SMS does not control our payment processors or their collection or use 
                of information. Any questions or concerns about their practices should be directed to the 
                payment processor in question.
            </p>
            <p className="text-zinc-200 text-sm">
                Our payment processors provide us with certain non-personal information relating to 
                purchases made by visitors to the Website. The non-personal information may include 
                details of the purchase such as the date, amount paid, and product purchased. The 
                non-personal purchase information may be linked to the Personal Information you provide 
                to us (typically limited to your email address, as stated above). The payment processors 
                do not supply us with any of your other Personal Information such as your name, 
                street address, or credit card information unless legal action is required on either end 
                of the payment.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Managing personal information</h3>
            <p className="text-zinc-200 text-sm">
                All personal information stored in our databases are <strong>read only</strong>. Not even our
                staff, owners or developers can alter the information. If you wish to see what information we 
                are currently storing for your account, join our discord server and execute the /userdata command.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Use and processing of collected information</h3>
            <p className="text-zinc-200 text-sm">
                All the information we store in our databases contains your discordID, your current balance, 
                your redeemed invoiceIDs, your last deposit timestamp and information about the last number you
                generated. This data is crutial to the functionality of our software as it allows us to 
                identify customers by their discord accounts and allow them to check sms codes from 
                numbers they have generated.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Legal disclosure</h3>
            <p className="text-zinc-200 text-sm">
                We will disclose any information we collect, use or receive if required or permitted by 
                law, such as to comply with a subpoena, or similar legal process, and when we believe in 
                good faith that disclosure is necessary to protect our rights, protect your safety or the 
                safety of others, investigate fraud, or respond to a government request. In the event we 
                go through a business transition, such as a merger or acquisition by another company, or 
                sale of all or a portion of its assets, your user account and personal data will likely 
                be among the assets transferred.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Changes and amendments</h3>
            <p className="text-zinc-200 text-sm">
                We reserve the right to modify this privacy policy relating to the Website or the discord
                bot at any time, effective upon posting of an updated version of this Policy on the 
                Website. When we do we will revise the updated date at the bottom of this page. Continued 
                use of the Website after any such changes shall constitute your consent to such changes.
            </p>
        </div>
        <div className="mt-10">
            <h3 className="text-white text-xl mb-5 font-extrabold font-neon">Acceptance of this policy</h3>
            <p className="text-zinc-200 text-sm">
                You acknowledge that you have read this Policy and agree to all its terms and conditions. 
                By using the discord bot you agree to be bound by this Policy. If you do not agree to 
                abide by the terms of this Policy, you are not authorized to use or access the Website.
            </p>
        </div>
    </div>
</div>
  )
}

export default page