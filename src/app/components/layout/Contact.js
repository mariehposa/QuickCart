import SectionHeaders from "./SectionHeaders";

const Contact = () => {
  return (
    <section className="text-center my-8" id="contact">
      <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
      <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+46123123123">
          +44 123 123 123
        </a>
      </div>
    </section>
  );
};

export default Contact;
