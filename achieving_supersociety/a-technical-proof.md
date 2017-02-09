### A Technical Proof

A published model of hypercatallaxy

tldr: Prove hypercatallaxy to yourself with a simulated economy here.

This chapter assumes you are familiar with the basics of hypercatallaxy, most of which are presented at http://catallax.info and discussed in depth in ‘Democratic Hypercatallaxy' Chapters of An Economics Toward Immortality.

The main thing we will focus on today are the ideas of demurrage or the decay fee and the idea of the prefered stock that is exchanged with each and every cash transaction in a hypercapitalistic economy.

#### INTRO

As a short review, if I buy a bottle of wine for $10, I get the wine and 10 ‘shares’ in the wine merchants account.  If that $10 sits in his account for 1 year at a 12% decay rate, I will receive back $1.20.  If he spends the money, he gets 10 shares in someone elses account and I only get 12% of his $1.20.  This is recursive and cumulative so eventually I will see most of my cash back.

Many stop here and either don’t believe me or think I’m doing some funny math.  I’ll be the first to admit that I’m not great at the maths.  I’m trying to get better and I’m specifically looking for someone interested in mentoring me through the relevant bits.  What I am decent at is computer programming and building models, so in this article I’m going to publish a very basic model that will hopefully be intriguing enough to get some people to PAY ATTENTION and help me move the ball toward the goal.

The argument against capitalism that I put forward is that while it does a great job of rewarding capitalistic investment, and to an extent capitalistic banking, it does a poor job of leveraging the general economic buying and selling that goes on in the economy.  Investors seek value creation, but consumers are just interested in the ‘best deal’ irrespective of the producers potential future value creation.

For example, take two apples priced at $1.00 and $1.01.  Apple 1 is made on a farm that abuses laborers, abuses its soil, and is generally poorly run.  Apple 2 is made on a farm that uses sustainable methods and is just in general a ‘better’ apple farm.  It is clear that apple farm 1 will likely be out of business within the year, but the consumer doesn’t care.  They buy apple 1 because it is cheaper for the same commodity.  It would be better for everyone if you bought 2, but you aren’t going to.  You have no incentive too.

This is a problem and now I have the model to prove that it is a problem.  And it is a potentially huge problem.  If we can fix this problem we can drastically increase our GDP.

#### THE MODEL

Here are the assumptions of this model:

Some nodes are better than other nodes at extracting rent for a good.

Some nodes are better than other nodes and noticing the potential for cash transferred to another node.  In other words, I’m better than you at investing in wine makers because I was one for 10 years and you just buy wine at the store.

Standard capitalism just refreshes capital at nodes that succeed in #1, and nodes that use #2 to invest.  Hypercapitalism uses all economic activity when refreshing nodes in #2.

My theory is that is that the more you refresh the nodes that are good at producing value and the nodes that are good at seeking value, you will have a more robust economy with much higher growth.

Nodes in #1 are refreshed by people buying and selling goods that they value.  If a node attracts revenue then it will have more resources to create value.

Nodes in #2 are refreshed in Hypercapitalism by charging the decay fee in an account and passing it back to those that paid into the account in proportion to how much they paid into the account.

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

After each month we do the demurrage or decay calculation and pass cash back to the nodes that seeded the cash in a node according to the ideas in hypercapitalism. Now the interesting thing about capitalism is that it is just hypercapitalism with a 0% demurrage rate and a 0% tax rate(We are ignoring taxes in this model).  So for capitalism we just set the demurrage rate to 0.  

We are giving all capitalist consumers the benefit of the doubt that they make decisions based on reason.  I’ve run the simulation without reason and when I do I end up with a 16% decrease in GDP when consumers are not incentivised to use reason.  Poverty actually went down because the disbursement of cash was more random.  I wasn’t expecting to discover this as it really gives us a reason to debate if we want to use reason or not because it may lead to short term poverty when the really, really unproductive nodes begin to be ignored by the market.  I’m not totally convinced this is a  bad thing though.

In the end I contend that ‘reason’ is amplified by the decay fee and pref dividends.  We certainly have some incentive to use reason in our consumption(although currently it is mostly guilt), but having the hypercapital system will amplify this.  This model may not accurately represent the exact flows of this kind of reason, but I think it does a good job of simulating the outer bounds and we can use these to reason within.

