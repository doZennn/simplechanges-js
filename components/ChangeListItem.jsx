import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function ChangeListItem({ content, type }) {
  return (
    <li>
      <div>
        <span className={`label ${type}`}>{type.toUpperCase()}</span>
      </div>
      <ReactMarkdown plugins={[gfm]}>{content}</ReactMarkdown>
    </li>
  );
}
