
### A Technical Proof

#### A published model of hypercatallaxy

tldr: Prove hypercatallaxy to yourself with a simulated economy here.

This chapter assumes you are familiar with the basics of hypercatallaxy. This chapter was originally a blog post on http://catallax.info.

The things we will focus on in this section are the ideas of demurrage or the decay fee and the idea of the prefered stock that is exchanged with each and every cash transaction in a hypercatallaxian economy.

#### INTRO

As a short review, if I buy a bottle of wine for $10, I get the wine and 10 ‘shares’ in the wine merchants account.  If that $10 sits in the merchants account for 1 year at a 12% decay rate, I will receive back $1.20.  If he spends the money, he gets 10 shares in someone elses account and I only get 12% of his $1.20.  This is recursive and cumulative so eventually I will see most of my cash back.

Many stop here and either don’t believe me or think I’m doing some funny math.  I’ll be the first to admit that I’m not great at the maths.  I’m trying to get better and I’m specifically looking for someone interested in mentoring me through the relevant bits.  What I am decent at is computer programming and building models, so in this article I’m going to publish a very basic model that will hopefully be intriguing enough to get some people to PAY ATTENTION and help me move the ball toward the goal.

The argument against capitalism that I put forward is that while it does a great job of rewarding capitalistic investment, and to an extent capitalistic banking, it does a poor job of leveraging the general economic buying and selling that goes on in the economy.  Investors seek value creation, but consumers are just interested in the ‘best deal’ irrespective of the producers potential future value creation.

For example, take two apples priced at $1.00 and $1.01.  Apple 1 is made on a farm that abuses laborers, abuses its soil, and is generally poorly run.  Apple 2 is made on a farm that uses sustainable methods and is just in general a ‘better’ apple farm.  It is clear that apple farm 1 will likely be out of business within the year, but the consumer doesn’t care.  They buy apple 1 because it is cheaper for the same commodity.  It would be better for everyone if you bought 2, but you aren’t going to.  You have no incentive too.

This is a problem and now I have the model to prove that it is a problem.  And it is a potentially huge problem.  If we can fix this problem we can drastically increase our GDP.

#### THE MODEL

Here are the assumptions of this model:

