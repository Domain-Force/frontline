import React from 'react';
import CodeBlock from '../../components/CodeBlock';

function ArticleOdooComputeField(props) {
    const { color } = props;

    return (
        <div className='cards-container'>
            <div className="article-heading-background" style={{ backgroundColor: color }}>
                <p className="article-heading">odoo compute (compooter)</p>
            </div>
            <br />
            <p className="article-section">overview</p>
            <p className="article-body">
				to really dumb it down for everyone. computed fields basically run logic at certain times, designated in the code, and it sets values for you on specified fields; effectively automating the field for you.
            </p>

            <p className="article-section">disclaimer</p>
            <p className="article-body">
				we're diving into how computes work in odoo, specifically decorators, odoo standard, etc. this assumes you know how to make basic fields in odoo	
            </p>
            <p className="article-body"><b>
				some parts of this was written with GPT b/c i'm lazy and just want to help you learn without running myself ragged
            </b></p>

            <div className="article-section-background" style={{ backgroundColor: "#c7639a" }}>
                <p className="article-section">what's the deal with compute fields</p>
            </div>
            <p className="article-body">
				computes are used for things in a business that ALWAYS get calculated on some set parameters
            </p>

            <p className="article-body">
				how they work is that, by default these fields don't exist on the database, aka they are not stored. they are always tied to a function, that's how you can automate it. they usually depend on other fields to trigger them to recompute
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#769c92" }}>
                <p className="article-section">lets take a gander at some code</p>
            </div>
            <p className="article-body">
                a compute field needs two things: a function and some dependencies.
		dependencies, are other fields on the same model, like sale.order.
            </p>
			<p className="article-body">
				if a dependency is ever modified/changed by either the user or by another function, then the compute function is rerun and refreshing the page will reflect the new value
			</p>
			<p className="article-body">
				before looking at the code keep in mind that computes can be called on any field type .Float, .Integer, .Char, etc. it's really just a function argument that references another function
			</p>
			<p className="article-body">
				if you need to make sure that your field is avialble in the database, make sure to set the store argument to True, otherwise if it's a compute field it defaults to false
			</p>
			<p className="article-body">
				computes can also run on list views, and if its present on the view 'self' will have A LOT of records, so it's always best do to a for loop on <em>self</em>
			</p>

            <CodeBlock>
                {`from odoo import models, fields, api

class SaleOrder(models.Model):
	_inherit = 'sale.order'

	total_discount = fields.Float(compute="_compute_total_discount", store=True)
	ur_mom_count = fields.Integer(string="Your Mom")

	@api.depends('order_line.discount', 'order_line.price_subtotal', 'ur_mom_count')
	def _compute_total_discount(self):
		for order in self:
			order.total_discount = sum(
				(line.price_subtotal * (line.discount / 100)) for line in order.order_line
			)
			if ur_mom_count > 1:
				print("I love birria tacos more than quesadillas")
`}
            </CodeBlock>

            <p className="article-body">
                every time the discount or subtotal get changed/modified the order's total discount is updated, and if anyone puts a value where 'ur_mom_count' is greater than 1 we'll find my deepest darkest secret leaked into the odoo logs 🤤
            </p>

            <p className="article-section">stored vs. non-stored compute fields</p>
            <p className="article-body">
                remember what i told you earlier? computed fields by default are not stored in the database. they recalculate on when you access them but sometimes, you want to keep that value saved for whatever reason, like putting it in a report, in that case, you add <code>store=True</code>.
            </p>

            <p className="article-body">
                ⚠️ WARNING BRUDDA: making a compute field stored means odoo will recalculate it only when dependencies change, not every time you access it.
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#74cc7f" }}>
                <p className="article-section">to edit or not to edit, that is the <em>edit</em>✒️</p>
            </div>

            <p className="article-body">
				just like in <strong>ratatouille</strong>, <em>'anyone can cook'</em>, so can <em>'any computed field, be edited'</em>. art imitates life, am i right?
            </p>

            <p className="article-body">
                in those cases, we add an <strong><code>inverse</code></strong> function. this lets us define what happens when someone chooses to mess with our field
            </p>

            <CodeBlock>
                {`class SaleOrder(models.Model):
    _inherit = 'sale.order'

    discount_rate = fields.Float(compute="_compute_discount", inverse="_inverse_discount")

    @api.depends('total_amount')
    def _compute_discount(self):
        for record in self:
            record.discount_rate = record.total_amount * 0.1  # 10% discount

    def _inverse_discount(self):
        for record in self:
            record.total_amount = record.discount_rate / 0.1  # Reverse calculation
`}
            </CodeBlock>

            <p className="article-body">
                 we expect the compute to run whenever we access the field, aka load a view where that field is populated, and if the user edits the discount, the <code>inverse</code> function updates the total amount accordingly
            </p>

            <p className="article-body">
				honestly, i wonder why they call it inverse, b/c its not intuitive at all. i just learned about inverse like a month ago
            </p>

            <div className="article-section-background" style={{ backgroundColor: "#d9b6c9" }}>
				<p className="article-section">should i use compute fields?</p>
			</div>
			<span className="subtext"> idk man it's up to you 🤷🏻‍♂️</span>

            <p className="article-body">
                ✅ use compute fields when:
            </p>
            <ul className="article-body">
                <li>you need dynamically calculated values</li>
                <li>the field depends on other fields</li>
                <li>you want to avoid redundant data storage</li>
            </ul>

            <p className="article-body">
                ❌ avoid compute fields when:
            </p>
            <ul className="article-body">
                <li>the value rarely changes (just use a regular field).</li>
                <li>you need to filter or search by the field often (unless <code>store=True</code>).</li>
            </ul>

            <p className="article-body">
				personally i dont like using them all the time, because just like anything else they're just a tool and every tool is made for a certain situation. so all this to say, be like <strong>bob, the builder</strong> when you're programming, and remember <strong><em>anyone can cook</em></strong>
            </p>
        </div>
    );
}

export default ArticleOdooComputeField;
