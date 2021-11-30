import Header from "./components/Header";
import Body from "./components/MainBody";

export default function App() {
  return (
    <div>
      <div className="mt-10">
        <Header></Header>
      </div>
      <div>
        <Body></Body>
      </div>
    </div>
  );
}
