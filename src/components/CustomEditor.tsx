import { EditorState, convertToRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { EditorProps } from 'react-draft-wysiwyg'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Editor Component 가 받을 타입 지정
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
})

const CustomEditor = () => {
	// EditorState.createEmpty() 로 초기값 설정
  	const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

  	const onEditorStateChange = (editorState: EditorState) => {
      setEditorState(editorState)
    }
    
	return (
		<Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName" 
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="글을 쓰시오."
          // toolbar={{
          //   options: ['inline', 'list', 'textAlign', 'link'], // 원하는 옵션 선택
          // }}
          localization={{locale: 'ko',}}
      	/>
    )
}

export default CustomEditor
