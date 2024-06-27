import { useState } from "react";

const Demo = () => {
  const [inputFiled, setInputFiled] = useState("");
  const [vowel, setVowel] = useState("a,e,i,o,u");
  const [cons, setCons] = useState(0);
  const [value, setValue] = useState("");
  const [vowelCount, setVowelCount] = useState(0);

  const onClickHandler = (e) => {
    e.preventDefault();
    let vCount = 0;
    let consCount = 0;
    for (let i = 0; i < inputFiled.length; i++) {
      if (
        inputFiled.charAt(i).toLowerCase() == "a" ||
        inputFiled.charAt(i).toLowerCase() == "e" ||
        inputFiled.charAt(i).toLowerCase() == "i" ||
        inputFiled.charAt(i).toLowerCase() == "o" ||
        inputFiled.charAt(i).toLowerCase() == "u"
      ) {
        vCount++;
        setVowelCount(vCount);
      } else {
        consCount++;
        setCons(consCount);
      }
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Value"
          onChange={(e) => setInputFiled(e.target.value)}
        />
        <button onClick={onClickHandler}>Submit</button>
      </form>
      <div>Vowel count</div>
      {vowelCount}
      <div>cons</div>
      {cons}
    </div>
  );
};
export default Demo;
