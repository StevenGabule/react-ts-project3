import { MidiValue, notes } from "../../domain/note";
import styles from "./Keyboard.module.css";
import { Key } from "../Key/Key";
import { selectKey } from "../../domain/keyboard";
import { FunctionComponent } from "react";

export type KeyboardProps = {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
};

export const Keyboard: FunctionComponent<KeyboardProps> = ({ loading, stop, play }) => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return <Key 
									key={midi} 
									type={type} 
									label={label} 
									disabled={loading} 
									onDown={() => play(midi)} 
									onUp={() => stop(midi)} 
								/>;
      })}
    </div>
  );
};
