import axios from 'axios';

const CreateCollection = async (name, recipes) => {
    try {
      const response = await axios.post(`http://10.0.2.2:3000/collections`, {name: name, recipes: recipes});
      console.log("SUCCESS");
      return response.data;
    } catch (error) {
      console.log("FAILURE");
      console.log(error);
      if (error.response) {
      //   console.log("DATA" + error.response.data);
      //   console.log("STATUS" + error.response.status);
      //   console.log("HEADERS" + error.response.headers);
      } else if (error.request) {
        console.log("REQUEST" + error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
};

export default CreateCollection;
export { CreateCollection };