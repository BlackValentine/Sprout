import React from 'react';

export default function TermsConditions() {
  return (
    <>
      <h1 className="text-[90px] font-forum text-center my-10">Terms & Conditions</h1>
      <div className="px-40 pt-16 mx-10 bg-timberwolf text-gray2">
        <h3 className="font-forum text-[32px] mb-4">Customer Care</h3>
        <p className="pr-48 pb-16 text-lg border-b border-solid border-gray2">
          I’m a Customer Care section. I’m a great place to write a long text about your company and your services, and,
          most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great
          way to build trust and reassure your customers that they can buy with confidence.
        </p>
      </div>
      <div className="px-40 pt-16 mx-10 bg-timberwolf text-gray2">
        <h3 className="font-forum text-[32px] mb-4">Privacy & Safety</h3>
        <p className="pr-48 pb-4 text-lg">
          I’m a Privacy & Safety policy section. I’m a great place to inform your customers about how you use, store,
          and protect their personal information. Add details such as how you use third-party banking to verify payment,
          the way you collect data or when will you contact users after their purchase was completed successfully.
        </p>
        <p className="pr-48 pb-16 text-lg border-b border-solid border-gray2">
          Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and
          detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your
          site!
        </p>
      </div>
      <div className="px-40 pt-16 mx-10 bg-timberwolf text-gray2">
        <h3 className="font-forum text-[32px] mb-4">Wholesale Inquiries</h3>
        <p className="pr-48 pb-4 text-lg">
          I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your
          stunning products. Use plain language and give as much information as possible in order to promote your
          business and take it to the next level!
        </p>
        <p className="pr-48 pb-16 text-lg border-b border-solid border-gray2">
          I’m the second paragraph in your Wholesale Inquiries section. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the
          font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
      </div>
      <div className="px-40 py-16 mx-10 bg-timberwolf text-gray2">
        <h3 className="font-forum text-[32px] mb-4">Payment Methods</h3>
        <ul className="list-disc pl-10">
          <li>Credit / Debit Cards</li>
          <li>PAYPAL</li>
          <li>Offline Payments</li>
        </ul>
      </div>
    </>
  );
}
