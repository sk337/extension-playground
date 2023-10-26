import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('container'), {
	value: '// put javascript code here',
	language: 'javascript'
});