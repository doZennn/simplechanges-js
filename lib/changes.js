import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const changesDir = path.join(process.cwd(), 'changes');

export function getChangeDates() {
  return fs.readdirSync(changesDir);
}

export function getChange(date) {
  const dateFilename = date.replace(/:/g, '_');
  const fullPath = path.join(changesDir, dateFilename);
  const { data } = matter.read(fullPath, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    },
  });

  return data;
}

export function getChanges() {
  const changes = getChangeDates()
    .map((date) => getChange(date))
    .sort((a, b) => {
      if (new Date(a.time) < new Date(b.time)) {
        return 1;
      }
      return -1;
    });
  return changes;
}
