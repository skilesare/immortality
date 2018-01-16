
## A Definitions of 'Toward'

I use 'toward' in my title of this book in a straightforward manner.  An economics exists that can propel us toward a much longer lifespan for our minds.  This economics does not present a magic bullet that can outstrip the laws of physics and there may be a very long path from here to achieving immortality. Also, do not underestimate mankind's ability to aim poorly.

### On the Shape of the Change in Life Expectancy

What shape should we want to achieve in the change in life expectancy?  It turns out that the answer is 'a convex curve with a slope greater than one.'  This shape will help us reach a life expectancy that is for most practical cases 'immortal.'

If I am a 20 year old male in 2015 and my life expectancy is 80, and then a year later, in 2016, my life expectancy is 80.1, I have gained 0.1 years of life expectancy in a year.  The rate of change here is 1/10.  If that rate is constant we will end up with a life expectancy of 86 when we reach 80.  Six more years than we thought we'd get when we were 20! In fact, if we run the sim out to our expected death we see that we live an average of 86.7 years.

That is decent, but what if we were able to increase expectancy by 0.5 years per year?  Then our expectancy when we hit 80 is 110!  **30 more years!** But, we also see that if we run the sim to expected death we can expect to live to see 140.  Almost, twice what we thought we'd see when we were 20.

When we run the simulation with a rate of change of 1.1 years per year we see that our lives no longer have an 'expectancy.'  When we reach this tech milestone, and can sustain it, we will have reached practical 'immortality.'

When I say that this is an economics 'toward' immortality, this is what I am speaking of.  We need to accelerate the increase in life expectancy to as close to and/or beyond 1 per year as possible, and we need to do it as quickly as possible.  You would think that imminent death would be enough to mobilize 6 billion people to pursue this goal, but that is not the case. In this book I will put forward an economics that moves us toward that mobilization and make a case for the moral imperative to do so.

*The code to run these calculations is included below.*

In this example we will see how the life expectancy of an individual can improve during a lifetime.
We will also see how an increase in this rate of change can drastically change one's life expectancy.

This function contains our simulation up to 80 years old:

    run_life_test = (changePerYear)=>

Start with an expectancy of 80 years at 20 years old.

      life_expectancy_at_20 = 80
      new_life_expectancy = life_expectancy_at_20

Cycle through 60 years and improve the life expectancy by the changePerYear each year.

      for year in [1..60]
        new_life_expectancy =  new_life_expectancy + changePerYear
      return new_life_expectancy

This function contains our simulation up to expected death or 9999 years old:

    run_life_test2 = (changePerYear)=>

Start with an expectancy of 80 years at 20 years old.

      life_expectancy_at_20 = 80
      new_life_expectancy = life_expectancy_at_20
      age = 20

Cycle through until we are older than the life expectancy.

      while age < new_life_expectancy and age < 9999
        new_life_expectancy =  new_life_expectancy + changePerYear
        age = age + 1
      return new_life_expectancy

We will run our example with a 0.1 year increment per year.

    example1 = run_life_test(0.1)
    example1b = run_life_test2(0.1)

We will run our example with a 0.5 year increment per year.

    example2 = run_life_test(0.5)
    example2b = run_life_test2(0.5)

We will run our example with a 2 year increment per year.

    example3 = run_life_test(1.1)
    example3b = run_life_test2(1.1)

Output our results:

    console.log "example1:" + example1 + " death: " + example1b
    console.log "example2:" + example2 + " death: " + example2b
    console.log "example3:" + example3 + " death: " + example3b
