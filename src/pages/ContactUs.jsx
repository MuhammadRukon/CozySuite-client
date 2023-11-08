import { useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/Container";
import Head from "../components/Head";

const ContactUs = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };
  return (
    <MainLayout>
      <Container>
        <Head title={"Contact"} />
        <div className="my-8 mt-24 sm:my-24 md:my-28 text-center px-5 lg:px-0 overflow-hidden">
          <h2 className="text-center font-primary text-5xl">Contact Us</h2>
          <div className=" rounded-lg">
            <form
              onSubmit={(e) => handleSubmit(e)}
              ref={formRef}
              className="card-body p-0 mt-7"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="form-control  flex-1">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="first name"
                    className="input input-bordered focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="last name"
                    className="input input-bordered focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none"
                  required
                />
              </div>
              <span className="label-text text-left">Message</span>
              <textarea
                className="textarea h-[200px] textarea-bordered resize-none focus:outline-none"
                placeholder="Write here..."
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn bg-primary hover:bg-primary text-white">
                  Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ContactUs;
