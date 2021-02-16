import axios from 'axios';

const baseUrl = 'https://localhost:44341/api/';

const api = {
    user(url = baseUrl+'Users/'){
        return{
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, upRecord) => axios.put(url+id, upRecord),
            delete: id => axios.delete(url+id)
        }
    }
}
export default api;