import Contact from "../contact/Contact";
import MobileExperience from "./MobileExperience";

function MobilePage() {
  return (
    <>
      <MobileExperience />

      {/*
       * Dejamos espacio para la
       * navegación inferior fija.
       */}
      <div className="pb-20">
        <Contact />
      </div>
    </>
  );
}

export default MobilePage;
