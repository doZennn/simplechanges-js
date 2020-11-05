import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import ChangeListItem from './ChangeListItem';

export default function ChangeList({ changes }) {
  return (
    <>
      <div className="list">
        {changes.map((list, i) => (
          <Fragment key={i}>
            {list.name && <h2>{list.name}</h2>}
            {list.summary && <ReactMarkdown plugins={[gfm]}>{list.summary}</ReactMarkdown>}
            <ul className="change-item">
              {list.new && list.new.map((item) => <ChangeListItem key={item} content={item} type="new" />)}
              {list.update && list.update.map((item) => <ChangeListItem key={item} content={item} type="update" />)}
              {list.fix && list.fix.map((item) => <ChangeListItem key={item} content={item} type="fix" />)}
              {list.remove && list.remove.map((item) => <ChangeListItem key={item} content={item} type="remove" />)}
            </ul>
          </Fragment>
        ))}
      </div>
    </>
  );
}
