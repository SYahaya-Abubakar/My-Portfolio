export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const win: Window = window;
export const sendEmail = () => {
  win.location = "mailto:sadickashton@gmail.com";
};

  