import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import CheckList from "@editorjs/checklist";
export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+H",
  },
  paragraph: { class: Paragraph, inlineToolbar: true },
  checkList: {
    class: CheckList,
    inlineToolbar: true,
  },
};