This is not supposed to be a ‘realistic’ model of the economy.  That being said, it is AN economy and I think it is reasonable to say that it is a decent representative economy.  I can and must keep building more detailed models with more nodes, taxes, money supply growth, innovation, etc, but I have to start somewhere.

I give each node $1000 to start out with.  Let’s take a look at the results.

#### POVERTY

The first result to take a look at is poverty.  Some of these nodes are going to run out of cash and not be able to buy necessities.  Now I’m all for free markets but I’m also generally against hunger.  I’d love a system that just intrinsically takes care of this and I’ve tried to put that into hypercapitalism.  I wasn’t sure that it would reduce poverty, but the results seem to bear it out.
We see in this chart that the amount of poverty is significantly reduced as we redistribute wealth in a manner that sends it back to those that spent the cash with the wealth generators.

![](./assets/Image1.png)

We see in this chart that the amount of poverty is significantly reduced as we redistribute wealth in a manner that sends it back to those that spent the cash with the wealth generators.

Our model only has 3,000 months in it. The fact that over ⅓ of them end up being poverty months under standard capitalism makes this a pretty sorry economy. As you can see here, the increase in decay fee has a profound effect of poverty.  I don’t know if politics and good sense could endure a 60% decay rate, but with it we cut the poverty rate by over 50%.

#### INCREASING GDP

This is a nice result but it doesn’t speak to my initial prediction that the economy will grow.  After all, we could just do some redistribution via taxes and get a similar result.  So let’s look at GDP:

![](/assets/image2.png)

Increasing the amount we redistribute to optimized value seeking nodes increase the GDP of our economy.


We can see here a clear increase in GDP as we increase the decay fee.  This is the result that I expected when I proposed the model.  How can this be?  When you remove cash from those that have it and give it to anyone you may not see this increase, but when you take it and give it to people that are good at spending it with value creators you increase GDP.

We can see how much below:

![](/assets/Image3.png)

Our model shows some increase at each step in the increase in decay fee.

The total increase in GDP when we go to 60% is 8.2% in GDP over 25 years.  This is an increase of an average of 0.3% per year.  This does not seem like much until you consider that since the 90s we’ve been averaging around 2.5% this is a 12% increase in GDP which ends up being huge.

At this point I hope it is clear that using this type of redistribution is worth exploring further and potentially interesting enough to implement. I wish I could use this kind of money today.  

#### CONTROL GROUP

We’ve missed one key consideration of science.  It is one thing to compare a 0% decay fee to a 20% decay fee in a hypercapitalism context.  We haven’t yet compared a different form of redistribution to the hypercapitalism form of redistribution.  The form of redistribution I chose to compare it to was even distribution.  I implemented a wealth tax equal to the demurrage rate but instead of distributing based on hypercapitalism, I did an even redistribution.  When I first ran this in the model I was floored because it basically negated my theory.  It looked like this:

![](/assets/image4.png)

If we used reason in picking where we spend our money, we would not need hypercapitalism.  The market does not use reason and instead seeks the best immediate value without regard to the future value of production.

It took me a while to realize that this scenario still relied on our consumers using reason, but by removing hypercapitalism I’m removed the driver of reason.  If your redistribution is going to be even, why would you focus your spending with firms that promise future value?  I added some code to apply the even redistribution without the driver of reason and received the following:

![](/assets/image5.png)

An increase in taxation when there is no reason to the market leads nowhere.

The first thing we notice is that GDP starts about 16% below where it started when we used reason.  This makes sense.  If people are not spending their cash with value creators then the value creators won’t be making enough money.  We see here the redistribution has little to no reliable effect on the GDP.

#### CONCLUSION

After reviewing this model I think it is clear that the the adding a driver to use reason is a reliable way to increase GDP.  If you agree I’d encourage you to read up on more of my ideas at hypercapital.info and help me out with the kickstarter.  The worst that can happen is you end up with a cool shirt.

I have published this model at http://runnable.com/VTBkszswv6lIdEFR/hypercapitalism-sample-economy-for-node-js-and-hello-world

