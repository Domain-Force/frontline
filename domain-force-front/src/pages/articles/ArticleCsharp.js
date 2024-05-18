import React, {useState} from 'react';
import ArticleModal from '../../components/ArticleModal';

function ArticleCsharp(props){
    const { color } = props;
    const [{currentModal}, setModalOpen] = useState({currentModal: null});
    const openModal = (modalName) => setModalOpen({currentModal: modalName});
    const closeModal = () => setModalOpen({currentModal:null});

    return (
        <div className='cards-container'>
            <div className="article-heading-background" style={{backgroundColor: color}}>
                <p className="article-heading">C# (octothorpe)</p>
            </div>
            <br/>
            <p className="article-section">overview</p>
        		<p className="article-body">
                    C# is a powerful language supported by one of the biggest dogs in the kennel. if you're using windows there are many applications running on your system that use it.
                </p>
            <p className="article-body">
            </p>
            <p className="article-section">disclaimer</p>
            <p className="article-body">
                if you spend not very much time on the internet, you will find that people become very opinionated on which languages are the best and which ones you should learn 'first'.
                the reality is that each language (even those designed as general purpose programming languages) have their strengths and weaknesses. do your research and find what language
                works well for the applications you're most interested in making and dive into it - time being productive means time practicing the fundamentals. those always stay with you.
            </p>
            <div className="article-section-background" style={{backgroundColor: "#9CD000"}}>
			    <p className="article-section">compilation (of code, not memes.)</p>
            </div>
            <p className="article-section">well, maybe memes, actually.</p>
            <p className="article-body">
                in a video of that nature, clips of the humorous variety are <em>compiled</em> into a digestable format for you to watch all at once in order in your bed 
                while picking potato chips off your chest (we know, it's okay.) 
            </p>
            <p className="article-body">
                similarly, code you write in C# is <em>compiled</em> into a digestable format for the .NET framework to execute instructions all at once in order in its bed while picking potato
                chips off its chest.
            </p>
            <p className="article-section">.NET? what's that?</p>
            <p className="article-body">
                ...is what you should be asking. code doesn't exist in a vacuum. C# has an ecosystem of digital infrastructure that allows you to do more than just make a pretty file in your text editor.
                that is .NET. it runs the executable files produced after compilation, it gives you the power to manipulate files, windows, connections, all sorts of things! it is the backbone of C# that 
                microsoft has built over the years that transformed C# into a modern powerhouse of a tool.
            </p>
            <div className="article-section-background" style={{backgroundColor: "#A2A0F8"}}>
			<p className="article-section">what it do?</p>
            </div>
			<p className="article-section">game much?</p>
            <p className="article-body">
                yup, C# is one of those fun languages that you can program video games with - usually in conjunction with a <button className="button-like-text" onClick={() => openModal('game_engine')}>game engine</button> if
                you want to skip a few thousand steps. they typically integrate with <a href="https://visualstudio.microsoft.com/">visual studio</a>, 
                an <button className="button-like-text" onClick={() => openModal('ide')}>IDE</button>. on the same side of the coin, you can use C# and its 
                many <button className="button-like-text" onClick={() => openModal('libraries')}>libraries</button> for physics simulations and virtual reality.
            </p>
			<p className="article-section">that's a lot of links, my guy.</p>
            <p className="article-body">
                i got a little excited there, sorry. anyway, enough of me yapping. go find a tutorial and make something if this all sounds interesting to you! but remember: learning comes from figuring things out.
                follow a guide on the basics and take it from there, and remember to have fun!
            </p>

            {currentModal === 'game_engine' &&(
            <ArticleModal isOpen={true} onClose={closeModal}>
                <div className="article-heading-background" style={{backgroundColor: "#9CF2C9"}}>
				<p className="modal-heading">game engines utilizing C#</p>
                </div>
                <p className="modal-body">
                    <ul>
                        <li>unity</li>
                        <li>godot</li>
                        <li>cryEngine</li>
                        <li>monoGame</li>
                        <li>...and more!</li>
                    </ul>
                </p>    
            </ArticleModal>
            )}
            {currentModal === 'ide' &&(
                <ArticleModal isOpen={true} onClose={closeModal}>
                <div className="article-heading-background" style={{backgroundColor: "#FF9C9C"}}>
                <p className="modal-heading">IDE</p>
                </div>
                <p className="modal-body">
                    IDE is short for <em>integrated development environment.</em> it's a fully kitted text editor with all the bells and whistles and black market health supplements you would need. 
                    it can include things like a compiler, profiling tools, integration with version control, and so much more.
                </p>    
            </ArticleModal>
            )}
            {currentModal === 'libraries' &&(
            <ArticleModal isOpen={true} onClose={closeModal}>
                <div className="article-heading-background" style={{backgroundColor: "#C3C9D2"}}>
                <p className="modal-heading">libraries</p>
                </div>
                <p className="modal-body">
                    for now, just think of libraries as extra tools you can add to your project to let you do more cool stuff. for example, you can import a libary that does complex math for you. in C# 
                    world, they are typically packaged as files with the .dll extension that your program will reference. you can even make your own for others to use!
                </p>    
            </ArticleModal>
            )}
        </div>
    );
};

export default ArticleCsharp;