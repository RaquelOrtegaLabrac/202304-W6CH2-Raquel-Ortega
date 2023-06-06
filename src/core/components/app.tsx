import { Info } from "../../features/phone/components/Info";
import { Keyboard } from "../../features/phone/components/Keyboard";
import { Actions } from "../../features/phone/components/Actions";
import "./app.css";
export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
