import React from 'react';
import ReactShow from 'react-show';
import styled from 'styled-components';
import ExpandIcon from 'react-icons/lib/md/keyboard-arrow-down';
import {inject, observer} from 'mobx-react';

import File from './File';

const ChildContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  ${({ disabled }) =>
  disabled &&
  `
    pointer-events: none;
    &:after {
      content: "${disabled || ''}";
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `};
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  vertical-align: middle;
  height: 2.5rem;
  margin: 0;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 0.875rem;
  margin: 0;
  font-weight: 400;
`;

const ExpandIconContainer = styled(ExpandIcon)`
  transition: 0.3s ease all;
  font-size: 1rem;
  margin-right: 0.5rem;
  transform: rotateZ(${props => (props.open ? 0 : -90)}deg);
`;

const Actions = styled.div`
  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

class Files extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.open !== this.state.open ||
      nextProps.disabled !== this.props.disabled ||
      this.props.children !== nextProps.children
    );
  }

  toggle = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const { store, title, keepState, disabled, actions } = this.props;
    const { open } = this.state;

    const {files} = store;

    return (
      <div>
        {
          files.map(file => {
            return <File key={file.name} file={file} depth={0}/>
          })
        }
      </div>
    )
  }
}

export default inject('store')(observer(Files));