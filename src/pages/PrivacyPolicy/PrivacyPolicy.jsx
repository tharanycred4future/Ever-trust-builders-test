import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className=' container mx-auto px-4 sm:px-10 md:px-16 lg:pl-[200px] lg:pr-[150px] py-[200px]  max-w-[96%]'>
         <h1 className='font-bold text-2xl md:text-3xl text-gray-600'>Privacy Policy </h1>
      <h4 className='pt-3 text-lg' ><span className='font-bold'>Effective Date:</span> 04/16/2025 </h4>
      <h5 className='pt-3 text-lg'><span className='font-bold'>Last Updated:</span> 04/16/2025</h5>
      <p className='text-base md:text-lg py-4'>Ever Trust Builders ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
      <ol className='list-decimal pt-4 pl-5'>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Information We Collect</span>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-12 ">
          <li className='pt-3 '><span className='font-bold'>Personal Information: </span>Such as your name, email address, phone number, billing address, and other information you voluntarily provide.</li>
          <li className='pt-3 '><span className='font-bold'>Non-Personal Information: </span>Such as your IP address, browser type, operating system, and browsing behavior.</li>
          <li className='pt-3 '><span className='font-bold'>Cookies:</span>Information collected through cookies and similar technologies. For more details, please refer to our Cookie Policy.</li>
            </ul></li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>How We Use Your Information</span>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-12 ">
            <li className='pt-3 '>To provide and improve our services</li>
            <li className='pt-3 '>To communicate with you regarding updates, promotions, and offers.</li>
            <li className='pt-3 '>To analyze website performance and user behavior.</li>
            <li className='pt-3 '>To comply with legal obligations.</li></ul></li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Sharing Your Information</span>
        <p>We may share your information with:</p>
        <ul  className="list-disc pl-12 ">
            <li className='pt-3 '><span className='font-bold'>Service Providers: </span>Third parties who assist us in delivering our services (e.g., payment processors, analytics providers).</li>
            <li className='pt-3 '><span className='font-bold'>Legal Requirements: </span>When required by law or to protect our legal rights.</li>
            <li className='pt-3 '><span className='font-bold'>Business Transfers: </span>In case of a merger, acquisition, or sale of assets.</li>
        </ul></li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Your Privacy Rights</span>
        <p>Depending on your location, you may have the following rights:</p>
        <ul className="list-disc pl-12 ">
            <li className='pt-3 '>The right to access, update, or delete your personal information.</li>
            <li className='pt-3 '>The right to opt out of the sale of your personal information (if applicable).</li>
            <li className='pt-3 '>The right to limit the use of your sensitive personal information.</li></ul>
            <p>If you are a resident of California, Virginia, or any other state with privacy regulations, please refer to our [Privacy Rights Addendum] for more details.</p></li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Data Security</span>We implement reasonable technical, administrative, and physical safeguards to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Data Retention</span>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations</li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Third-Party Links</span>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.</li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Children's Privacy</span>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.</li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Changes to This Policy</span>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised.</li>
        <li className='pt-2 text-base md:text-lg'><span className='font-bold'>Contact Us</span>
        <p>If you have any questions about this Privacy Policy, </p>
        <p>please contact us at:<span className='text-gray-600'>contactus@etbuilders.com</span> </p></li>
      </ol>
      
    </div>
  )
}

export default PrivacyPolicy
