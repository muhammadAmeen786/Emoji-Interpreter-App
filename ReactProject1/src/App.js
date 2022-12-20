import { useState } from "react";
import "./styles.css";

let emojiDictionary = {
  "😃": "Smileys & People",
  "😅": "Grinning Face with Sweat",
  "😬": "Grimacing Face",
  "☠️": "Skull and Crossbones",
  "😟": " Worried Face",
  "🥺": "Pleading Face",
  "😩": "Weary Face",
  "👶": "Baby",
  "🙂": "Slightly Smiling Face",
  "😛": "Squinting face with tongue"
};

let emojiArray = Object.keys(emojiDictionary);


export default function App() {
  const [emoji, setEmoji] = useState('');
 

    function emojiClickHandler(emoji){
      var emojiGot = emojiDictionary[emoji];
      setEmoji(emojiGot);

    }
   
    

  return (
    <div className="App">
     
   <div><h1>Emoji Translator</h1></div>
   <input placeholder={emoji}></input>
   

   <div>
     {emojiArray.map((emoji)=>{
       return <span className="emojis"
       onClick={()=>emojiClickHandler(emoji)}
       
       >{emoji}</span>
     })}
   </div>
   <div>{emoji}</div>
    </div>

    
  );
}

