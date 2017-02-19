
##Technical Implementation

Much of the proposed constitution



contract Issuer{
  address executiveAddress;
  adresss houseAddress;
  address senateAddress;
  address courtAddress;

  struct ExecutiveHistory {
        uint block;
        address executive;
        string agent;
    }

  struct HouseHistory {
        uint block;
        address executive;
    }

  struct SenateHistory {
        uint block;
        address executive;
    }

  struct CourtHistory {
        uint block;
        address executive;
    }

  function Issuer(){

  }

  ExecutiveHistory[] executiveHistory;
  HouseHistory[] executiveHistory;
  SenateHistory[] executiveHistory;
  CourtHistory[] executiveHistory;

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
        ExecutiveHistorynewHistory = new ExecutiveHistory({block: block.number, executive: newExecutive, agent: "election"})
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
        ExecutiveHistory newHistory = new ExecutiveHistory({block: block.number, executive: newExecutive, agent: "court"})
        executiveHistory.push(newHistory);
        return true;
      }
    }
    return false;
  }

  function setHouse(address newHouse) return (bool result){
    //the Executive certifies a new house
    Executive verifyExecutive = Executive(executiveAdress);
    bool bExecutive = verifyExecutive.validateHouse(newHouse);
    if(bExecutive){
      houseAddress = newHouse;
      HouseHistory newHistory = new HouseHistory({block: block.number, house: newHouse})
      houseHistory.push(newHistory);
      return true;
    }
    //we don't need the court to be able to override the house
    //becuase the court can override the executive
    //if neccessary
    return false;
  }

  function setSenate(address newSenate) return (bool result){
    //the Executive certifies a new senate
    Executive verifyExecutive = Executive(executiveAdress);
    bool bExecutive = verifyExecutive.validateSenate(newHouse);
    if(bExecutive){
      senateddress = newSenate;
      SenateHistory newHistory = new SenateHistory({block: block.number, senate: newSenate})
      senateHistory.push(senateHistory);
      return true;
    }
    //we don't need the court to be able to override the senate
    //becuase the court can override the executive
    //if neccessary
    return false;
  }

  function setCourt(address newCourt) return (bool result){
    //the Executive nominates the court and
    //the senate confirms
    //the court also has say over its membership since judges
    //are appointed for life.  Thus the court must agree to its own change

    Executive verifyExecutive = Executive(executiveAdress);
    bool bExecutive = verifyExecutive.validateCourt(newCourt);
    if(bExecutive){
      Senate verifySenate = Senate(senateAddress);
      bool bSenate = verifySenate.validateCourt(newCourt);
      if(bSenate){
        Court verifyCourt = Court(courtAddress);
        bool bCourt = verifyCourt.validateCourt(newCourt);
        if(bCourt){
          courtAddress = newCourt;
          CourtHistory newHistory = new CourtHistory({block: block.number, court: newCourt})
          courtHistory.push(newHistory);
          return true;
        }
      }
    }
    return false;
  }

}
House
Senate
Court
Executive
Institution
Citizen
Family
Corporation
State
Agency