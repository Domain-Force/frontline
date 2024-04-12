import React, { useRef, useState } from 'react';

function CodeBlock({ children }) {
	const codeRef = useRef();
	const [buttonLabel, setButtonLabel] = useState('Copy');

	const copyToClipboard = () => {
		if (codeRef.current) {
			navigator.clipboard.writeText(codeRef.current.innerText)
			.then(() => {
				setButtonLabel('Copied!');
				setTimeout(() => setButtonLabel('Copy'), 1000);
			})
			.catch((error) => {
				alert('Copy failed');
			});
		}
	};
	return (
	<div className='code-block'>
      <pre ref={codeRef}>
        <code>{children}</code>
      </pre>
      <button className='copy-button' onClick={copyToClipboard}>{buttonLabel}</button>
    </div>
	);
}


export default CodeBlock;
