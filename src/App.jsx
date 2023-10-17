import Header from "./components/Header";
import NoteActive from "./components/NoteActive";
import NoteApp from "./components/NoteApp";
import viteLogo from "/vite.svg";

const App = () => {
  return (
    <>
      <Header />
      <NoteApp />
      <NoteActive />
    </>
  );
};

export default App;
