import React from 'react';
import styled from 'styled-components';

import jsSvg from 'icons/js.svg';
import tsSvg from 'icons/ts.svg';
import cssSvg from 'icons/css.svg';
import reactSvg from 'icons/react.svg';
import folderSvg from 'icons/folder.svg';
import folderOpenSvg from 'icons/folder-open.svg';
import jsonSvg from 'icons/json.svg';
import yarnSvg from 'icons/yarn.svg';
import markdownSvg from 'icons/markdown.svg';
import faviconSvg from 'icons/favicon.svg';
import htmlSvg from 'icons/html.svg';
import npmSvg from 'icons/npm.svg';
import vueSvg from 'icons/vue.svg';
import fileSvg from 'icons/file.svg';
import svgSvg from 'icons/svg.svg';
import imageSvg from 'icons/image.svg';
import prettierSvg from 'icons/prettier.svg';
import codesandboxSvg from 'icons/codesandbox.svg';
import babelSvg from 'icons/babel.svg';
import sassSvg from 'icons/sass.svg';

const icons = {
  directory: folderSvg,
  'directory-open': folderOpenSvg,
  react: reactSvg,
  css: cssSvg,
  json: jsonSvg,
  yarn: yarnSvg,
  md: markdownSvg,
  favicon: faviconSvg,
  html: htmlSvg,
  npm: npmSvg,
  vue: vueSvg,
  js: jsSvg,
  ts: tsSvg,
  svg: svgSvg,
  image: imageSvg,
  prettier: prettierSvg,
  codesandbox: codesandboxSvg,
  babel: babelSvg,
  sass: sassSvg,
};

function getIconSvg(type) {
  return icons[type] || fileSvg;
}

const SVGIcon = styled.span`
  background-image: url(${props => getIconSvg(props.type)});
  background-size: ${props => props.width}px;
  background-position: 0;
  background-repeat: no-repeat;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  vertical-align: top;
  flex-shrink: 0;
`;


class Icon extends React.Component {
  render() {
    return (
      <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <SVGIcon width={16} height={16} type={this.props.type}/>
      </div>
    )
  }
}

export default Icon;