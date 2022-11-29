<template>
  <md-editor
    v-model="text"
    :theme="usedTheme === 'dark' ? 'dark' : 'light'"
    :toolbars-exclude="toolbars"
    language="custom"
    :sanitize="sanitize"
    no-katex
    no-mermaid
  />
</template>

<script lang="ts" setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import sanitizeHtml from 'sanitize-html'

import { ITheme } from '@/utils/theme'

const usedTheme = useState<ITheme>('theme.current')

const toolbars: any = [
  'github',
  'catalog',
  'preview',
  'htmlPreview',
  'mermaid',
  'katex',
]

const sanitize = (html: string) => {
  return sanitizeHtml(html)
}

const text = ref('Hello Editor!')

MdEditor.config({
  editorConfig: {
    languageUserDefined: {
      custom: {
        toolbarTips: {
          bold: 'bold',
          underline: 'underline',
          italic: 'italic',
          strikeThrough: 'strikeThrough',
          title: 'title',
          sub: 'subscript',
          sup: 'superscript',
          quote: 'quote',
          unorderedList: 'unordered list',
          orderedList: 'ordered list',
          task: 'task list',
          codeRow: 'inline code',
          code: 'block-level code',
          link: 'link',
          image: 'image',
          table: 'table',
          mermaid: 'mermaid',
          katex: 'formula',
          revoke: 'revoke',
          next: 'undo revoke',
          save: 'save',
          prettier: 'prettier',
          pageFullscreen: 'fullscreen in page',
          fullscreen: 'fullscreen',
          preview: 'preview',
          htmlPreview: 'html preview',
          catalog: 'catalog',
          github: 'source code',
        },
        titleItem: {
          h1: 'Heading 1',
          h2: 'Heading 2',
          h3: 'Heading 3',
          h4: 'Heading 4',
          h5: 'Heading 5',
          h6: 'Heading 6',
        },
        imgTitleItem: {
          link: 'Add Image Link',
          upload: 'Upload Image',
          clip2upload: 'Clip Upload',
        },
        linkModalTips: {
          title: 'Add ',
          descLable: 'Description:',
          descLablePlaceHolder: 'Enter a description...',
          urlLable: 'Link:',
          urlLablePlaceHolder: 'Enter a link...',
          buttonOK: 'OK',
        },
        clipModalTips: {
          title: 'Crop Image',
          buttonUpload: 'Upload',
        },
        copyCode: {
          text: 'Copy',
          successTips: 'Copied!',
          failTips: 'Copy Error!',
        },
        mermaid: {
          flow: 'flow',
          sequence: 'sequence',
          gantt: 'gantt',
          class: 'class',
          state: 'state',
          pie: 'pie',
          relationship: 'relationship',
          journey: 'journey',
        },
        katex: {
          inline: 'inline',
          block: 'block',
        },
        footer: {
          markdownTotal: 'Word Count',
          scrollAuto: 'Auto Scroll',
        },
      },
    },
  },
})
</script>
