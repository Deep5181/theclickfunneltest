import { Mail, MapPin, Phone, SendIcon } from "lucide-react";
import { Input } from "../Reusable/Input";
import { Textarea } from "../Reusable/Textarea";

const details = {
  phone: ["+91-8920658919", "+91-7011606003"],
  email: "info@theclickfunnel.com",
  address: "165/166, Pkt-25,Sec-24 Rohini, Delhi-110085",
};

// Example React.js form submit
const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("comments", comments);

    const response = await fetch("theclickfunneltest/src/Components/mail.class.php", {
        method: "POST",
        body: fromdata,
    });

    const result = await response.text();
    alert(result); // Success or error message from PHP
};


export default function GetInTouchForm() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto">
        <div className="bg-gradient-to-br from-black via-black to-gray-200 rounded-3xl p-6 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Get in touch
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We’d love to hear from you. Let's talk about it!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-lg font-medium">
                    {details.phone.map((phone, index) => (
                      <div key={phone}>
                        <a href={`tel:${phone}`}>{phone}</a>
                        {index < details.phone.length - 1 && ", "}
                      </div>
                    ))}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-lg font-medium">
                    <a href={`mailto:${details.email}`}>{details.email}</a>
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-lg font-medium leading-relaxed">
                    {details.address}
                  </div>
                </div>
              </div>
            </div>

                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-10">
                          <form className="space-y-6" id="fromdata">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700 font-medium">
                      Name*
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="border-gray-300 placeholder:text-gray-400 text-black focus:border-black"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-gray-700 font-medium"
                    >
                      Phone number*
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-gray-300 placeholder:text-gray-400 text-black focus:border-black"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-gray-300 placeholder:text-gray-400 text-black focus:border-black"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="comments"
                    className="text-gray-700 font-medium"
                  >
                    Comments
                  </label>
                  <Textarea
                    id="comments"
                    placeholder="Enter your comments"
                    className="border-gray-300 placeholder:text-gray-400 text-black min-h-[120px] resize-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <SendIcon className="size-4" />
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
