import React from 'react';
import CodeBlock from '../../components/CodeBlock';

function ArticleOdooBasicFieldsI(props) {
    const { color } = props;

    return (
        <div className='cards-container'>
            <div className="article-heading-background" style={{ backgroundColor: color }}>
                <p className="article-heading">odoo basic fields (floats, ints & bools)</p>
            </div>

            <br />
            <p className="article-section">overview</p>
            <p className="article-body">
                let's get super basic, baby brudda/sistah. fields that are numbers and checkboxes are on our itinerary today! those beauties are <em>floats, integers, and bools</em>. 
                don't worry, it's not rocket science. but i do like rockets. actually maybe we can make a rocket 🤔... depends on your line of work. 
            </p>

            <p className="article-section">disclaimer</p>
            <p className="article-body">
                 
                i assume you know how to set up an odoo model. if not, check out odoo's docs or the domain-force article that isn't out yet 😊
            </p>
            <p className="article-body">
                <strong>this article was written partially with GPT, i just scrape out the monotonous stuff, and add some twang... maybe i did write this 🤷🏻‍♂️</strong>
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#f0ae86" }}>
                <p className="article-section">decimals are our friends: fields.Float</p>
            </div>
			<span className="subtext"> all my homies hate float point errors</span>
            <p className="article-body">
                floats are used to store decimal numbers in odoo. you might see them used for things like product weights, unit prices (without dollar signs), or any situation where you need fractions. 
                basically if you need 3.14159 for your personal pi day, use <em>fields.Float</em>.
            </p>
            <CodeBlock>
                {`from odoo import models, fields

class ProductTemplate(models.Model):
    _inherit = 'product.template'
    
    the_amount_of_fudge_i_give = fields.Float(
        string='Fudge(s) Given', 
        help='Who actually eats Fudge?', 
        default=23.0
    )
`}
            </CodeBlock>
            <p className="article-body">
                easy right? just define <strong>fields.Float</strong> and give it a name, a label, maybe a default, and you're good to go. 
                your next million dollar idea might revolve around decimals, just make sure if you need money fields to <b>not</b> use <em>fields.Float</em>
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#8cff8a" }}>
                <p className="article-section">mula mula: fields.Monetary</p>
            </div>
			<span className="subtext"> big mula babyyy 💸</span>
            <p className="article-body">
                if you're in desparate need for that currency, then consider getting a job, because it's rough out here in these dev streets 😮‍💨.
            </p>
            <p className="article-body">
				in half-seriousness, if you need something with a $ amount or whatever currency you have configured on Odoo you'll want to use <b><em>fields.Monetary</em></b>
            </p>
            <CodeBlock>
                {`class SaleOrder(models.Model):
    _inherit = 'sale.order'

    my_big_dolla = fields.Monetary(
        string='My Biggest Dollar', 
		currency_field='currency_id',
        help="Mr. Krab's, 1,000,000th dollar!",
		required=True,
        default=0.0
    )
`}
            </CodeBlock>
            <p className="article-body">
				if you noticed that extra function argument, currency_field, good for you, you get ✨nothing✨. JK good job 😊.
            </p>
            <p className="article-body">
				basically if you're going to use a monetary field <b>you better have a currency_id field in your model</b>, and if you don't... then maybe consult with GPT to make one, talk to your local dev, or wait till i post the article about relational fields!
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#c1bdac" }}>
                <p className="article-section">the homie: fields.Integer</p>
            </div>
            <p className="article-body">
                if you need a whole number, fully integer, an inty inter, then fields.Integer is what you need. use it for counting thangs, or keeping track of how many tacos you owe me for reading this article (unironically, i would like 12).
            </p>
            <CodeBlock>
                {`class SaleOrder(models.Model):
    _inherit = 'sale.order'

    taco_count = fields.Integer(
        string='Tacos Owed', 
        help='store your whole numbers here, ill keep track of those tacos',
		required=True,
        default=12
    )
`}
            </CodeBlock>
            <p className="article-body">
				helpful tip, don't pass a float to an integer field lest you want the wrath of Odoo to destroy you and your project
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#9faecc" }}>
                <p className="article-section">truth or dare: fields.Boolean</p>
            </div>
            <p className="article-body">
                booleans are basically <b>'yes or no'</b>, <b>'truth or dare'</b>, or if you're a nerd, <b>'True or False'</b>. for real though, you use them to track if something is true or false. which can be useful if you need conditional logic or conditional views, but that's  later on when we're both less ignorant 🧠
            </p>
            <CodeBlock>
                {`class ResPartner(models.Model):
    _inherit = 'res.partner'

    pineapple_on_pizza = fields.Boolean(
        string='Is this a sacrilegous pizza?',
        help='depends on how hungry you are brudda',
        default=True
    )
`}
            </CodeBlock>

            <div className="article-section-background" style={{ backgroundColor: "#b7d8d6" }}>
                <p className="article-section">why do we care, though???</p>
            </div>
            <p className="article-body">
                well, if you're building any non-trivial thinga-ma-bob, you'll definitely need these field types. 
                not everything is a char field (words/text), you know. sometimes you want to count (never), do math (joking), or just store a yes/no. 
            </p>
            <p className="article-body">
                these fields also impact how users can search, filter, and group in Odoo. for instance, a user might filter on all 'pineapple pizza loving' partners to send them an <b><em>inversed discount code</em></b>.
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#c5a2bf" }}>
                <p className="article-section">common gotchas</p>
            </div>
			<span className="subtext"> don't get caught out braddas & sistahs</span>

            <ul className="article-body">
                <li>
                    <strong>fields.Float precision:</strong> watch out for rounding issues if you're dealing with currency. Odoo has ways to handle currency rounding, so don't reinvent the wheel, use existing patterns.
                </li>
                <li>
                    <strong>fields.Monetary forgetting currency_id:</strong> many a developer sometimes forget about adding currency_id to a new/existing model if it doesn't already have it and take down production. (yes i'm talking about you fred)
                </li>
                <li>
                    <strong>fields.Integer limits:</strong> python can handle big ints, but you might not want to store insane values in normal business use. just keep it within reason... or don't 🤷🏻‍♂️
                </li>
                <li>
                    <strong>fields.Boolean default:</strong> a default can be True or False, so if you want it automatically checked, set <code>default=True</code>
                </li>
            </ul>

            <p className="article-body">
                in short, these fields are your bread without the butter or the knife to spread the butter. we'll learn about the butter and butter knife later. just make sure you learn these guys... 
                or not, but then you'd have a weird database with just char fields and that might be, you know, wickity-whack.
            </p>

        </div>
    );
}

export default ArticleOdooBasicFieldsI;
