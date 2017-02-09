# Appendix I - Code

#### Code Text:

## wallet.js

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

## capital.js

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

## Issuer.js

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


## server.js

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

