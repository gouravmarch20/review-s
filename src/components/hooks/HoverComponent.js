"use client";
import React, { useState, useRef, useEffect } from "react";
import "./YourComponent.css"; // Import your CSS file for styling

const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isCursorOverModal, setIsCursorOverModal] = useState(false);
  const linkRefs = useRef([]);

  const modalRef = useRef(null);

  const handleMouseOverLink = (event, index) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.right + window.scrollX,
    });
    linkRefs.current[index] = true;
    setShowModal(true);
  };

  const handleMouseOutLink = (index) => {
    linkRefs.current[index] = false;
    setTimeout(() => {
      if (!linkRefs.current.includes(true) && !isCursorOverModal) {
        // setShowModal(false);
      }
    }, 50);
  };

  const handleMouseOverModal = () => {
    setIsCursorOverModal(true);
  };

  const handleMouseOutModal = () => {
    setIsCursorOverModal(false);
    setTimeout(() => {
      if (!linkRefs.current.includes(true)) {
        // setShowModal(false);
      }
    }, 50);
  };

  const handleMouseMove = (event) => {
    if (modalRef.current) {
      const modalRect = modalRef.current.getBoundingClientRect();
      const isCursorOverModalRect =
        event.clientX >= modalRect.left &&
        event.clientX <= modalRect.right &&
        event.clientY >= modalRect.top &&
        event.clientY <= modalRect.bottom;

      if (!isCursorOverModalRect && !linkRefs.current.includes(true)) {
        // setShowModal(false);
      }
    }
  };

  useEffect(() => {
    const pickLinkTags = document.querySelectorAll(".pickLinkTag");

    pickLinkTags.forEach((tag, index) => {
      tag.addEventListener("mouseover", (event) =>
        handleMouseOverLink(event, index)
      );
      tag.addEventListener("mouseout", () => handleMouseOutLink(index));
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      pickLinkTags.forEach((tag, index) => {
        tag.removeEventListener("mouseover", (event) =>
          handleMouseOverLink(event, index)
        );
        tag.removeEventListener("mouseout", () => handleMouseOutLink(index));
      });

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleCursor);

    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, [showModal]);

  const handleCursor = (event) => {
    try {
      if (event.type === "mousemove") {
        const { target } = event;

        if (
          target &&
          target.classList &&
          target.classList.contains("pickLinkTag")
        ) {
          // console.log("naruto_2", target);
        } else if (showModal && !modalRef) {
          if (showModal) {
            setShowModal(false);
          }
        } else if (
          modalRef &&
          showModal &&
          !target.classList.contains("your-modal-class")
        ) {
          // console.log("bitman", target);
          if (showModal) {
            setShowModal(false);
          }
        }
      }
    } catch (error) {
      console.log(` error at handleCursor  ${error}`);
    }
  };

  return (
    <>
      {[1, 2, 3].map((sectionIndex) => (
        <div key={sectionIndex}>
          {/* Your component content */}
          <div className="d-none d-sm-block lh-base mb-2 kogo-fs-3 fw-light text-start text-break px-1">
            Absolutely, Gourav! Delhi is a food paradise! Here are a few local
            dishes you must try and the best places to find them:
            <br />
            <br />
            <>
              1. Paranthas - Nothing beats the heartiness of a good Parantha.
              Head over to
              <span
                className="kogo-fs-3 fw-bold text-kogo-white pickLinkTag hover-text"
                data-location="Gali Paranthe Wali"
                onMouseOver={(event) => handleMouseOverLink(event, 0)}
                onMouseOut={() => handleMouseOutLink(0)}
              >
                Gali Paranthe Wali
              </span>{" "}
              in Old Delhi to get your fix.
            </>
            {/* Add similar JSX blocks for sections 2 and 3 */}
          </div>

          {showModal && (
            <div
              ref={modalRef}
              className="your-modal-class"
              style={{
                position: "absolute",
                top: modalPosition.top,
                left: modalPosition.left,
              }}
              onMouseOver={handleMouseOverModal}
              onMouseOut={handleMouseOutModal}
            >
              Your modal content
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default YourComponent;