This model is currently in ‘monte carlo’ mode where it will generate random numbers and create wacky economies.  The goal is to show that most economies benefit from hypercapitalism.  If you find one that doesn’t let me know.  The ones that don’t seem to benefit are the ones where everyone has a pretty much even ability to generate economic rent.  This makes sense as this is negating our assumption that some people are better value producers than others.  As a bonus, in these scenarios, poverty is usually eliminated even as GDP stays fairly flat.

If you want to run the standard test from above, you will need to follow the comments in the top of the server.js file.

Have fun and let me know how your testing goes.

#### Code Text:

wallet.js

```
(function() {
  var Wallet,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  if (global.ticksPerDay == null) {
    global.ticksPerDay = 24 * 60 * 60 * 1000;
  }

  if (global.demurragePerYear == null) {
    global.demurragePerYear = 0.05;
  }

  if (global.retainedPercentage == null) {
    global.retainedPercentage = 0.5;
  }

  if (global.walletCount == null) {
    global.walletCount = 1;
  }

  Wallet = (function() {
    function Wallet(op) {
      this.totalPrefs = __bind(this.totalPrefs, this);
      this.getPrefsAsPercentage = __bind(this.getPrefsAsPercentage, this);
      this.issuePref = __bind(this.issuePref, this);
      this.payToWallet = __bind(this.payToWallet, this);
      this.altpayToWallet = __bind(this.altpayToWallet, this);
      this.filePrefPayment = __bind(this.filePrefPayment, this);
      this.demurrage = __bind(this.demurrage, this);
      this.makeCurrent = __bind(this.makeCurrent, this);
      this.procPrefPaymentStep = __bind(this.procPrefPaymentStep, this);
      if (global.issuer == null) {
        require("./Issuer.js");
      }
      this._ = global._ != null ? global._ : require("underscore");
      this.options = op;
      this.name = "";
      this.balance = 0;
      this.prefs = {};
      this.prefsPaid = {};
      this.issuer = global.issuer;
      this.totalPrefsSum = 0;
      this.cacheTotalPrefsCount = -1;
      this.totalPrefsCount = 0;
      this.prefPayments = [];
      this.lastDemurrage = (new Date()).getTime();
      if (op != null) {
        if (op.name != null) {
          this.name = op.name;
        }
        if (op.balance != null) {
          this.balance = op.balance;
        }
        if (op.prefs != null) {
          this.prefs = op.prefs;
        }
        if (op.lastDemurrage != null) {
          this.lastDemurrage = op.lastDemurrage;
        }
      }
      if (this.name.length === 0) {
        this.name = global.walletCount;
        global.walletCount = global.walletCount + 1;
      }
      if (global['__wallets'] == null) {
        global['__wallets'] = {};
      }
      global['__wallets'][this.name] = this;
    }

    Wallet.prototype.procPrefPaymentStep = function(demurragePerYear, retainedPercentage) {
      var amount, amountToKeep, dest, distAmount, filed, i, item, items, lengthofdemurrage, lowTick, prefItems, _i, _j, _len, _len1;
      lowTick = this._.min(this.prefPayments, (function(_this) {
        return function(o) {
          return o.demurrageTick;
        };
      })(this)).demurrageTick;
      items = this._.where(this.prefPayments, {
        demurrageTick: lowTick
      });
      lengthofdemurrage = lowTick - this.lastDemurrage;
      if (lengthofdemurrage > 0) {
        lengthofdemurrage = lengthofdemurrage / global.ticksPerDay;
        this.demurrage(lowTick, demurragePerYear, retainedPercentage);
      }
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        amountToKeep = item.amount * retainedPercentage;
        distAmount = item.amount - amountToKeep;
        prefItems = this.getPrefsAsPercentage();
        if (distAmount > 0 && prefItems.length > 0) {
          for (_j = 0, _len1 = prefItems.length; _j < _len1; _j++) {
            i = prefItems[_j];
            dest = this.findWallet(i.key);
            amount = distAmount / 2;
            filed = dest.filePrefPayment(this, amount, lowTick);
            if (this.prefsPaid[dest.name] == null) {
              this.prefsPaid[dest.name] = [];
            }
            this.prefsPaid[dest.name].push(filed);
          }
        } else if (distAmount > 0 && this.issuer.taxRate > 0) {
          this.issuer.balance = this.issuer.balance + distAmount;
        }
        this.balance = this.balance + amountToKeep;
      }
      this.prefPayments = this._.reject(this.prefPayments, (function(_this) {
        return function(o) {
          return o.demurrageTick === lowTick;
        };
      })(this));
      return lengthofdemurrage;
    };

    Wallet.prototype.makeCurrent = function(targetTick, demurragePerYear, retainedPercentage) {
      var items;
      if (demurragePerYear == null) {
        demurragePerYear = global.demurragePerYear;
      }
      if (retainedPercentage == null) {
        retainedPercentage = global.retainedPercentage;
      }
      items = this._.filter(this.prefPayments, (function(_this) {
        return function(o) {
          return o.demurrageTick < targetTick;
        };
      })(this));
      while (items.length > 0) {
        this.procPrefPaymentStep(demurragePerYear, retainedPercentage);
        items = this._.filter(this.prefPayments, (function(_this) {
          return function(o) {
            return o.demurrageTick <= targetTick;
          };
        })(this));
      }
      if (targetTick !== this.lastDemurrage) {
        return this.demurrage(targetTick, demurragePerYear, retainedPercentage);
      }
    };

    Wallet.prototype.demurrage = function(targetTick, demurragePerYear, retainedPercentage) {
      var amount, days, dest, filed, i, item, items, taxAmount, toProc, total, totalAmount, _i, _len;
      if (demurragePerYear == null) {
        demurragePerYear = global.demurragePerYear;
      }
      if (retainedPercentage == null) {
        retainedPercentage = global.retainedPercentage;
      }
      if (this.prefPayments.length > 0) {
        toProc = this._.filter(this.prefPayments, (function(_this) {
          return function(o) {
            return o.demurrageTick < targetTick;
          };
        })(this));
        if ((toProc != null) && toProc.length > 0) {
          this.makeCurrent(targetTick, demurragePerYear, retainedPercentage);
        }
      }
      total = 0;
      items = this.getPrefsAsPercentage();
      days = (targetTick - this.lastDemurrage) / global.ticksPerDay;
      totalAmount = days * this.balance * demurragePerYear / 365;
      if (!this.issuer) {
        this.issuer = global.issuer;
      }
      if (totalAmount > 0 && (this.issuer.name != null) && this.name === this.issuer.name) {
        item = {
          source: this.name,
          destination: "destroyed",
          amount: totalAmount,
          demurrageTick: targetTick
        };
        if (this.prefsPaid["destroyed"] == null) {
          console.log('didntexist');
          this.prefsPaid["destroyed"] = [];
        }
        this.prefsPaid["destroyed"].push(item);
        total = totalAmount;
        this.balance = this.balance - total;
      } else {
        if (items.length > 0) {
          taxAmount = totalAmount * this.issuer.taxRate;
          if (taxAmount > 0) {
            this.issuer.wallet.filePrefPayment(this, taxAmount, targetTick);
            total = total + taxAmount;
          }
          for (_i = 0, _len = items.length; _i < _len; _i++) {
            i = items[_i];
            dest = this.findWallet(i.key);
            amount = i.value * (totalAmount - taxAmount);
            if (amount > 0) {
              filed = dest.filePrefPayment(this, amount, targetTick);
              if (this.prefsPaid[dest.name] == null) {
                this.prefsPaid[dest.name] = [];
              }
              this.prefsPaid[dest.name].push(filed);
              total = total + amount;
            }
          }
          this.balance = this.balance - total;
        } else if (this.issuer.taxRate > 0) {
          console.log('noprefs!');
          amount = days * this.balance * demurragePerYear / 365;
          if (amount > 0) {
            this.issuer.wallet.filePrefPayment(this, amount, targetTick);
            total = amount;
          }
          this.balance = this.balance - total;
        }
      }
      return this.lastDemurrage = targetTick;
    };

    Wallet.prototype.filePrefPayment = function(sourceWallet, amount, executionTick) {
      var item;
      item = {
        source: sourceWallet.name,
        destination: this.name,
        amount: amount,
        demurrageTick: executionTick
      };
      this.prefPayments.push(item);
      return item;
    };

    Wallet.prototype.findWallet = function(name) {
      if ((global['__wallets'] != null) && (global['__wallets'][name] != null)) {
        return global['__wallets'][name];
      } else {
        return null;
      }
    };

    Wallet.prototype.altpayToWallet = function(wallet, amount, targetTick, demurragePerYear, retainedPercentage) {
      if (targetTick == null) {
        targetTick = (new Date()).getTime();
      }
      if (amount > this.balance) {
        console.log('not enough art');
        return false;
      }
      wallet.balance = wallet.balance + amount;
      this.balance = this.balance - amount;
      return true;
    };

    Wallet.prototype.payToWallet = function(wallet, amount, targetTick, demurragePerYear, retainedPercentage) {
      if (demurragePerYear == null) {
        demurragePerYear = global.demurragePerYear;
      }
      if (retainedPercentage == null) {
        retainedPercentage = global.retainedPercentage;
      }
      if (targetTick == null) {
        targetTick = (new Date()).getTime();
      }
      if (amount > this.balance) {
        console.log('not enough art');
        return false;
      }
      this.makeCurrent(targetTick);
      wallet.makeCurrent(targetTick);
      if (amount > this.balance) {
        console.log('not enough art after catch up');
        return false;
      }
      wallet.balance = wallet.balance + amount;
      wallet.issuePref(this, amount);
      this.balance = this.balance - amount;
      return true;
    };

    Wallet.prototype.issuePref = function(wallet, amount) {
      if (this.prefs[wallet.name] == null) {
        this.prefs[wallet.name] = 0;
      }
      if (this.prefsPaid[wallet.name] == null) {
        this.prefsPaid[wallet.name] = [];
      }
      this.totalPrefsCount = this.totalPrefsCount + 1;
      return this.prefs[wallet.name] = this.prefs[wallet.name] + amount;
    };

    Wallet.prototype.getPrefsAsPercentage = function() {
      var i, items, total;
      total = this.totalPrefs();
      items = [];
      for (i in this.prefs) {
        items.push({
          key: i,
          value: this.prefs[i] / total
        });
      }
      return items;
    };

    Wallet.prototype.totalPrefs = function() {
      var i;
      if (this.totalPrefsCount === this.cacheTotalPrefsCount) {
        return this.totalPrefsSum;
      } else {
        this.totalPrefsSum = 0;
        for (i in this.prefs) {
          this.totalPrefsSum = this.prefs[i] + this.totalPrefsSum;
        }
        this.cacheTotalPrefsCount = this.totalPrefsCount;
        return this.totalPrefsSum;
      }
    };

    return Wallet;

  })();

  module.exports.Wallet = Wallet;

}).call(this);

//# sourceMappingURL=Wallet.js.map

```

