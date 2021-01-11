import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import { options } from '../lib/sanity'
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent projectId={options.projectId} dataset={options.dataset} blocks={content} className={markdownStyles.markdown} />
    </div>
  )
}
