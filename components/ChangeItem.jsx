import { useState } from 'react';
import dayjs from 'dayjs';
import { GoMarkdown } from 'react-icons/go';
import ChangeList from './ChangeList';

export default function ChangeItem({ change, defaultCollapsed }) {
  const date = dayjs(change.time);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [customFormatting, setCustomFormatting] = useState(null);

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, null, `#${change.time}`);
    setCollapsed(false);
  };

  const discordMd = () => {
    const dateStr = date.format('DD/MM/YYYY');
    const text = [`**${dateStr}**`];
    text.push('');
    change.changes.forEach((list) => {
      if (list.name) text.push(`**${list.name}**`);
      if (list.summary) text.push(list.summary);
      if (list.new) list.new.forEach((item) => text.push(`- ${item}`));
      if (list.update) list.update.forEach((item) => text.push(`- ${item}`));
      if (list.fix) list.fix.forEach((item) => text.push(`- ${item}`));
      if (list.remove) list.remove.forEach((item) => text.push(`- ${item}`));
      text.push('');
    });
    text.push('@everyone');

    /*
      Messy transformation for Discord styled markdown.
      Turn into quote block, trim triple newlines
    */
    const discordFormatted = text.join('\n')
      .replace(/[\r\n]{3}/g, '\n\n')
      .split('\n')
      .map((x) => `> ${x}`)
      .join('\n');
    setCustomFormatting(discordFormatted);
  };

  return (
    <section
      id={change.time}
      className={`log ${collapsed ? 'collapsed' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="panel-left">
        <div className="day">{date.format('D')}</div>
        <div className="month">{date.format('MMM')}</div>
        <div className="year">{date.format('YYYY')}</div>
        <div className="buttons">
          <button
            title="Get Discord Styled Markdown"
            type="button"
            tabIndex={-1}
            onClick={discordMd}
          >
            <GoMarkdown />
          </button>
        </div>
      </div>
      <ChangeList changes={change.changes} customFormatting={customFormatting} />
    </section>
  );
}
