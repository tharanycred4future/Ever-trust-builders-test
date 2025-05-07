import React from 'react';

const BlogTwo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 pt-50">
    <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
      Understanding the Construction Timeline: What to Expect and When
    </h1>
    <img src="/blog-two-img.png" alt="" className='w-full h-full object-cover'/>
    <section className="mb-10">
      <p className="mb-4">
        Initiating a construction project—be it your dream house or the launch of a new commercial venture—is thrilling, yet it can also be daunting. Understanding the construction timeline helps manage expectations and ensures a smoother process.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">What is a Construction Project Timeline?</h2>
      <p className="mb-2">
        It’s a master schedule outlining each phase—from planning to final inspections—ensuring everyone involved stays on track.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Why a Construction Timeline Is Important</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Track progress and reduce delays</li>
        <li>Coordinate materials and contractors</li>
        <li>Control project costs</li>
        <li>Ensure code compliance</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Main Steps in a Construction Timeline</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-bold">1. Pre-Construction Phase</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Planning & Design:</strong> Architects and custom builders collaborate.</li>
            <li><strong>Permits:</strong> Secured through local authorities.</li>
            <li><strong>Budgeting:</strong> Based on scope, materials, and contingencies.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">2. Procurement Phase</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Hiring qualified contractors and vendors</li>
            <li>Securing materials from trusted suppliers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">3. Construction Phase</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Site preparation and foundation work</li>
            <li>Framing, MEP systems, exterior and interior finishing</li>
            <li>Final inspections before occupancy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">4. Post-Construction Phase</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Handover with walkthrough</li>
            <li>Ongoing maintenance recommendations</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Project Management Tools Used</h2>
      <p>
        Tools like <strong>Buildertrend, Procore</strong>, or <strong>CoConstruct</strong> ensure transparency in budgeting and communication with clients.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Common Challenges and Solutions</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <p><strong>Weather Delays</strong>: Use flexible scheduling, prep early.</p>
          <p><strong>Material Shortages</strong>: Pre-order, build vendor relationships.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <p><strong>Permit Delays</strong>: Use permit expediters.</p>
          <p><strong>Budget Overruns</strong>: Track costs & reserve funds.</p>
        </div>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Why Choose Evertrust Builders</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Detailed project scheduling and milestones</li>
        <li>Experienced and certified contractors</li>
        <li>Transparent communication with clients</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Schedule a Consultation</h2>
      <p>
        Begin your construction journey with confidence. <strong>Evertrust Builders</strong> offers affordable, high-quality infrastructure services in St. Louis. Whether you're building new or renovating, we're with you every step.
      </p>
    </section>

    
  </div>
  );
};

export default BlogTwo;
