const Section = ({ Title, children }) => {
  return (
    <>
      <section>
        <h2>{Title}</h2>
        {children}
      </section>
    </>
  );
};
export default Section;
