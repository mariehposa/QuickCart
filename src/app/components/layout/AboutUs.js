import SectionHeaders from "./SectionHeaders";

const AboutUs = () => {
  return (
    <section className="text-center my-16" id="about">
      <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
      <div className="text-gray-500 max-w-lg mx-auto mt-4 flex flex-col gap-4">
        <p>
          At QuickCart, we are passionate about simplifying the way you shop for
          groceries. We understand the challenges and time constraints that come
          with modern-day living, which is why we have made it our mission to
          provide you with a seamless and convenient solution for all your
          grocery needs.
        </p>
        <p>
        QuickCart was born out of a desire to revolutionize the traditional
          grocery shopping experience. We are also proud to offer fast and
          reliable delivery services, so you can enjoy the convenience of
          doorstep delivery without any hassle or delay.
        </p>
        <p>
          We invite you to join the QuickCart family and experience the future
          of grocery shopping. Welcome to a fresher, easier way to shop.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
