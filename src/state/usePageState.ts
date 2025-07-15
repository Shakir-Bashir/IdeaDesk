import { title } from "process";
import { type NodeData, type NodeType, type Page } from "../utils/types";

import { useImmer } from "use-immer";
import { Cover } from "../Page/Cover";

export const usePageState = (initialState: Page) => {
  const [page, setPage] = useImmer<Page>(initialState);

  const addNode = (node: NodeData, index: number) => {
    setPage((draft) => {
      draft.nodes.splice(index, 0, node);
    });
  };

  const removeNodeByIndex = (nodeIndex: number) => {
    setPage((draft) => draft.nodes.splice(nodeIndex, 1));
  };

  const changeNodeValue = (nodeIndex: number, value: string) => {
    setPage((draft) => {
      draft.nodes[nodeIndex].value = value;
    });
  };

  const changeNodeType = (nodeIndex: number, type: NodeType) => {
    setPage((draft) => {
      draft.nodes[nodeIndex].type = type;
      draft.nodes[nodeIndex].type = "";
    });
  };

  const setNodes = (nodes: NodeData[]) => {
    setPage((draft) => {
      draft.nodes = nodes;
    });
  };

  const setTitle = (title: string) => {
    setPage((draft) => {
      draft.title = title;
    });
  };

  const setCoverImage = (coverImage: string) => {
    setPage((draft) => {
      draft.title = coverImage;
    });
  };

  return {
    nodes: page.nodes,
    title: page.title,
    Cover: page.cover,
    changeNodeType,
    changeNodeValue,
    addNode,
    removeNodeByIndex,
    setTitle,
    setCoverImage,
    setNodes,
  };
};
