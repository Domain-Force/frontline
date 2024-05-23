import React, {useState} from 'react';
import Helmet from 'react-helmet';
import ArticleModal from '../../components/ArticleModal';
import CodeBlock from '../../components/CodeBlock';


function ArticleGit(props) {
	const { color } = props;
	const [{currentModal}, setModalOpen] = useState({currentModal: null});

	const openModal = (modalName) => setModalOpen({currentModal: modalName});
	const closeModal = () => setModalOpen({currentModal: null});
	return (
	<div className='cards-container'>
		<Helmet>
			<title>git (your butt in here) | Domain-Force</title>
			<meta name="description" content="Learn how to use Git for version control with Domain Force. Track code changes, collaborate with others, and enhance your development workflow. Ideal for developers and teams using GitHub and open source projects." />
			<meta name="keywords" content="git, git version control, git tutorial, git for begineers, how to use git, code collaboration tools, git useful commands, git commands, git for software development, github, version control, code history, code collaboration, code review, issue tracking, continuous integration, continuous development, git open source contributions, git documentation, git integration, git Domain-Force, git domain force, git Domain Force" />
		</Helmet>

		<div className="article-heading-background" style={{backgroundColor: color}}>
			<p className="article-heading" >git (your butt in here)</p>
		</div>
		<br/>


		<div className="article-section">overview</div>
		<p className="article-body">
			git, is a software that helps you keep track of the version history of your code base. tracking who changed what code, added code, removed code, etc., and it’s incredibly useful to be able to collaborate with your sweaty palmed friends.
		</p>


		<div className="article-section">disclaimer</div>
		<p className="article-body">
			i can’t teach you everything about git and all the git commands but i can give you a semi-decent overview of what it’s used for and the most used commands i use when building/updating domain-force
     	</p>


		<div className="article-section-background" style={{backgroundColor: "#D8BFD8"}}>
			<p className="article-section">what's git? (sorry long analogy)</p>
		</div>

		<p className="article-body">
			i realize some of us are complete noobs and may need some way to conceptualize this as i explain it, don’t worry i had trouble too. let’s imagine you’re working on a book with a friend, and both of you want to work simultaneously without getting in each other's way. 
		</p>
		<p className="article-body">
			you guys decide to work on different chapters, and in git this would be different ‘branches’. let’s also say you’re writing this on paper, so every time you have to write something it’s known as a ‘commit’.
		</p>
		<p className="article-body">
			the trash can in the corner of your room with all the pieces of paper full of your previous revisions that you scrapped, re-written, added, or removed; that’s the commit history. this is how you’re able to look back at what was done before so you can realize how you got to where you are now.
		</p>
		<p className="article-body">
			when you and your friend decide to put the chapters you’ve finished together on a table, you can think of this as a ‘pull request’. we’re requesting that our editor reviews what we’ve written and gives us feedback, in git this is the equivalent of a code review. 
		</p>
		<p className="article-body">
			now after your chapter has been vetted, the editor will add it to the final revision, the book. this is known as the ‘main’ branch, ‘production’ branch, and formerly it was also known as ‘master’ branch.
		</p>
		<p className="article-body">
			rinse and repeat, until all the chapters are done and BOOM. you’ve finished writing your book, or in real life you would have finished your first iteration of the project. this whole project can stored online as a <button className="button-like-text" onClick={() => openModal('repository')}>respository/repo</button>.
		</p>


		<div className="article-section-background" style={{backgroundColor: "#000000", color: "#FFFFFF"}}>
			<p className="article-section">what's github?</p>
		</div>
		<p className="article-body">
			github, is a website that stores git repositories for MILLIONS of people. going with our analogy from the last section, you can think of it as a library of books!
		</p>
		<p className="article-body">
			github gives everyone a place to go to, if they wanted to download your code, review your code, submit a report if a bug was found, etc. 
		</p>


		<div className="article-section-background" style={{backgroundColor: "#ABDEE6"}}>
			<p className="article-section">why use git?</p>
		</div>
		<p className="article-body">
			<i>to git your life together, duh!</i>
		</p>
		<p className="article-body">
			there are tons of reasons why we use git, some of the reasons were mentioned previously; collaboration, code review, and issue tracking. i’m not going to go in-depth on the following but you should at least be familiar with some of the reasons:
		</p>
		<p className="article-body">
			<ul>
				<li>continuous integration/continous development</li>
				<li>open source contributions</li>
				<li>documentation</li>
				<li>integration</li>
			</ul>
		</p>


		<div className="article-section-background" style={{backgroundColor: "#FFCAAF"}}>
			<p className="article-section">popular commands to help you get by</p>
		</div>
		<p className="article-body">
			gamer, i’m going to be real with you there are TONS of git commands that i don’t know, but i’m going to walk you through what i use regularly to update this website and what i use in work in my day-to-day. (i will not be going over flags either, you check out more <a href="https://git-scm.com/docs">here</a>)
		</p>
		<p className="article-body">
			<ul>
				<li>
					<i>git add .</i>
					<ul>
						<li>
							<b>scenario:</b> you’ve made some changes in your repository, and all of the changes you’ve made need to go
						</li>
						<li>

							<b><i>what it does:</i></b> it <button className="button-like-text" onClick={() => openModal('stages')}>stages</button> all of the changes you’ve made to be committed
						</li>
					</ul>
				</li>
				<li>
					<i>git status</i>
					<ul>
						<li>
							<b>scenario:</b> you completely forgot what changes you made, or you’re not sure if you even made changes. You need to be able to check somehow
						</li>
						<li>
							<b><i>what it does:</i></b> it tells you what files you’ve changed, what files you’ve added, and what files you’ve deleted
						</li>
					</ul>
				</li>
				<li>
					<i>git branch</i>
					<ul>
						<li>
							<b>scenario:</b> often after i change branches, i need to do a sanity check to see where i am. last thing you want is to write out all of your changes and apply them all to the wrong place 🙃. git branch, will tell you what branch you’re currently on
						</li>
						<li>
							<b><i>what it does:</i></b> it tells you what branch you’re currently on 
						</li>
					</ul>
				</li>
				<li>
					<i>git checkout insert_branch_name</i>
					<ul>
						<li>
							<b>scenario:</b> thank buddha, you ran git branch, noticed you’re not where you should be, and you need to switch branches before you start coding chicken scratch
						</li>
						<li>
							<b><i>what it does:</i></b> it switches you to the branch you want to be on
						</li>
					</ul>
				</li>
				<li>
					<i>git stash</i>
					<ul>
						<li>
							<b>scenario:</b> alright, you’ve made the rookie mistake of not checking your branch before programming everything. now you’re 100 lines of code deep and you have to checkout to another branch but you don’t want to lose your code. good thing you haven’t used ‘git add .’ yet!
						</li>
						<li>
							<b><i>what it does:</i></b> it saves your changes to a ‘stash’ so you can checkout to another branch without losing your changes
						</li>
					</ul>
				</li>
				<li>
					<i>git stash apply</i>
					<ul>
						<li>
							<b>scenario:</b> epic, you’ve now checked out to the correct branch after stashing your changes. now you have to get those changes back!
						</li>
						<li>
							<b><i>what it does:</i></b> it applies the changes you’ve stashed back to your branch
						</li>
					</ul>
				</li>
				<li>
					<i>git commit -m "[ADD] Your mom"</i>
					<ul>
						<li>
							<b>scenario:</b> you’re ready to start solidifying your changes to your branch, so after running <i>git add .</i> you need to ‘commit’ your changes
						</li>
						<li>
							<b><i>what it does:</i></b> it sort of applies your changes to your branch
						</li>
					</ul>
				</li>
				<li>
					<i>git push</i>
					<ul>
						<li>
							<b>scenario:</b> you’ve committed your changes to your branch locally, now you have to make it reflect the same thing online!
						</li>
						<li>
							<b><i>what it does:</i></b> it finalizes your changes to your branch, and makes it reflect online
						</li>
					</ul>
				</li>
				<li>
					<i>git pull</i>
					<ul>
						<li>
							<b>scenario:</b> you’re working on the same branch as somebody else and you’re not sure if that person has pushed some changes recently. you have to make sure your local matches what’s on github, or else you’re in for a world of hurt, known as <button className="button-like-text" onClick={() => openModal('debugging')}><i>git debugging</i></button>
						</li>
						<li>
							<b><i>what it does:</i></b> it makes sure your local branch matches what’s on github 
						</li>
					</ul>
				</li>
			</ul>
		</p>



		<div className="article-section-background" style={{backgroundColor: "#F3B0C3"}}>
			<p className="article-section">wrap up/review</p>
		</div>
		<p className="article-body">
			git and github has become a cult classic when it comes to version control in modern software development. It’s built on the grounds of being open source, versatile, and minimal to assist in keeping developers, well you know, worried about development.
		</p>

		<p className="article-body">
			for the complete noobs, i also figured i’d show you what my git command flow looks like in my terminal whenever i’m making an update to domain force:
			<ul>
				<li>
					<i>git branch</i>
					<ul>
						<li>
							i'm always on the 'main' branch, but i like to check to make sure
						</li>
					</ul>
				</li>
				<li>
					<i>git status</i>
					<ul>
						<li>
							i always forget if i made changes or not, so i like to check; if there's changes then i'll run <i>git stash</i>
						</li>
					</ul>
				</li>
				<li>
					<i>git pull</i>
					<ul>
						<li>
							even though no one else is supposed to be on the 'main' branch, there's always the doubt that someone pushed something
						</li>
					</ul>
				</li>
				<li>
					<i>**git stash apply**</i>
					<ul>
						<li>
							**only if i ran git stash, i'll apply my changes back**
						</li>
					</ul>
				</li>
				<li>
					<i>blah blah blah, i made some changes to the code</i>
				</li>
				<li>
					<i>git status</i>
					<ul>
						<li>
							making sure i double check that i'm hiting the right files
						</li>
					</ul>
				</li>
				<li>
					<i>git add .</i>
					<ul>
						<li>
							adding all of my changes to the commit
						</li>
					</ul>
				</li>
				<li>
					<i>git commit -m "[ADD] Your dad's code"</i>
					<ul>
						<li>
							committing my changes to the branch
						</li>
					</ul>
				</li>
				<li>
					<i>git branch</i>
					<ul>
						<li>
							because i'm paranoid, i like to check again
						</li>
					</ul>
				</li>
				<li>
					<i>git push</i>
					<ul>
						<li>
							deploying my changes to the 'main' branch
						</li>
					</ul>
				</li>
			</ul>
		</p>
		




		{currentModal === 'stages' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#FF6961"}}>
				<p className="modal-heading">stage? like theater?</p>
			</div>
			<p className="modal-body">
				<b>to stage</b> or <b>staging</b> one's changes is like preparing your changes to be committed. when you stage your changes, you're telling git that you want to include these changes in the next commit.
			</p>

			<div className="article-heading-background" style={{backgroundColor: "#E0F7FA"}}>
				<p className="modal-section">analogy</p>
			</div>
			<p className="modal-body">
				let's imagine you're an actor. the code on your computer (working directory) is the script, the stage is the dress rehearsal, and the commit is the final performance. when you stage your changes, you're preparing for the final performance.
			</p>
		</ArticleModal>
		)}


		{ currentModal === 'repository' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#E8F5E9"}}>
			    <p className="modal-heading">repository! not lavatory!</p>
			</div>
			<p>
				a <b><i>git repository</i></b> is a storage location for your project. it holds all the files, folders, and version history for your project.	
			</p>

			<div className="article-heading-background" style={{backgroundColor: "#FFEBEE"}}>
				<p className="modal-section">analogy</p>
			</div>
			<p className="modal-body">
				you can think of it as a digital journal. every change that's made, every file removed, line of code added, it's all recorded and you can look back at it whenever you want.
			</p>
		</ArticleModal>
		)}


		{ currentModal === 'debugging' && (
		<ArticleModal isOpen={true} onClose={closeModal}>
			<div className="article-heading-background" style={{backgroundColor: "#CBAACB"}}>
			    <p className="modal-heading">git debugging (lost in the sauce)</p>
			</div>
			<p>
				<b><i>git debugging</i></b>	really is ugly, and even if you know what you're doing it can be a pain. specifically this thing happens when you're working on the same branch as someone else and you're not sure if that person has pushed some changes recently
			</p>

			<div className="article-heading-background" style={{backgroundColor: "#FFB870"}}>
				<p className="modal-section">example</p>
			</div>
			<p className="modal-body">
				i pulled this straight from the git scm docs
				<CodeBlock>
					{
						`$ git blame -C -L 141,153 GITPackUpload.m
						\nf344f58d GITServerHandler.m (Scott 2009-01-04 141)
						\nf344f58d GITServerHandler.m (Scott 2009-01-04 142) - (void) gatherObjectShasFromC
						\nf344f58d GITServerHandler.m (Scott 2009-01-04 143) {
						\n70befddd GITServerHandler.m (Scott 2009-03-22 144) //NSLog(@"GATHER COMMI
						\nad11ac80 GITPackUpload.m    (Scott 2009-03-24 145)
						\nad11ac80 GITPackUpload.m    (Scott 2009-03-24 146) NSString *parentSha;
						\nad11ac80 GITPackUpload.m    (Scott 2009-03-24 147) GITCommit *commit = [g
						\nad11ac80 GITPackUpload.m    (Scott 2009-03-24 148)
						\nad11ac80 GITPackUpload.m    (Scott 2009-03-24 149) //NSLog(@"GATHER COMMI
						\nad11ac80 GITPackUpload.m    (Scott 2009-03-24 150)
						\n56ef2caf GITServerHandler.m (Scott 2009-01-05 151) if(commit) {
						\n56ef2caf GITServerHandler.m (Scott 2009-01-05 152)    [refDict setOb
						\n56ef2caf GITServerHandler.m (Scott 2009-01-05 153)`
					}
				</CodeBlock>
			</p>
		</ArticleModal>
		)}

	</div>
);
}

export default ArticleGit;
