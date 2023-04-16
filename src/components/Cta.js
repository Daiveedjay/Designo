// // import Button from "./Button";
// // import "./Cta.scss";

// // // Cta component
// // export default function Cta({ buttonContent, link }) {
// //   // Render a call-to-action (CTA) section with text and a button
// //   return (
// //     <div className="cta-section">
// //       <div className="cta-label">
// //         <h2 className="medium-text">Let's talk about your project</h2>
// //         <p className="small-text">
// //           Ready to take it to the next level? Contact us today and find out how
// //           our expertise can help your business grow.
// //         </p>
// //       </div>
// //       <div className="cta-button--container">
// //         <Button link={link} buttonContent={buttonContent.buttonText} />
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect } from "react";
// import Button from "./Button";
// import "./Cta.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Cta = React.forwardRef(({ buttonContent, link }, ref) => {
//   useEffect(() => {
//     if (ref.current) {
//       gsap.fromTo(
//         ref.current,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: 0.6,
//           scrollTrigger: {
//             trigger: ref.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }
//   }, [ref]);

//   return (
//     <div ref={ref} className="cta-section">
//       <div className="cta-label">
//         <h2 className="medium-text">Let's talk about your project</h2>
//         <p className="small-text">
//           Ready to take it to the next level? Contact us today and find out how
//           our expertise can help your business grow.
//         </p>
//       </div>
//       <div className="cta-button--container">
//         <Button link={link} buttonContent={buttonContent.buttonText} />
//       </div>
//     </div>
//   );
// });

// export default Cta;

import React from "react";
import Button from "./Button";
import "./Cta.scss";

const Cta = React.forwardRef(({ buttonContent, link }, ref) => {
  return (
    <div ref={ref} className="cta-section">
      <div className="cta-label">
        <h2 className="medium-text">Let's talk about your project</h2>
        <p className="small-text">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="cta-button--container">
        <Button link={link} buttonContent={buttonContent.buttonText} />
      </div>
    </div>
  );
});

export default Cta;
