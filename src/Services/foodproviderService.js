import axios from "axios";
class foodproviderService {

    getAllFoodprovider() {
        return axios.get("http://localhost:8082/api/getAllFoodprovider");
    }

    getAllFoodproviderByLocation(location) {
        return axios.get("http://localhost:8082/api/foodprovider/{location}")
    }

    createFoodprovider(foodprovider) {
        return axios.post("http://localhost:8082/api/createfoodprovider", foodprovider);
    }

    updateFoodprovider(foodprovider) {
        return axios.put("http://localhost:8082/api/updatefoodprovider/{id}", foodprovider);
    }
}
export default foodproviderService