capital.js

```
 (function() {
  var Capital,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Capital = (function() {

    function Capital(op) {
      this.sellTo = __bind(this.sellTo, this);
      this.options = op;
      this.name = "";
      this.owner = null;
      if (op != null) {
        if (op.name != null) {
          this.name = op.name;
        }
        if (op.balance != null) {
          this.balance = op.balance;
        }
        if (op.owner != null) {
          this.owner = op.owner;
        }
      }
    }

    Capital.prototype.sellTo = function(buyerWallet, amount, targetTick) {
      var result;
      if (!(targetTick != null)) {
        targetTick = (new Date()).getTime();
      }
      result = buyerWallet.payToWallet(this.owner, amount, targetTick);
      if (result) {
        this.owner = buyerWallet;
        return true;
      } else {
        return false;
      }
    };

    return Capital;

  })();

  module.exports.Capital = Capital;

}).call(this);
```

Issuer.js

```
 (function() {
  var Issuer,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Issuer = (function() {

    function Issuer(op) {
      this.addBalance = __bind(this.addBalance, this);
      this._ = global._ != null ? global._ : require("underscore");
      if (!(global.Wallet != null)) {
        global.Wallet = require('./Wallet.js');
      }
      this.options = op;
      this.name = "";
      this.balance = 0;
      this.taxRate = 0;
      if (op != null) {
        if (op.taxRate != null) {
          this.taxRate = op.taxRate;
        }
        if (op.name != null) {
          this.name = op.name;
        }
      }
      if (!(this.wallet != null)) {
        this.wallet = new global.Wallet.Wallet({
          name: this.name
        });
      }
    }

    Issuer.prototype.addBalance = function(amount) {
      return this.balance = this.balance + amount;
    };

    return Issuer;

  })();

  if (!(global.issuer != null)) {
    global.issuer = new Issuer({
      name: 'usgt',
      taxRate: 0.0
    });
  }

  module.exports.Issuer = Issuer;

}).call(this);

```


