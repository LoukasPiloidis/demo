import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { scrollTopButton, faderAnimation1 } from "../animations";

export default function clickToTopScroll() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      variants={scrollTopButton}
      onClick={scrollToTop}
    >
      <motion.div className="iconHolder">
        <FontAwesomeIcon icon={faChevronUp} color="#23d997" className="icon" />
      </motion.div>
    </ScrollButton>
  );
}

const ScrollButton = styled(motion.div)`
  width: 10rem;
  height: 3.2rem;
  border: 0.2rem solid white;
  border-radius: 1.5rem;
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .icon {
    font-size: 5rem;
  }

  &:hover {
    background-color: #282828;
    border: 0.2rem solid #23d997;
  }
`;
