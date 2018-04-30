import React from 'react';
import styled from 'styled-components';

import FileIcon from './Icon';

const TitleContainer = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
`;

const getContainerStyles = props => {
  const {theme} = props;
  const color =
    props.color ||
    (props.alternative
      ? theme.primary
      : theme.templateColor || theme.secondary);
  let styles = `
    position: relative;
    display: flex;
    font-size: 14px;
    padding: 0.4rem;
    padding-left: ${
    props.depth != null
      ? `calc(${props.depth + 1}rem - 2px)`
      : 'calc(1rem - 2px)'
    };
    padding-right: 3rem;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-weight: 400;
    min-width: 100px;
    border-left: 2px solid transparent;
    cursor: pointer;
    user-select: none;
    &:hover {
      ${
    props.active || props.editing
      ? ''
      : `
        background-color: rgba(81, 194, 143, 0.2);
        color: #fff;
        border-color: #fff;
      `
    }
      > div {
        opacity: 1 !important;
      }
    }
  `;

  if (props.editing) {
    styles += `
      color: #fff;
      background-color: #000;
    `;

    if (props.nameValidationError) {
      styles += `
        border-color: ${theme.red()} !important;
        background-color: ${theme.redBackground.clearer(0.4)()} !important;
      `;
    }
  }

  if (props.active) {
    styles += `
      color: ${theme.white()} !important;
      border-color: ${color()} !important;
      background-color: ${color.lighten(0.1).clearer(0.8)()} !important;
    `;
  }

  if (props.rightColors) {
    styles += `
      border-right: 2px solid ${props.rightColors[0]};
    `;
  }

  return styles;
};

const EntryContainer = styled.span`
  ${props => getContainerStyles(props)};
`;

const Opener = styled.div`
  height: ${props => (props.open ? '100%' : '0px')};
  overflow: hidden;
`;

class File extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  getType(file) {
    if (file.children.length) {
      if (this.state.open) {
        return 'directory-open';
      }
      return 'directory';
    }
    return file.name.split('.').pop();
  }

  toggleOpen = () => this.setState({open: !this.state.open});

  render() {
    let {file, depth} = this.props;
    return (
      <div>
        <EntryContainer depth={depth} onClick={this.toggleOpen}>
          <FileIcon type={this.getType(file)}/>
          <TitleContainer>{file.name}</TitleContainer>
        </EntryContainer>

        <Opener open={this.state.open}>
          {
            file.children.length ?
              file.children.map(child => {
                return <File key={child.name} file={child} depth={depth + 1}/>
              })
              :
              null
          }
        </Opener>
      </div>
    )
  }

}

export default File;