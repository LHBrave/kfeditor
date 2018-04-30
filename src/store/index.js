import { Module } from '@cerebral/mobx-state-tree';
import { types } from 'mobx-state-tree';

const file = types.model({
  name: types.string,
  type: types.string,
  children: types.array(types.late(() => file))
});

export default Module({
  model: {
    name: types.string,
    files: types.array(file)
  },
  state: {
    name: '',
    files: [
      {
        name: 'summary.md',
        type: 'file',
        children: []
      }, {
        name: 'lessons',
        type: 'dir',
        children: [{
            name: 'lesson1.md',
            type: 'file',
            children: []
          }, {
            name: 'lesson2.md',
            type: 'file',
            children: []
          }
        ]
      }
    ]
  }
});