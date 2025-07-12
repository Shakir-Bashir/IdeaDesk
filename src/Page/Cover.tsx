import type { ChangeEventHandler } from "react";
import { useRef } from "react";
import styles from "./Cover.module.css";

export const Cover = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeCoverImage = () => {
    fileInputRef.current?.click();
  };

  const onChangeCoverUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    console.log(target?.files?.[0]);
  };

  return (
    <div className={styles.cover}>
      <img src="ztm-notes.png" alt="Cover" className={styles.imgage} />
      <button className={styles.button} onClick={onChangeCoverImage}>
        Change cover
      </button>
      <input
        onChange={onChangeCoverUpload}
        style={{ display: "none" }}
        ref={fileInputRef}
        type="file"
      />
    </div>
  );
};
