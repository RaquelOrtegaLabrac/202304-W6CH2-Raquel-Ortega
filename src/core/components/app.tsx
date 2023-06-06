import { Info } from "../../features/phone/components/Info";
import { Keyboard } from "../../features/phone/components/Keyboard";
import { Actions } from "../../features/phone/components/Actions";
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
