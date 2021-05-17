import axios from "axios";

class menuService{

    getMenuByDish(dishName){
        return axios.get("http://localhost:8082/api//menu/{dishName}");
    }
    createMenu(menu)
    {
        return axios.post("http://localhost:8082/api/createMenu",menu);
    }
    updateMenu(menu){
        return axios.put("http://localhost:8082/api/updateMenu/{id}",menu);
    }
}
