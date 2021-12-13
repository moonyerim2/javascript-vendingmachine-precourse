export default class changeCalculator {
  constructor(vendingMachineMoney) {
    this.money = vendingMachineMoney;
    this.change = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.coins = [500, 100, 50, 10];
  }

  getReturnMoney(clientMoney, vendingMachineMoney) {
    if (clientMoney > vendingMachineMoney) {
      return vendingMachineMoney;
    }
  }

  returnChange(clientMoney, vendingMachineMoney) {
    let returnMoney = this.getReturnMoney(clientMoney, vendingMachineMoney);

    for (let coin of this.coins) {
      if (!this.money[coin]) {
        break;
      }

      while (returnMoney >= coin && clientMoney >= 0) {
        returnMoney -= coin;
        this.money[coin] -= 1;
        this.change[coin] += 1;
      }
    }

    return clientMoney - vendingMachineMoney;
  }
}
