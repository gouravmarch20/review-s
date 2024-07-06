import React, { useState, useEffect, useRef } from "react";

const HoverComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [testShow, setTestShow] = useState(false);
  const modalRef = useRef(null);

  // Define the handleCursor function within the component to ensure it has access to the state
  const handleCursor = (event) => {
    try {
      if (event.type === "mousemove") {
        const { target } = event;
        console.log("naruto_2", testShow);

        if (
          target &&
          target.classList &&
          target.classList.contains("pickLinkTag")
        ) {
          console.log(`  modalstatus_1`, showModal);

          if (!showModal) {
            setTestShow(true);
            setShowModal(true);
          }

          console.log("Hovering over element with class pickLinkTag");
        } else if (testShow) {
          console.log("naruto-2", testShow);
          setTestShow(false);
        }
      }
    } catch (error) {
      console.log(` error at handleCursor  ${error}`);
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("mousemove", handleCursor);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, [showModal, testShow]); // Dependencies array ensures the latest state is used

  return (
    <div>
      <span className="kogo-fs-3 fw-bold text-kogo-white pickLinkTag hover-text">
        Hover over me
      </span>
      {showModal && (
        <div ref={modalRef} className="modal">
          {/* Modal content */}
        </div>
      )}
    </div>
  );
};

export default HoverComponent;
