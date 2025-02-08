// import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

function LandingPage() {
//   const props = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: { duration: 1000 },
//   });

  return (
    <>
      {/* <animated.div style={props}>
        <div>Digital Brain App</div>
      </animated.div> */}
      <p></p>
      <Link to={routes.register}>Register</Link>
      <Link to={routes.login}>Login</Link>
    </>
  );
}

export default LandingPage;
