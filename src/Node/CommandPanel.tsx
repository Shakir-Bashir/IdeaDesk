import { useEffect, useState } from "react";
import type { NodeType } from "../utils/types";
import { useOverflowsScreenBottom } from "./useOverflowsScreenBottom";
import styles from "./CommandPanel.module.css";
import cx from "classnames";

type CommandPanelProps = {
  nodeText: string;
  selectItem: (nodeType: NodeType) => void;
};

type SupprtedNodeType = {
  value: NodeType;
  name: string;
};

const SupportedNodeTypes: SupprtedNodeType[] = [
  { value: "text", name: "Text" },
  { value: "list", name: "List" },
  { value: "heading1", name: "heading1" },
  { value: "page", name: "page" },
  { value: "image", name: "image" },
  { value: "heading2", name: "heading2" },
  { value: "heading3", name: "heading3" },
];

export const CommandPanel = ({ selectItem, nodeText }: CommandPanelProps) => {
  const [selectdItemIndex, setSelectedItemIndex] = useState(0);
  const { overflows, ref } = useOverflowsScreenBottom();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        selectItem(SupportedNodeTypes[selectdItemIndex].value);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSelectedItemIndex, selectItem]);

  useEffect(() => {
    const normalixedValue = nodeText.toLocaleLowerCase().replace(/\//, "");
    setSelectedItemIndex(
      SupportedNodeTypes.findIndex((item) => item.value.match(normalixedValue))
    );
  }, [nodeText]);

  return (
    <div
      ref={ref}
      className={cx(styles.panel, {
        [styles.reverse]: overflows,
      })}
    >
      <div className={styles.title}>Blocks</div>
      <ul>
        {SupportedNodeTypes.map((type, index) => {
          const selected = selectdItemIndex === index;

          return (
            <li
              key={type.value}
              className={cx({
                [styles.selected]: selected,
              })}
              onClick={() => selectItem(type.value)}
            >
              {type.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
