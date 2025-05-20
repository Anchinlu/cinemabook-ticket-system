// controllers/account.controller.js
exports.create = async (req, res) => {
    try {
      // Xử lý tạo tài khoản
      res.status(201).json({ message: "Tạo tài khoản thành công" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.get = async (req, res) => {
    // Xử lý lấy thông tin tài khoản
  };
  
  exports.delete = async (req, res) => {
    // Xử lý xóa tài khoản
  };
  
  exports.addTransaction = async (req, res) => {
    // Xử lý thêm giao dịch
  };
  
  exports.deleteTransaction = async (req, res) => {
    // Xử lý xóa giao dịch
  };