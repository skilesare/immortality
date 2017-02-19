## Technical Implementation

Much of the proposed constitution relies on the idea of things being done 'in the blockchain.' Under one proposal ethereum could be used as a technical implementation layer. Modern(as of 2017) ethereum is likely not up to the challenge for implementing a set of contracts capable of running a world wide government, but the thought put into the project should give us a good foundation to start the conversation.

I will not go into the details of smart contracts or the underlying technology. If you would like to know more, please visit: https://www.ethereum.org/

This volume is not an ideal place flesh out the entire contract. I would encourage the community to collaborate on this project and produce the full set of contracts that will be needed to run a hypercatallaxian economy on top of the proposed constitution.

The underlying ideals or rule of law and common law dictate that we don't have to lay out every single detail of the constitution, only that we have the ability for the court to override the general functionality of the contract.

We accomplish this by using addresses and interfaces. New 'code' can be brought online by creating a new contract at a different address that uses the same interface. The interface dictates what kind of functions a contact should have.

As a practical example, take the inauguration of a new President. Our Issuer object allows for this to take place on the blockchain by asking both houses of congress for permission to move the Executive contract to a new address. Alternatively, the court can specify a new address as well. In most cases we will rely on congress to certify the executive, but if congress steps out of line, the court can install a new executive.


```
contract Issuer{
  address executiveAddress;
  adresss houseAddress;
  address senateAddress;
  address courtAddress;

  ...

  struct ExecutiveHistory {
        uint block;
        address executive;
        string agent;
    }


  ExecutiveHistory[] executiveHistory;


  function setExecutive(address newExecutive) return (bool result){
    //both houses needs to have certified the vote to install an new executive
    House verifyHouse = House(houseAdress);
    bool bHouse = verifyHouse.validateExecutive(newExecutive);
    if(bHouse){
      Senate verifySenate = Senate(senateAddress);
      bool bSenate = verifySenate.validateExecutive(newExecutive);
      if(bSenate){
        //set the new executive
        executiveAddress = newExecutive;

        //record the chain in blockchain storage so history will be known.
        ExecutiveHistorynewHistory = new ExecutiveHistory(
            {
              block: block.number,
              executive: newExecutive,
              agent: "election"
            });
        executiveHistory.push(newHistory);
        return true;
      }

    }

    //alteratively the court can install a new executive
    Court verifyCourt = Court(courtAddress);
    bool bCourt = verifyCourt.validateExecutive(newExecutive);
    if(bCourt){

        //set the new executive
        executiveAddress = newExecutive;

        //record the change in history
        ExecutiveHistory newHistory = new ExecutiveHistory(
          {
            block: block.number,
            executive: newExecutive,
            agent: "court"
          });
        executiveHistory.push(newHistory);
        return true;
      }
    }
    return false;
  }

  ...

}

  ```