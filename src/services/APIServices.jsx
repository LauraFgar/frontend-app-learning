import {
    getConfig,
  } from '@edx/frontend-platform';
class APIService {
    visit = async (course_id, block_id) => {
        const URL = "v1/courses/course/" + course_id + "/block/" + block_id + "/visit"
        fetch( getConfig().API_GW_URL + URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not success.');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });        
    };
}
export default APIService;
