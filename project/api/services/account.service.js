const Account = require('../models/account.model');
const crypto = require('crypto');

class AccountService {
  async createAccount(data) {
    if (await Account.findOne({ user: data.user })) {
      throw new Error('User already exists');
    }
    
    const account = new Account({
      ...data,
      balance: data.balance || 0
    });
    
    return account.save();
  }

  // Các method khác (getAccount, addTransaction...)
}

module.exports = new AccountService();