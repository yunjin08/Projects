const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  textGradient:
    "bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300",
  bgGradient: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900",
  bg2Gradient: "bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300",
  bg3Gradient: "bg-gradient-to-r from-teal-600 via-teal-400 to-teal-200",
  pink__gradient: "bg-gradient-to-r from-gray-950 via-pink-600 to-gray-950",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY} overflow-hidden`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
