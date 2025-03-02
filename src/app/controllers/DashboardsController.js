import Order from "../models/Order";

class DashboardsController {
    async index(req, res) {
        try {
          const orders = await Order.find();
          return res.status(200).json({
            success: true,
            data: orders
          });
        } catch (error) {
          return res.status(500).json({
            error: true,
            message: 'Erro ao buscar os dados do dashboard.'
          });
        }
      }
}
export default new DashboardsController();