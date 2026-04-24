from flask import Blueprint
from app.controllers.user_controllers import UserControllers

routes = Blueprint('routes', __name__)

routes.route('/user/register', methods=['POST'])(UserControllers.register)
routes.route('/user/login', methods=['POST'])(UserControllers.login)
routes.route('/user', methods=['GET'])(UserControllers.get_all_user)
routes.route('/user/<int:id>', methods=['GET'])(UserControllers.get_user_by_id)
routes.route('/user/<int:id>', methods=['PUT'])(UserControllers.update_user)
routes.route('/user/<int:id>', methods=['DELETE'])(UserControllers.delete_user)