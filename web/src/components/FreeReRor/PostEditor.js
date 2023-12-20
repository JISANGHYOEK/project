// import { useRef, useCallback } from "react";
// import { createReactEditorJS } from "react-editor-js";
// import { EDITOR_JS_TOOLS } from "./tools";

// function PostEditor({ defaultValue, onSave }) {
//   const editorInstance = useRef(null);
//   const ReactEditorJS = createReactEditorJS();

//   const handleInitialize = useCallback((instance) => {
//     editorInstance.current = instance;
//   }, []);

//   const handleSave = useCallback(async () => {
//     const editorData =
//       await editorInstance.current.dangerouslyLowLevelInstance?.save();
//     onSave(editorData);
//   }, [onSave]);

//   return (
//     <div>
//       <ReactEditorJS
//         onInitialize={handleInitialize}
//         defaultValue={defaultValue}
//         tools={EDITOR_JS_TOOLS}
//       />
//       <button onClick={handleSave()}>저장</button>
//     </div>
//   );
// }

// export default PostEditor;
