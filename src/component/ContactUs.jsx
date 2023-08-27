import { Slide } from "react-awesome-reveal";
export default () => {
  const contactMethods = [
    
    
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: " contact.fusiotech@gmail.com",
      title: "Email",
    },
  ];

  return (
    <main className="py-14 md:py-0 md:pb-28">
      <Slide direction="right">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl space-y-3">
            <h3 className="text-blue-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help, guide or counsel you.
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you.
            </p>
          </div>
          <div>
            <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
              {contactMethods.map((item, idx) => (
                <li key={idx}>
                  <h4 className="text-gray-800 text-lg font-medium">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>
    </main>
  );
};