Some nodes are better than other nodes at extracting rent for a good(#1).

Some nodes are better than other nodes at noticing the potential for cash transferred to another node(#2).  In other words, I’m better than you at investing in wine makers because I was one for 10 years and you just buy wine at the store.

Standard capitalism just refreshes capital at nodes that succeed in #1, and nodes that use #2 to invest.  Hypercatallaxy uses all economic activity when refreshing nodes in #2.

My theory is that is that the more you refresh the nodes that are good at producing value and the nodes that are good at seeking value, you will have a more robust economy with much higher growth.

Nodes in #1 are refreshed by people buying and selling goods that they value.  If a node attracts revenue then it will have more resources to create value.

Nodes in #2 are refreshed in Hypercatallaxy by charging the decay fee in an account and passing it back to those that paid into the account in proportion to how much they paid into the account.

Therefore I take a set of node N1...9 and assign each node an Economic Rent production value and a p(Reason) value.

The pER is the rate at which that node produces Economic Rent on top of a sale.  So if someone is going to buy my good worth $1 and and my pER is 0.94, I will sell it for $1.94 (1 + pER) * amount.  In this way the rich get richer.  If you are good at producing economic rent you are going to make a lot of money.  I am not making a judgment about whether the economic rent is good economic rent or bad economic rent, just that it is charged.  I set these up in a natural distribution centered around n5.

The pReason value is the probability that a node will spend its money with a worthwhile node.  This is a nodes ‘investment sense.’  Some of us are better than others at looking at who has made something and being able to make some predictions about their future earning potential.  Some of us are Warren Buffet and some of us are Mr. Magoo.  In this model the reason is a straight line increasing as we increment n.  This is what we end up with:

|Node| pER| pReason
|----|----|----
|n0| 0.01| 0.00
|n1| 0.05| 0.10
|n2| 0.19| 0.20
|n3| 0.47| 0.30
|n4| 0.80| 0.40
|n5| 0.96| 0.50
|n6| 0.80| 0.60
|n7| 0.47| 0.70
|n8| 0.19| 0.80
|n9| 0.05| 0.90

n0 is dismal.  It can produce barely any rent and has no reason.  It will spend without prejudice.  n5 is a rockstar capitalist.  It can produce massive rents and it has reasonable reason.  n9 can’t produce much rent but almost always makes good decisions.  You are free to fork the code and change these up and/or hotwire them.  I felt like this gave me a good base to work with.

We are going to let our nodes participate in an economy for 300 months(25 years).  Each node will have to spend $50 a month on necessities or it will suffer a ‘poverty month’.  Poverty months are not fun.  In addition to the $50, nodes will spend some ‘disposableCash’.  To get disposable cash I subtract a years worth of expenses from a nodes balance, and then divide the result by 12.  In other words, after expenses, they can spend about 1/12 of their cash.  In reality we pick a random percent between 25-75 to pick how much they spend.

Which node they spend their cash at is determined by their reason.  They have pReason probability of picking the node that produces the most value(Economic Rent).  If they fail, they move down a rung and test again.  If they get all the way to the end they just pick a random node.  As a result, a node with great pReason will spend most of their cash over the 25 years with firms that are great at producing Economic rent.

After each month we do the demurrage or decay calculation and pass cash back to the nodes that seeded the cash in a node according to the ideas in hypercatallaxy. Now the interesting thing about capitalism is that it is just hypercatallaxy with a 0% demurrage rate and a 0% tax rate(We are ignoring taxes in this model).  So for capitalism we just set the demurrage rate to 0.  

We are giving all capitalist consumers the benefit of the doubt that they make decisions based on reason.  I’ve run the simulation without reason and when I do I end up with a 16% decrease in GDP when consumers are not incentivised to use reason.  Poverty actually went down because the disbursement of cash was more random.  I wasn’t expecting to discover this as it really gives us a reason to debate if we want to use reason or not because it may lead to short term poverty when the really, really unproductive nodes begin to be ignored by the market.  I’m not totally convinced this is a  bad thing though.

In the end I contend that ‘reason’ is amplified by the decay fee and pref dividends.  We certainly have some incentive to use reason in our consumption(although currently it is mostly guilt), but having a hypercatallaxian system will amplify this.  This model may not accurately represent the exact flows of this kind of reason, but I think it does a good job of simulating the outer bounds and we can use these to reason within.

This is not supposed to be a ‘realistic’ model of the economy.  That being said, it is AN economy and I think it is reasonable to say that it is a decent representative economy.  I can and must keep building more detailed models with more nodes, taxes, money supply growth, innovation, etc, but I have to start somewhere.

I give each node $1000 to start out with.  Let’s take a look at the results.

#### POVERTY

The first result to take a look at is poverty.  Some of these nodes are going to run out of cash and not be able to buy necessities.  Now I’m all for free markets but I’m also generally against hunger.  I’d love a system that just intrinsically takes care of this and I’ve tried to put that into hypercatallaxy.  I wasn’t sure that it would reduce poverty, but the results seem to bear it out.

![](./assets/image1bw.png)

**Fig 6.1** We see in this chart that the amount of poverty is significantly reduced as we redistribute wealth in a manner that sends it back to those that spent the cash with the wealth generators.

Our model only has 3,000 months in it. The fact that over 1/3 of them end up being poverty months under standard capitalism makes this a pretty sorry economy. As you can see here, the increase in decay fee has a profound effect of poverty.  I don’t know if politics and good sense could endure a 60% decay rate, but with it we cut the poverty rate by over 50%.

#### INCREASING GDP

This is a nice result but it doesn’t speak to my initial prediction that the economy will grow.  After all, we could just do some redistribution via taxes and get a similar result.  So let’s look at GDP in Fig 6.2.

![](./assets/image2bw.png)

**Fig. 6.2** Increasing the amount we redistribute to optimized value seeking nodes increase the GDP of our economy.


We can see here a clear increase in GDP as we increase the decay fee.  This is the result that I expected when I proposed the model.  How can this be?  When you remove cash from those that have it and give it to anyone you may not see this increase, but when you take it and give it to people that are good at spending it with value creators you increase GDP.

We can see how much ing Fig. 6.3.

![](./assets/image3bw.png)

**Fig 6.3** Our model shows some increase at each step in the increase in decay fee.

The total increase in GDP when we go to 60% is 8.2% in GDP over 25 years.  This is an increase of an average of 0.3% per year.  This does not seem like much until you consider that since the 90s we’ve been averaging around 2.5% this is a 12% increase in GDP which ends up being huge.

At this point I hope it is clear that using this type of redistribution is worth exploring further and potentially interesting enough to implement. I wish I could use this kind of money today.  

#### CONTROL GROUP

We’ve missed one key consideration of science.  It is one thing to compare a 0% decay fee to a 20% decay fee in a hypercatallaxian context.  We haven’t yet compared a different form of redistribution to the hypercatallaxian form of redistribution.  The form of redistribution I chose to compare it to was even distribution.  I implemented a wealth tax equal to the demurrage rate but instead of distributing based on hypercapitalism, I did an even redistribution.  When I first ran this in the model I was floored because it basically negated my theory.  See Fig. 6.4.

![](./assets/image4bw.png)

If we used reason in picking where we spend our money, we would not need hypercapitalism.  The market does not use reason and instead seeks the best immediate value without regard to the future value of production.

It took me a while to realize that this scenario still relied on our consumers using reason, but by removing hypercatallaxy I have removed the driver of reason.  If your redistribution is going to be even, why would you focus your spending with firms that promise future value?  I added some code to apply the even redistribution without the driver of reason and received the result seen in Fig 6.5.

![](./assets/image5bw.png)

An increase in taxation when there is no reason to the market leads nowhere.

The first thing we notice is that GDP starts about 16% below where it started when we used reason.  This makes sense.  If people are not spending their cash with value creators then the value creators won’t be making enough money.  We see here the redistribution has little to no reliable effect on the GDP.

#### CONCLUSION

After reviewing this model I think it is clear that the the adding a driver to use reason is a reliable way to increase GDP.  If you agree I’d encourage you to read up on more of my ideas at http://catallax.info and help support our patreon.

I have published this model in the source code for this book on github and in a runnable version at 

http://runnable.com/VTBkszswv6lIdEFR/hypercapitalism-sample-economy-for-node-js-and-hello-world

This model is currently in ‘monte carlo’ mode where it will generate random numbers and create wacky economies.  The goal is to show that most economies benefit from hypercatallaxy.  If you find one that doesn’t let me know.  The ones that don’t seem to benefit are the ones where everyone has a pretty much even ability to generate economic rent.  This makes sense as this is negating our assumption that some people are better value producers than others.  As a bonus, in these scenarios, poverty is usually eliminated even as GDP stays fairly flat.

If you want to run the standard test from above, you will need to follow the comments in the top of the server.js file.

Have fun and let me know how your testing goes.

<div style='display:none;' markdown="1">
\newpage




