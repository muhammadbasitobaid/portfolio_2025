import MailchimpSubscribe from "react-mailchimp-subscribe";
// import TextareaInput from './TextareaInput';
// import SelectInput from './SelectInput';

// Custom form for Mailchimp
//
const TextInput = ({ label, type, id, placeholder, required = false, inputRef }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400"
        placeholder={placeholder}
        required={required}
        ref={inputRef}
      />
    </div>
  );
};
const CustomMailchimpForm = ({ status, message, onValidated }) => {
  let email, name;
  
  const submit = () => {
    if (email && name && email.value.indexOf("@") > -1) {
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
      });
    }
  };

  return (
    <div className="space-y-8">
      {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
      {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <div style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: message }} />}
      
      <TextInput
        label="Your name"
        type="text"
        id="name"
        placeholder="John Doe"
        required
        ref={(node) => (name = node)}
      />
      
      <TextInput
        label="Your email"
        type="email"
        id="email"
        placeholder="name@domain.com"
        required
        ref={(node) => (email = node)}
      />

      <button
        onClick={submit}
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
      >
        Subscribe
      </button>
    </div>
  );
};

const ContactUs = () => {
  const url = "//5efcdbc5622f4b1c419236c83868c899-us22.us22.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="text-xl font-bold text-gray-100 mb-6">Contact Us</h2>
      <MailchimpSubscribe
        url={url}
      />
    </div>
  );
};

export default ContactUs;