server.js

```
(function() {
  var Capital, Wallet, atest, currentNameIndex, fixTest, http, pl, randomWalk, runSampleClosedEconomy, runSampleClosedEconomyWithWageGlutton, runSampleClosedEconomyWithWageTemprance, runSampleClosedEconomyWithWageTempranceAndTax, runSampleClosedEconomyWithWageTempranceAndTaxMeansOfRedistribute, simplest, _;

  http = require("http");

  Wallet = require("./Wallet.js");

  Capital = require("./Capital.js");

  _ = require("underscore");

  http.createServer(function(req, res) {
    console.log('starting up');

    /*
    Adjust test items here
     */

    /*ERScale is the amount we multiply the Economic Rent Distribution by. Increase the number to make good capitalists great. */
    var AGDP, APoverty, ARent, CummulativeGDPChange, CummulativePovertyChange, CummulativeRentChange, DemurrageTest, DistFunction, ERScale, ERVariance, Entities, FirstGDP, FirstPoverty, FirstRent, GDPChange, LastGDP, LastPoverty, LastPovertyMonths, LastRent, Months, PayFunction, PovertyChange, RentChange, StandardMonthlyCost, StartingCash, TestEachLevel, TotalGDP, TotalPovertyMonths, TotalRent, UseReason, demurrage, i, message, output, result, _i, _j, _len;
    ERScale = Math.floor(Math.random() * (10 - 1)) + 1;

    /*ERVariance is used to determine the standard deviation  of our Economic Rent Distribution.  Increase it it to make great capitalists very unique and very dominant */
    ERVariance = Math.floor(Math.random() * (28 - 1)) + 1;

    /*DemurrageTest are the demurrage levels to test */
    DemurrageTest = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

    /*number of months to test */
    Months = 300;

    /*number of Entities */
    Entities = 10;

    /*StartingCash is the Amount of cash to give each node */
    StartingCash = Math.floor(Math.random() * (100000 - 0)) + 0;

    /*StandardMonthlyCost is the Amount each person needs to spend on basic necessities. */
    StandardMonthlyCost = Math.floor(Math.random() * ((StartingCash / 12) - 0)) + 0;

    /*The number of times you want to run each simulation at each demurrage level */
    TestEachLevel = 5;

    /* UseReason will determine if the model attempts to use reason to find nodes with better future value.  You can set this to false to simulate non-hypercapitalistic redistribution of wealth */
    UseReason = true;

    /* DistFunction is the distribution model to use.  change to "even" if you want to test out non-hypercapitalistic distribution */
    DistFunction = "hypercapital";

    /* this is the function used by the wallets to distribute cash.  Change to "altpayToWallet" if you don't want prefs to be traced and want to simulate non-hypercapitalistic redistribution of wealth */
    PayFunction = "payToWallet";

    /*
    set true == true these to run the standard test
     */
    if (true === false) {
      ERScale = 4;
      ERVariance = 6;
      DemurrageTest = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
      Months = 300;
      Entities = 10;
      StartingCash = 1000;
      StandardMonthlyCost = 50;
      TestEachLevel = 5;
      UseReason = true;
      DistFunction = "hypercapital";
      PayFunction = "payToWallet";
    }

    /*
    Hesitate to change anything below
     */
    message = "";
    message = message + "Starting Cash:" + StartingCash + "\n";
    message = message + "MonthlyCost:" + StandardMonthlyCost + "\n";
    message = message + "ERScale:" + ERScale + "\n";
    message = message + "ERVariance:" + ERVariance + "\n";
    global.retainedPercentage = 1;
    output = "";
    message = message + "Demurrage,GDP,Rent,PovertyMonths,ChangeGDP,ChangeRent,ChangePoverty,%GDP,Total%GDP,%Rent,Total%Rent,%Poverty,Total%Poverty" + "\n";
    LastGDP = 0;
    LastRent = 0;
    LastPovertyMonths = 0;
    CummulativeGDPChange = 0;
    CummulativeRentChange = 0;
    CummulativePovertyChange = 0;
    FirstGDP = 0;
    FirstRent = 0;
    FirstPoverty = 0;
    for (_i = 0, _len = DemurrageTest.length; _i < _len; _i++) {
      demurrage = DemurrageTest[_i];
      console.log(demurrage);
      TotalGDP = 0;
      TotalRent = 0;
      TotalPovertyMonths = 0;
      GDPChange = 0;
      RentChange = 0;
      PovertyChange = 0;
      for (i = _j = 1; 1 <= TestEachLevel ? _j <= TestEachLevel : _j >= TestEachLevel; i = 1 <= TestEachLevel ? ++_j : --_j) {
        console.log('test' + i);
        result = randomWalk({
          entities: Entities,
          months: Months,
          demurrage: demurrage,
          retaining: 1,
          tax: 0,
          ERScale: ERScale,
          ERVariance: ERVariance,
          StartingCash: StartingCash,
          StandardMonthly: StandardMonthlyCost,
          PayFunction: PayFunction,
          DistFunction: DistFunction,
          UseReason: UseReason
        });
        TotalGDP = result.GDP + TotalGDP;
        TotalRent = result.Rent + TotalRent;
        TotalPovertyMonths = result.MissedOpps + TotalPovertyMonths;
        output = output + result.output;
      }
      AGDP = LastGDP;
      ARent = LastRent;
      APoverty = LastPoverty;
      LastGDP = Math.round(TotalGDP / 5);
      LastRent = Math.round(TotalRent / 5);
      LastPoverty = Math.round(TotalPovertyMonths / 5);
      if (AGDP !== 0) {
        GDPChange = (LastGDP - AGDP) / AGDP;
        RentChange = (LastRent - ARent) / ARent;
        PovertyChange = (LastPoverty - APoverty) / APoverty;
        CummulativeGDPChange = (LastGDP - FirstGDP) / FirstGDP;
        CummulativeRentChange = (LastRent - FirstRent) / FirstRent;
        CummulativePovertyChange = (LastPoverty - FirstPoverty) / FirstPoverty;
      } else {
        FirstGDP = LastGDP;
        FirstRent = LastRent;
        FirstPoverty = LastPoverty;
      }
      message = message + demurrage + "," + LastGDP + ',' + LastRent + ',' + LastPoverty + ',' + (LastGDP - AGDP) + ',' + (LastRent - ARent) + ',' + (LastPoverty - APoverty) + ',' + GDPChange.toFixed(3) + ',' + CummulativeGDPChange.toFixed(3) + "," + RentChange.toFixed(3) + ',' + CummulativeRentChange.toFixed(3) + "," + PovertyChange.toFixed(3) + ',' + CummulativePovertyChange.toFixed(3) + "\n";
    }
    output = message + output;
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });
    res.end(output);
  }).listen(80);

  console.log("Server listening on port 5557");

  currentNameIndex = 0;

  pl = (function(_this) {
    return function(line) {
      return _this.output = _this.output + line + "\n";
    };
  })(this);

  this.output = "";

  randomWalk = (function(_this) {
    return function(data) {
      var GDP, MissedGDP, MissedOpps, RentCollected, balances, currentTick, distribution, endDemurrage, even, gaussian, i, money_supply, nodes, orderedNodes, startDemurrage, thisNode, total, x, _i, _j, _ref, _ref1;
      _this.output = "";
      if (data.ERScale == null) {
        data.ERScale = 4;
      }
      if (data.entities == null) {
        data.entities = 10;
      }
      if (data.months == null) {
        data.months = 10;
      }
      if (data.demurrage != null) {
        global.demurragePerYear = data.demurrage;
      }
      if (typeof dataretained !== "undefined" && dataretained !== null) {
        global.retainedPercentage = data.retained;
      }
      endDemurrage = (new Date()).getTime();
      startDemurrage = endDemurrage - (global.ticksPerDay * 365 * 30);
      GDP = 0;
      MissedGDP = 0;
      RentCollected = 0;
      MissedOpps = 0;
      nodes = [];
      gaussian = require('gaussian');
      distribution = gaussian(data.entities / 2, (data.entities / data.ERVariance) * (data.entities / data.ERVariance));
      for (x = _i = 0, _ref = data.entities; 0 <= _ref ? _i < _ref : _i > _ref; x = 0 <= _ref ? ++_i : --_i) {
        console.log(x);
        thisNode = new Wallet.Wallet({
          name: "n" + x,
          lastDemurrage: startDemurrage,
          balance: data.StartingCash
        });
        thisNode.pER = distribution.pdf(x) * data.ERScale;
        thisNode.pReason = x / data.entities;
        nodes.push(thisNode);
      }
      orderedNodes = _.sortBy(nodes, function(item) {
        return item.pER;
      });
      orderedNodes = orderedNodes.reverse();
      pl("Name,Rent,Reason");
      nodes.map(function(o) {
        return pl(o.name + "," + o.pER.toFixed(2) + ',' + o.pReason.toFixed(2));
      });
      pl('Demmurage:' + data.demurrage);
      pl('Month,GDP,MissedGDP,MissedOps,Rent,MoneySupply');
      balances = "month";
      _.map(nodes, function(o) {
        return balances = balances + ',' + o.name;
      });
      balances = balances + "\n";
      for (i = _j = 1, _ref1 = data.months; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 1 <= _ref1 ? ++_j : --_j) {
        currentTick = startDemurrage + (i * global.ticksPerDay * 30);
        if (data.DistFunction === 'even') {
          total = 0;
          _.map(nodes, function(o) {
            var tax;
            tax = o.balance * data.demurrage / 12;
            o.balance = o.balance - tax;
            return total = total + tax;
          });
          even = total / data.entities;
          _.map(nodes, function(o) {
            return o.balance = o.balance + even;
          });
        } else {
          _.map(nodes, function(o) {
            return o.makeCurrent(currentTick);
          });
        }
        _.map(nodes, function(aNode) {
          var amount, disposableCash, foundTarget, possibleNode, targetNode, test, with_rent, _k, _len;
          foundTarget = null;
          if (data.UseReason) {
            for (_k = 0, _len = orderedNodes.length; _k < _len; _k++) {
              possibleNode = orderedNodes[_k];
              if (foundTarget === null && possibleNode.name !== aNode.name) {
                test = Math.random();
                if (test < aNode.pReason) {
                  foundTarget = possibleNode;
                }
              }
            }
            if (foundTarget === null) {
              targetNode = Math.floor(Math.random() * data.entities);
              foundTarget = nodes[targetNode];
            }
          } else {
            targetNode = Math.floor(Math.random() * data.entities);
            foundTarget = nodes[targetNode];
          }
          if (foundTarget.name !== aNode.name) {
            disposableCash = aNode.balance - (data.StandardMonthly * 12);
            amount = (((Math.floor(Math.random() * 50) + 25) / 100) * disposableCash / 12) + data.StandardMonthly;
            with_rent = amount * (1 + foundTarget.pER);
            if (with_rent < aNode.balance) {
              aNode[data.PayFunction](foundTarget, with_rent, currentTick + 1);
              GDP = GDP + with_rent;
              return RentCollected = RentCollected + (with_rent - amount);
            } else {
              console.log(aNode.name + ' couldnt pay in month ' + i);
              MissedOpps = MissedOpps + 1;
              return MissedGDP = MissedGDP + with_rent;
            }
          }
        });
        money_supply = 0;
        _.map(nodes, function(aNode) {
          return money_supply = money_supply + aNode.balance;
        });

        /*
        if money_supply < (data.entities * data.StartingCash) - 2
          missing = (data.entities * data.StartingCash) - money_supply - 2
          adding = missing / data.entities
          _.map nodes,(aNode) =>
            aNode.balance = aNode.balance + adding
          money_supply = 0
          _.map nodes,(aNode) =>
            money_supply = money_supply + aNode.balance
         */
        _.map(nodes, function(o) {
          return o.makeCurrent(currentTick);
        });
        pl(i + ',' + Math.round(GDP) + ',' + Math.round(MissedGDP) + ',' + MissedOpps + ',' + Math.round(RentCollected) + ',' + Math.round(money_supply));
        balances = balances + i;
        _.map(nodes, function(o) {
          return balances = balances + ',' + Math.round(o.balance);
        });
        balances = balances + "\n";
      }
      _this.output = _this.output + balances;
      return {
        output: _this.output,
        GDP: GDP,
        MissedGDP: MissedGDP,
        MissedOpps: MissedOpps,
        Rent: RentCollected
      };
    };
  })(this);


}).call(this);

//# sourceMappingURL=item.js.map

```

