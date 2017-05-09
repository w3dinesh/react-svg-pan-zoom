import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Remarkable from 'remarkable';
import Readme from '../../README.md';

let stories = storiesOf('<ReactSVGPanZoom' + '>', module);

let md = new Remarkable();
let text = Readme
  .replace(/<!-- START_NO_WEB -->[\w\W]*<!-- END_NO_WEB -->/, '')
  .replace(/\.\//g, 'https://github.com/chrvadala/react-svg-pan-zoom/tree/master/');

let html = md.render(text)
  .replace(/<a/g, '<a target="_blank" ');

stories
  .add('Welcome', () => (
    <div style={{background: "#fff", padding: "1rem 2rem"}}>
      <div dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  ))


