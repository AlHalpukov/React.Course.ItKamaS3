// import { useState } from "react";

// function Game() {
//   const [activePage, setActivePage] = useState("counter");

//   return (
//     <div>
//       {activePage === "counter" && <Counter setActivePage={setActivePage} />}
//       {activePage === "elephant" && <Elephant />}
//     </div>
//   );
// }

// export default Game;

// function Counter({ setActivePage }) {
//   const [value, setValue] = useState(1);

//   const handleClick = () => {
//     setValue(value + 1);
//     if (value === 5) setActivePage("elephant");
//   };

//   return (
//     <div>
//       <h1>
//         <button onClick={handleClick}>{" + "}</button>
//         <span>{` -->  ${value}`}</span>
//       </h1>
//     </div>
//   );
// }

// function Elephant() {
//   return (
//     <div>
//       <img
//         src="https://flomaster.top/uploads/posts/2022-12/1672394028_flomaster-club-p-slonenok-risunok-dlya-detei-krasivo-1.jpg"
//         alt="elephant"
//       />
//     </div>
//   );
// }
