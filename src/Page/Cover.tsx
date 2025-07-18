import type { ChangeEventHandler } from "react";
import { useRef } from "react";
import styles from "./Cover.module.css";
import { FileImage } from "../components/FileImage";
import { uploadImage } from "../utils/uploadImage";

type CoverProps = {
  filePath?: string;
  changePageCover: (filepath: string) => void;
};

export const Cover = ({ filePath, changePageCover }: CoverProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onChangeCoverImage = () => {
    fileInputRef.current?.click();
  };

  const onChangeCoverUpload: ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    const target = event.target;
    console.log(target?.files?.[0]);

    const result = await uploadImage(target?.files?.[0]);
    if (result?.fileName) {
      changePageCover(result.filePath);
    }
  };

  return (
    <div className={styles.cover}>
      {filePath ? (
        <FileImage className={styles.imgage} filePath={filePath} />
      ) : (
        <img src="ztm-notes.png" alt="Cover" className={styles.imgage} />
      )}
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
